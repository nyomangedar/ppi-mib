import logo from "../../image/logo_ppi.png";

function Banner(props) {
    const style = {
        landingBg: {
            backgroundColor: "#86543B",
            paddingLeft: "2em",
        },
        studentBg: {
            backgroundColor: "#1D1D59",
            paddingLeft: "2em",
        },
        alumniBg: {
            backgroundColor: "#8D191A",
            paddingLeft: "2em",
        },
        citizenBg: {
            backgroundColor: "#DCCBAF",
            paddingLeft: "2em",
        },
        logoContainer: {
            width: "50%" /* adjust width as needed */,
            margin: "0 auto",
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
            className="d-flex justify-content-between align-items-center my-4 mb-5"
            style={getStyle(props.type)}
        >
            <div style={style.logoContainer}>
                <div
                    className="d-flex justify-content-center align-items-center"
                    style={style.logo}
                >
                    <img className="img-fluid" src={logo} />
                </div>
            </div>

            <img className="img-fluid d-block w-100" src={props.image} />
        </div>
    );
    return banner;
}

export default Banner;
