import logo from "../../image/logo_ppi.png";
import { useMediaQuery } from "react-responsive";
import useTabletorMobileStyle from "../../features/hooks/useTabletorMobileStyle";

function Banner(props) {
    const isTablet = useMediaQuery({
        query: "(max-width: 768px)",
    });
    const style = {
        landingBg: {
            backgroundColor: "#86543B",
            // paddingLeft: "2em",
        },
        studentBg: {
            backgroundColor: "#1D1D59",
            // paddingLeft: "2em",
        },
        alumniBg: {
            backgroundColor: "#8D191A",
            // paddingLeft: "2em",
        },
        citizenBg: {
            backgroundColor: "#DCCBAF",
            // paddingLeft: "2em",
        },
        logoContainer: {
            paddingLeft: "2em",
            margin: "0 auto",
        },
        logoContainerResponsive: {
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
            <div
                style={useTabletorMobileStyle(
                    style.logoContainer,
                    style.logoContainerResponsive,
                    768
                )}
            >
                <div
                    className="d-flex justify-content-center align-items-center"
                    style={style.logo}
                >
                    <img className="img-fluid" src={logo} />
                </div>
            </div>
            {!isTablet && <img className="form-banner" src={props.image} />}
        </div>
    );
    return banner;
}

export default Banner;
