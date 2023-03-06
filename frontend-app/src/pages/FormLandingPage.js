import React, { useState } from "react";
import Banner from "../components/RegisterForm/Banner";
import landingPageImage from "../image/formAsset/landingFormBanner.png";
import { importMany } from "../features/functionTools/importMany";
import arrow from "../image/formAsset/arrow-back.svg";
import { Button } from "react-bootstrap";
import useTabletorMobileStyle from "../features/hooks/useTabletorMobileStyle";

function FormLandingPage() {
    const [selectStatus, setSelectStatus] = useState("");
    const [termsAgreeementCheck, setTermsAgreementCheck] = useState(false);
    const logos = importMany(
        require.context(
            "../image/formAsset/statusLogo/",
            false,
            /\.(png|jpe?g|svg)$/
        )
    );
    const handleCheck = () => {
        setTermsAgreementCheck(!termsAgreeementCheck);
    };

    const handlePath = (path) => {
        switch (path) {
            case "Student":
                return "register/student";
            case "Alumni":
                return "register/alumni";
            case "Citizen":
                return "register/citizen";
        }
    };
    const inactiveColor = "#8E8D94";
    const activeColor = "#8D191A";
    const style = {
        statusCircle: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "146.48px",
            width: "146.48px",
            outline: `5px solid ${inactiveColor}`,
            borderRadius: "50%",
        },
        statusCircleActive: {
            height: "146.48px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "146.48px",
            outline: `5px solid ${activeColor}`,
            borderRadius: "50%",
            filter: "drop-shadow(0px 3px 15px rgba(0, 0, 0, 0.25))",
        },
        title: {
            color: `${inactiveColor}`,
        },
        titleActive: {
            color: `${activeColor}`,
            filter: "drop-shadow(0px 3px 15px rgba(0, 0, 0, 0.25))",
        },
    };
    const statusLogo = (imageActive, imageInactive, active, title) => {
        return (
            <div
                className="d-flex justify-content-center align-items-center flex-column gap-3"
                onClick={() => setSelectStatus(title)}
                style={{ cursor: "pointer" }}
            >
                <div
                    style={
                        active ? style.statusCircleActive : style.statusCircle
                    }
                >
                    <img src={active ? imageActive : imageInactive} />
                </div>
                <h2 style={active ? style.titleActive : style.title}>
                    {title}
                </h2>
            </div>
        );
    };

    const statusContainerClassDefault = "d-flex gap-5";
    const statusContainerClassResponsive = "d-flex gap-5 flex-column";

    return (
        <>
            <Banner image={landingPageImage} type={"landing"} />
            <h1 class="text-center">Register Yourself to Our Database!</h1>
            <div class="divider-basic my-4" />
            <div className="d-flex flex-column justify-content-center align-items-center gap-4">
                <h2>Select your status</h2>
                <div
                    className={useTabletorMobileStyle(
                        statusContainerClassDefault,
                        statusContainerClassResponsive,
                        600
                    )}
                >
                    {statusLogo(
                        logos["studentStatusLogoActive.svg"],
                        logos["studentStatusLogo.svg"],
                        selectStatus === "Student",
                        "Student"
                    )}
                    {statusLogo(
                        logos["alumniStatusLogoActive.svg"],
                        logos["alumniStatusLogo.svg"],
                        selectStatus === "Alumni",
                        "Alumni"
                    )}
                    {statusLogo(
                        logos["citizenStatusLogoActive.svg"],
                        logos["citizenStatusLogo.svg"],
                        selectStatus === "Citizen",
                        "Citizen"
                    )}
                </div>
                <div className="ps-3">
                    <input
                        type="checkbox"
                        id="termsAgreement"
                        onChange={handleCheck}
                        style={{ cursor: "pointer" }}
                    />
                    <label class="ms-3" for="termsAgreeement">
                        By registering for our database, you give us permission
                        to access and use your data for contact reasons and to
                        inform you of upcoming events.
                    </label>
                </div>

                <Button
                    className="form-next d-flex align-items-center px-4"
                    style={{ background: "#1D1D59 !important" }}
                    // onClick={() => handleNext()}
                    disabled={!termsAgreeementCheck}
                >
                    <a href={handlePath(selectStatus)}>
                        <img
                            src={arrow}
                            style={{
                                transform: "scaleX(-1)",
                                marginRight: "30px",
                            }}
                        />
                        <span class="text-center fs-4">Proceed</span>
                    </a>
                </Button>
            </div>
        </>
    );
}
export default FormLandingPage;
