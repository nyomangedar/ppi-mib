import React, { useState, useEffect } from "react";
import BasicInfo from "../components/RegisterForm/BasicInfo";
import StudentEdu from "../components/RegisterForm/StudentEdu";
import arrow from "../image/formAsset/arrow-back.svg";
import { Button } from "react-bootstrap";
import ContactIndo from "../components/RegisterForm/ContactIndo";
import ContactUK from "../components/RegisterForm/ContactUK";
import FormBreadCrumb from "../components/RegisterForm/FormBreadcrumb";

function StudentForm() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 4;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        } else {
            // console.log("Submitting form:", formData);
            console.log("Max page");
            // submit form here
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

    const activateCurrent = (index) => {
        return currentPage == index;
    };

    const progressTracker = (index) => {
        return index < currentPage;
    };

    const handleOnClick = (index) => {
        setCurrentPage(index);
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
            end: false,
            title: "Education",
            path: 2,
        },
        {
            active: activateCurrent(3),
            progress: progressTracker(3),
            end: false,
            title: "Emergency Contact Indonesia",
            path: 3,
        },
        {
            active: activateCurrent(4),
            progress: progressTracker(4),
            end: true,
            title: "Emergency Contact in UK",
            path: 4,
        },
    ];

    return (
        <>
            <div style={{ paddingLeft: "10%", paddingRight: "10%" }}>
                <div class="container text-center">
                    <h1 class="align-items-center form-header">
                        Student's Basic Information
                    </h1>
                </div>
                <div class="container text-center py-5">
                    <FormBreadCrumb crumbs={crumbs} onClick={setCurrentPage} />
                </div>
                {currentPage === 1 && <BasicInfo />}
                {currentPage === 2 && <StudentEdu />}
                {currentPage === 3 && <ContactIndo />}
                {currentPage === 4 && <ContactUK />}
            </div>
            <div class="button-col d-flex justify-content-center py-5">
                <Button
                    className="form-prev d-flex align-items-center px-4 me-5"
                    onClick={() => handlePrev()}
                >
                    <img src={arrow} className="me-4" />
                    <span class="text-center fs-4">Previous</span>
                </Button>
                <Button
                    className="form-next d-flex align-items-center px-4"
                    style={{ background: "#1D1D59 !important" }}
                    onClick={() => handleNext()}
                >
                    <img
                        src={arrow}
                        style={{
                            transform: "scaleX(-1)",
                            marginRight: "30px",
                        }}
                    />
                    <span class="text-center fs-4">Proceed</span>
                </Button>
            </div>
        </>
    );
}

export default StudentForm;
