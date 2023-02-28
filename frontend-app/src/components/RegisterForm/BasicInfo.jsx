import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Button } from "react-bootstrap";
import arrow from "../../image/formAsset/arrow-back.svg";

function BasicInfo(props) {
    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-width: 1224px)",
    });
    const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

    const [otherStatus, setOtherStatus] = useState(false);

    return (
        <>
            <div>
                <form>
                    <div class="mb-4">
                        <label class="form-label input-label">
                            Full Name <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                            type="text"
                            class="form-control form-input"
                            id="fullname"
                            name="fullname"
                            aria-describedby="nameHelp"
                            placeholder="Full Name"
                            required
                        />
                    </div>
                    <div class="mb-4">
                        <label class="form-label input-label">
                            UK Phone Number{" "}
                            <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                            type="tel"
                            class="form-control form-input"
                            id="phoneUK"
                            name="phoneUK"
                            aria-describedby="phoneUKHelp"
                            placeholder="+44"
                            required
                        />
                    </div>
                    <div class="mb-4">
                        <label class="form-label input-label">
                            Indonesia Phone Number{" "}
                            <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                            type="tel"
                            class="form-control form-input"
                            id="phoneIndo"
                            name="phoneIndo"
                            aria-describedby="phoneIndoHelp"
                            placeholder="+62"
                            required
                        />
                    </div>
                    <div class="mb-4">
                        <label class="form-label input-label">
                            Email <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                            type="email"
                            class="form-control form-input"
                            id="email"
                            name="email"
                            aria-describedby="emailHelp"
                            placeholder="Email"
                            required
                        />
                        <div id="emailHelp" class="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>
                    <hr class="divider-basic mb-4" />
                    <div class="mb-4">
                        <div>
                            <label class="form-label input-label">
                                Relationship{" "}
                                <span style={{ color: "red" }}>*</span>
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input
                                class="form-check-input"
                                type="radio"
                                name="relationship"
                                id="married"
                                value="married"
                                onClick={() => setOtherStatus(false)}
                            />
                            <label
                                class="form-check-label radio-relationship"
                                for="married"
                            >
                                Married
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input
                                class="form-check-input"
                                type="radio"
                                name="relationship"
                                id="single"
                                value="single"
                                onClick={() => setOtherStatus(false)}
                            />
                            <label
                                class="form-check-label radio-relationship"
                                for="single"
                            >
                                Single
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input
                                class="form-check-input "
                                type="radio"
                                name="relationship"
                                id="other"
                                value="other"
                                onClick={() => setOtherStatus(true)}
                            />
                            <label
                                class="form-check-label radio-relationship"
                                for="other"
                            >
                                Other:
                            </label>
                        </div>
                        <div class="form-check-inline">
                            <input
                                style={{ display: otherStatus ? "" : "none" }}
                                type="text"
                                class="form-control relationship-other"
                                id="otherRelationship"
                                name="otherRelationship"
                                aria-describedby="otherRelationshipHelp"
                                placeholder="Fill in.."
                                selected
                                // disabled
                                // hidden
                            />
                        </div>
                    </div>
                    <div class="mb-4">
                        <label class="form-label input-label">
                            Religion <span style={{ color: "red" }}>*</span>
                        </label>
                        <select
                            class="form-select form-input"
                            aria-label="Default select example"
                            required
                        >
                            <option selected disabled hidden>
                                Open this select menu
                            </option>
                            <option value="islam">Islam</option>
                            <option value="kristen">Kristen</option>
                            <option value="hindu">Hindu</option>
                            <option value="hindu">Buddha</option>
                            <option value="pnts">Prefer not to say</option>
                        </select>
                    </div>
                    <hr class="divider-basic mb-4" />
                    <div class="mb-4">
                        <label class="form-label input-label">
                            Indonesian Address{" "}
                            <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                            type="text"
                            class="form-control form-input"
                            id="indonesianAddress"
                            name="indonesianAddress"
                            aria-describedby="indonesianAddressHelp"
                            placeholder="Indonesian Adress"
                            required
                        />
                    </div>
                    <div class="mb-4">
                        <label class="form-label input-label">
                            Province <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                            type="text"
                            class="form-control form-input"
                            id="province"
                            name="province"
                            aria-describedby="provinceHelp"
                            placeholder="Province"
                            required
                        />
                    </div>
                    <div class="mb-4">
                        <label class="form-label input-label">
                            City/Regency <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                            type="text"
                            class="form-control form-input"
                            id="city"
                            name="city"
                            aria-describedby="cityHelp"
                            placeholder="City/Regency"
                            required
                        />
                    </div>
                    <div class="mb-4">
                        <label class="form-label input-label">
                            District <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                            type="text"
                            class="form-control form-input"
                            id="district"
                            name="district"
                            aria-describedby="districtHelp"
                            placeholder="District"
                            required
                        />
                    </div>
                    <div class="mb-4">
                        <label class="form-label input-label">
                            Indonesian Zip Code{" "}
                            <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                            type="text"
                            class="form-control form-input"
                            id="indonesianZipCode"
                            name="indonesianZipCode"
                            aria-describedby="indonesianZipCodeHelp"
                            placeholder="Zip Code"
                            required
                        />
                    </div>
                    <hr class="divider-basic mb-4" />
                    <div class="mb-4">
                        <label class="form-label input-label">
                            UK Address <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                            type="text"
                            class="form-control form-input"
                            id="ukAddress"
                            name="ukAddress"
                            aria-describedby="ukAddressHelp"
                            placeholder="UK Address"
                            required
                        />
                    </div>
                    <div class="mb-4">
                        <label class="form-label input-label">
                            UK Zip Code <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                            type="text"
                            class="form-control form-input"
                            id="ukZipCode"
                            name="ukZipCode"
                            aria-describedby="ukZipCodeHelp"
                            placeholder="Zip Code"
                            required
                        />
                    </div>
                    {/* <button type="submit" class="btn btn-primary">
							Submit
						</button> */}
                </form>
            </div>
        </>
    );
}

export default BasicInfo;
