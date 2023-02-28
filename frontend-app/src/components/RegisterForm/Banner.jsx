import logo from "../../image/logo_ppi.png";

function Banner(props) {
    const style = {
        landingBg: {
            backgroundColor: "#86543B",
        },
        studentBg: {
            backgroundColor: "#1D1D59",
        },
        alumniBg: {
            backgroundColor: "#8D191A",
        },
        citizenBg: {
            backgroundColor: "#DCCBAF",
        },
        logo: {
            borderRadius: "50%",
            backgroundColor: "white",
            height: "121px",
            width: "121px",
            boxShadow: "12px 4px 11px rgba(0, 0, 0, 0.25)",
        },
    };
    const getStyle = (type) => {
        switch (type) {
            case "student":
                return style.studentBg;
            case "alumni":
                return style.alumniBg;
            case "citizen":
                return style.citizenBg;
            case "landing":
                return style.landingBg;
        }
    };
    const banner = (
        <div
            className="d-flex justify-content-center align-items-center my-4 mb-5"
            style={getStyle(props.type)}
        >
            <div
                className="d-flex justify-content-center align-items-center"
                style={style.logo}
            >
                <img src={logo} />
            </div>
            <img src={props.image} />
        </div>
    );
    return banner;
}

export default Banner;
