import React, { useState, useEffect } from "react";

function FormBreadCrumb(props) {
    const listCrumbs = props.crumbs;
    const style = {
        circleInactive: {
            height: "34px",
            width: "34px",
            borderRadius: "50%",
            outline: "#e07a7b solid 2px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
        },
        circleActive: {
            height: "34px",
            width: "34px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            outline: "#8d191a solid 2px",
            margin: "auto",
        },
        circleFill: {
            height: "20px",
            width: "20px",
            borderRadius: "50%",
            background: "#8d191a",
        },
        lineInactive: {
            height: "0px",
            width: "150px",
            outline: "#e07a7b solid 2px",
        },
        lineActive: {
            height: "0px",
            width: "150px",
            outline: "#8d191a solid 2px",
        },
    };

    function mapFunction(crumb) {
        const path = crumb.path;
        return (
            <>
                <div style={{ height: "71px", width: "121px" }}>
                    <a
                        style={{ cursor: "pointer" }}
                        onClick={() => props.onClick(path)}
                    >
                        <div
                            style={
                                crumb.active
                                    ? style.circleActive
                                    : style.circleInactive
                            }
                        >
                            {crumb.active && <div style={style.circleFill} />}
                        </div>
                        <p className="my-2 px-3">{crumb.title}</p>
                    </a>
                </div>

                {!crumb.end && (
                    <div
                        style={
                            crumb.progress
                                ? style.lineActive
                                : style.lineInactive
                        }
                    />
                )}
            </>
        );
    }

    const generateCrumb = listCrumbs.map(mapFunction);

    return (
        <div className="d-flex justify-content-center align-items-center">
            {generateCrumb}
        </div>
    );
}

export default FormBreadCrumb;
