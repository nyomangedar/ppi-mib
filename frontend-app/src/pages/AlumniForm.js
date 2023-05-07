import React, { useState, useEffect } from "react";
import arrow from "../image/formAsset/arrow-back.svg";
import { Button } from "react-bootstrap";
import ContactIndo from "../components/RegisterForm/ContactIndo";
import ContactUK from "../components/RegisterForm/ContactUK";
import WarningModal from "../components/RegisterForm/WarningModal";
import FormBreadCrumb from "../components/RegisterForm/FormBreadcrumb";
import isFieldEmpty from "../tools/emptyField";
import { useMediaQuery } from "react-responsive";
import Education from "../components/RegisterForm/Education/Education";
import {
    useRegisterSensusMutation,
    useCheckSensusMutation,
} from "../features/sensus/sensusApiSlice";
import AlumniBasicInfo from "../components/RegisterForm/AlumniBasicInfo";
import BasicInfo from "../components/RegisterForm/BasicInfo";
import Banner from "../components/RegisterForm/Banner";
import alumniFormBanner from "../image/formAsset/alumniFormBanner.png";
import { useNavigate } from "react-router-dom";

function AlumniForm() {
    const [addRegisterSensus, { isLoading, isSuccess, isError, error }] =
        useRegisterSensusMutation();

    const navigate = useNavigate();

    // useEffect(() => {
    //     if (isSuccess) navigate("/");
    // }, [isSuccess]);

    const isMobile = useMediaQuery({ query: "(max-width: 550px)" });

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 2;

    const [showWarningModal, setShowWarningModal] = useState(false);
    const [unfilledFields, setUnfilledFields] = useState([]);
    const [dateError, setDateError] = useState("");
    const [termDateError, setTermDateError] = useState("");

    const [citizenFormData, setCitizenFormData] = useState({
        idnEmergencyRelationship: "",
        idnEmergencyPhone: "",
        idnEmergencyName: "",
        ukEmergencyRelationship: "",
        ukEmergencyPhone: "",
        ukEmergencyName: "",
        company: "",
        occupation: "",
        stayPeriod: "",
        permanentResident: null,
        education: [
            {
                degree: "",
                funding: "",
                course: "",
                university: "",
                otherUni: "",
                graduateYear: "",
                entryYear: "",
            },
        ],
        ukZCode: "",
        ukAddress: "",
        idnZCode: "",
        district: "",
        city: "",
        province: "",
        indonesianAddress: "",
        religion: "",
        relationshipStatus: "",
        password: "",
        email: "",
        dob: "",
        indonesianPhoneNumber: "",
        ukPhoneNumber: "",
        fullName: "",
        families: [],
        // 	{
        // 		fullname: "",
        // 		relationship: "",
        // 		dob: null,
        // 	},
        // ],
    });

    const today = new Date().toISOString().substring(0, 10);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    const getUnfilledFields = (formData, currentPage) => {
        let unfilledFields = [];

        if (currentPage === 1) {
            if (isFieldEmpty(formData.fullName))
                unfilledFields.push("Full Name");
            if (isFieldEmpty(formData.dob))
                unfilledFields.push("Date of Birth");
            if (dateError !== "")
                unfilledFields.push(
                    "DoB: Future date is not valid for date of birth"
                );
            if (isFieldEmpty(formData.ukPhoneNumber))
                unfilledFields.push("UK Phone Number");
            if (isFieldEmpty(formData.indonesianPhoneNumber))
                unfilledFields.push("Indonesian Phone Number");
            if (isFieldEmpty(formData.email)) unfilledFields.push("Email");
            // if (formData.relationshipStatus))
            if (isFieldEmpty(formData.relationshipStatus))
                unfilledFields.push("Relationship Status");
            if (isFieldEmpty(formData.religion))
                unfilledFields.push("Religion");
            // if (isFieldEmpty(formData.indonesianAddress))
            // 	unfilledFields.push("Indonesian Address");
            // if (isFieldEmpty(formData.province)) unfilledFields.push("Province");
            // if (isFieldEmpty(formData.city)) unfilledFields.push("City");
            // if (isFieldEmpty(formData.district)) unfilledFields.push("District");
            // if (isFieldEmpty(formData.idnZCode))
            // 	unfilledFields.push("Indonesian Zip Code");
            // if (isFieldEmpty(formData.ukAddress)) unfilledFields.push("UK Address");
            // if (isFieldEmpty(formData.ukZCode)) unfilledFields.push("UK Zip Code");
            if (!isFieldEmpty(formData.ukAddress)) {
                if (
                    formData.permanentResident === null &&
                    isFieldEmpty(formData.stayPeriod)
                )
                    unfilledFields.push("Address Status");
                if (
                    formData.permanentResident === "false" &&
                    isFieldEmpty(formData.stayPeriod)
                )
                    unfilledFields.push("End Term Date");
                if (termDateError !== "")
                    unfilledFields.push(
                        "End Term Date: End term date must be either today or in the future"
                    );
            }
        } else if (currentPage === 2) {
            formData.education.map((item, index) => {
                if (isFieldEmpty(item.degree))
                    unfilledFields.push(`Education ${index + 1}: Degree`);
                if (isFieldEmpty(item.university)) {
                    unfilledFields.push(`Education ${index + 1}: University`);
                }
                if (item.university === "other") {
                    if (isFieldEmpty(item.otherUni))
                        unfilledFields.push(
                            `Education ${index + 1}: University`
                        );
                }
                if (isFieldEmpty(item.course))
                    unfilledFields.push(`Education ${index + 1}: Course`);
                if (isFieldEmpty(item.funding))
                    unfilledFields.push(`Education ${index + 1}: Funding`);
                if (isFieldEmpty(item.entryYear))
                    unfilledFields.push(`Education ${index + 1}: Entry Year`);
                if (isFieldEmpty(item.graduateYear))
                    unfilledFields.push(
                        `Education ${index + 1}: Graduate Year`
                    );
            });
        }
        return unfilledFields;
    };

    const onChange = (e) => {
        setCitizenFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
        console.log(e.target.value);
    };

    const handleNext = (index) => {
        // const unfilled = [];
        if (index < currentPage) {
            if (currentPage !== 0) {
                setCurrentPage(index);
            } else {
                console.log("First Page");
            }
        } else {
            let unfilled = getUnfilledFields(citizenFormData, currentPage);
            if (unfilled.length > 0) {
                setUnfilledFields(unfilled);
                setShowWarningModal(true);
            } else if (currentPage < totalPages) {
                setCurrentPage(index);
            } else {
                submitForm();
                console.log("Max page");
                // navigate("/register/finish");
                // submit form here
            }
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else {
            return;
            // submit form here
        }
    };

    const submitForm = async () => {
        await addRegisterSensus(citizenFormData);
    };

    const title = ["Alumni's Basic Information", "Alumni's Education"];

    const activateCurrent = (index) => {
        return currentPage === index;
    };

    const progressTracker = (index) => {
        return index < currentPage;
    };

    const crumbs = [
        {
            active: activateCurrent(1),
            progress: progressTracker(1),
            end: false,
            title: "Basic Information",
            path: 1,
        },
        {
            active: activateCurrent(2),
            progress: progressTracker(2),
            end: true,
            title: "Education",
            path: 2,
        },
    ];

    const errClass = isError ? "errmsg" : "offscreen";

    return (
        <>
            <WarningModal
                show={showWarningModal}
                toggle={() => setShowWarningModal(!showWarningModal)}
                unfilledFields={unfilledFields}
                page={currentPage}
            />
            <Banner image={alumniFormBanner} type={"alumni"} />
            <div style={{ paddingLeft: "10%", paddingRight: "10%" }}>
                <p className={errClass}>{error?.data?.message}</p>
                <div class="container text-center mb-3">
                    <h1 class="align-items-center form-header">
                        {title[currentPage - 1]}
                    </h1>
                </div>
                <div
                    class="container text-center py-5"
                    style={{ display: isMobile ? "none" : "" }}
                >
                    <FormBreadCrumb
                        crumbs={crumbs}
                        onClick={handleNext}
                        currentIndex={currentPage}
                    />
                </div>
                {currentPage === 1 && (
                    <AlumniBasicInfo
                        data={citizenFormData}
                        setCitizenFormData={setCitizenFormData}
                        onChange={onChange}
                        dateError={dateError}
                        setDateError={setDateError}
                        termDateError={termDateError}
                        setTermDateError={setTermDateError}
                    />
                )}
                {currentPage === 2 && (
                    <Education
                        data={citizenFormData}
                        setCitizenFormData={setCitizenFormData}
                        // onChange={educationChange}
                        // addEducation={handleAddEducation}
                        // removeEducation={handleRemoveEducation}
                    />
                )}
                <hr class="divider-basic mb-4" />
                <h4>
                    <span style={{ color: "red" }}>*</span> &#41; Required
                </h4>
            </div>
            <div class="button-col d-flex justify-content-center py-5">
                <div style={{ display: currentPage === 1 ? "none" : "" }}>
                    <Button
                        className="form-prev d-flex align-items-center px-4 me-5"
                        onClick={() => handlePrev()}
                    >
                        <img src={arrow} className="me-4" />
                        <span class="text-center fs-4">Previous</span>
                    </Button>
                </div>
                <Button
                    className="form-next d-flex align-items-center px-4"
                    style={{ background: "#1D1D59 !important" }}
                    onClick={() => {
                        handleNext(currentPage + 1);
                        console.log(citizenFormData);
                    }}
                >
                    <img
                        src={arrow}
                        style={{
                            transform: "scaleX(-1)",
                            marginRight: "30px",
                        }}
                    />
                    <span class="text-center fs-4">
                        {currentPage === totalPages ? "Submit" : "Proceed"}
                    </span>
                </Button>
            </div>
        </>
    );
}

export default AlumniForm;
