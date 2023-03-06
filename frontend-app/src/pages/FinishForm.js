import React, { useEffect } from "react";
import Banner from "../components/RegisterForm/Banner";
import landingPageImage from "../image/formAsset/landingFormBanner.png";
import Cookies from "js-cookie";

function FinishForm() {
    useEffect(() => {
        return () => {
            Cookies.set("formAgreement", "false");
        };
    }, []);

    return (
        <>
            <Banner image={landingPageImage} type={"landing"} />
            <div className="text-center">
                <h1>Thank You For Filling our Form!</h1>
                <p>
                    We’ll share all the latest updates about PPI MIB, through
                    your email
                </p>
            </div>
        </>
    );
}
export default FinishForm;
