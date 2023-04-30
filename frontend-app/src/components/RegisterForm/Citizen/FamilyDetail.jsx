import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Select from "react-select";
import nationality from "../nationalityList";
import plus from "../../../image/formAsset/plus-button.svg";

function FamilyDetail(props) {
    const today = new Date().toISOString().substring(0, 10);

    const [dobError, setDobError] = useState("");
    const [selectedNationality, setNationality] = useState("");

    function handleBlur(index, event) {
        const { name, value } = event.target;
        if (value.length > 0 && value > today) {
            props.setCitizenFormData((prevState) => {
                const families = [...prevState.families];
                families[index] = {
                    ...families[index],
                    [name]: "",
                };
                return {
                    ...prevState,
                    families,
                };
            });
            setDobError("Date of birth is not valid");
        } else {
            setDobError("");
        }
    }

    const familyChange = (index, event) => {
        const { name, value } = event.target;
        props.setCitizenFormData((prevState) => {
            const families = [...prevState.families];
            families[index] = {
                ...families[index],
                [name]: value,
            };
            return {
                ...prevState,
                families,
            };
        });
        // console.log(citizenFormData.families[index]);
    };

    const handleRemoveFamilyMember = (index) => {
        props.setCitizenFormData((prevState) => {
            const updatedFamilies = [...prevState.families];
            updatedFamilies.splice(index, 1);
            if (updatedFamilies.length === 0) {
                props.setFamilyStatus(false);
            }
            return {
                ...prevState,
                families: updatedFamilies,
            };
        });
    };

    const handleNationalityChange = (selectedOption, { name }) => {
        props.setCitizenFormData((prevState) => {
            const families = [...prevState.families];
            families[props.index] = {
                ...families[props.index],
                [name]: selectedOption.value,
            };
            return {
                ...prevState,
                families,
            };
        });
        setNationality(selectedOption);
        console.log(name, selectedOption);
    };

    return (
        <>
            <h3 className="mb-3 fw-bold" style={{ fontWeight: "500" }}>
                Family Member {props.index + 1}
            </h3>
            <div class="mb-4">
                <label class="form-label input-label">
                    Full Name <span style={{ color: "red" }}>*</span>
                </label>
                <input
                    type="text"
                    class="form-control form-input"
                    id="fullname"
                    name="fullname"
                    value={props.data.fullname}
                    onChange={(event) => familyChange(props.index, event)}
                    aria-describedby="nameHelp"
                    placeholder="Full Name"
                    required
                />
            </div>
            <div class="mb-4">
                <label class="form-label input-label">
                    Relationship <span style={{ color: "red" }}>*</span>
                </label>
                <input
                    type="text"
                    class="form-control form-input"
                    id="relationship"
                    name="relationship"
                    value={props.data.relationship}
                    onChange={(event) => familyChange(props.index, event)}
                    aria-describedby="relationshipHelp"
                    placeholder="Relationship"
                    required
                />
            </div>
            <div class="mb-4">
                <label class="form-label input-label">
                    Date of Birth <span style={{ color: "red" }}>*</span>
                </label>
                <input
                    type="date"
                    class="form-control form-input mb-2"
                    id="dob"
                    name="dob"
                    max={today}
                    value={props.data.dob}
                    onChange={(event) => familyChange(props.index, event)}
                    onBlur={(event) => handleBlur(props.index, event)}
                    aria-describedby="dobHelp"
                    placeholder="Date of Birth"
                    required
                />
                {dobError !== "" && (
                    <div className="error fw-bold" style={{ color: "red" }}>
                        {dobError}
                    </div>
                )}
            </div>
            <div class="mb-4">
                <label class="form-label input-label">
                    Nationality <span style={{ color: "red" }}>*</span>
                </label>
                <Select
                    type="text"
                    className="form-control form-input"
                    id="nationality"
                    name="nationality"
                    value={selectedNationality}
                    onChange={handleNationalityChange}
                    aria-describedby="nationalityHelp"
                    defaultValue="Indonesian"
                    options={nationality}
                    isSearchable
                    required
                />
            </div>
            <div class="mb-4">
                <label class="form-label input-label">Dependant of..</label>
                <input
                    type="text"
                    class="form-control form-input"
                    id="dependant"
                    name="dependant"
                    value={props.data.dependant}
                    onChange={(event) => familyChange(props.index, event)}
                    aria-describedby="dependantHelp"
                    placeholder="Dependant"
                />
                <div id="dependantHelp" class="form-text">
                    Please fill in the full name of the independent member of
                    this person (if you are the dependent of a student)
                </div>
            </div>
            <div class="button-col me-0 mb-4">
                <Button
                    className="remove-family d-flex align-items-center"
                    onClick={() => {
                        handleRemoveFamilyMember(props.index);
                        // props.setFamilyCount(props.familyCount + 1);
                    }}
                >
                    <img
                        src={plus}
                        className="me-2"
                        style={{ rotate: "45deg" }}
                    />
                    <span class="text-center fs-4">Remove</span>
                </Button>
            </div>
            <hr class="divider-basic mb-4" />
        </>
    );
}

export default FamilyDetail;
