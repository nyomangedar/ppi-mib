import React from "react";
import Card from "react-bootstrap/Card";

const CardProfile = (props) => {
    const linearGradient =
        "linear-gradient(180deg,rgba(255, 255, 255, 0) 56.72%,rgba(29, 29, 89, 0) 56.73%,#1d1d59 100%),";
    const backgroundStyle = {
        // border: "black solid 1px",
        backgroundImage: `${linearGradient} url(${props.picture})`,
    };
    // console.log(backgroundStyle);

    const card = (
        <Card
            id="profile"
            className="me-4"
            style={backgroundStyle}
            // style={{ minWidth: "302px", height: "357px" }}
        >
            <div className="card-profile-desc py-1 px-2 mb-3 m-auto">
                <span id="cardName" style={{ fontSize: "17px" }}>
                    {props.nama}
                </span>
                <br />
                <p id="cardPos" style={{ fontSize: "10px" }}>
                    {props.posisi}
                </p>
            </div>
        </Card>
    );

    return card;
};
export default CardProfile;
