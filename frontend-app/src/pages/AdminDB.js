import { Parser } from "@json2csv/plainjs";
import { useState } from "react";

import {
    useGetStudentsMutation,
    useGetAllSensusMutation,
    useGetCitizenMutation,
    useGetAlumniMutation,
} from "../features/sensus/sensusApiSlice";
const AdminDB = () => {
    const [queries, setQueries] = useState({
        uni: "",
    });

    const onChange = (e) => {
        setQueries((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const [
        getStudents,
        {
            isSuccess: isStudentsSuccess,
            isError: isStudentsError,
            data: studentsData,
        },
    ] = useGetStudentsMutation();

    const [
        getAlumni,
        {
            isSuccess: isAlumniSuccess,
            isError: isAlumniError,
            data: alumniData,
        },
    ] = useGetAlumniMutation();

    const [
        getCitizen,
        {
            isSuccess: isCitizenSuccess,
            isError: isCitizenError,
            data: citizenData,
        },
    ] = useGetCitizenMutation();

    const [
        getAll,
        { isSuccess: isAllSuccess, isError: isAllError, data: allData },
    ] = useGetAllSensusMutation();

    const time = new Date().getDate();

    const getStudentsRequest = async () => {
        await getStudents({ university: queries.uni });
        if (isStudentsSuccess && !isStudentsError) {
            const name = `students_${queries.uni}_${time}`;
            downloadActivate(studentsData, name);
        }
    };

    const getAlumniRequest = async () => {
        await getAlumni();
        if (isAlumniSuccess && !isAlumniError) {
            const name = `alumni_UoB_${time}`;
            downloadActivate(alumniData, name);
        }
    };

    const getAllRequest = async () => {
        await getAll();
        if (isAllSuccess && !isAllError) {
            const name = `all_${time}`;
            downloadActivate(allData, name);
        }
    };

    const getCitizenRequest = async () => {
        await getCitizen();
        if (isCitizenSuccess && !isCitizenError) {
            const name = `citizen_${time}`;
            downloadActivate(citizenData, name);
        }
    };

    const convertToCSV = (json) => {
        const parser = new Parser();
        const csv = parser.parse(json);
        console.log({ csv });
        return csv;
    };

    const downloadActivate = (data, name) => {
        const downloadContent = convertToCSV(data);
        const blob = new Blob([downloadContent], { type: "text/csv" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${name}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    return (
        <div className="d-flex flex-column gap-5">
            <div>
                <h1>All sensus</h1>
                <button onClick={getAllRequest}>Get All sensus</button>
            </div>
            <div>
                <h1>Alumni Sensus</h1>
                <button onClick={getAlumniRequest}>
                    Get Alumni sensus (UoB)
                </button>
            </div>
            <div>
                <h1>Students Sensus</h1>
                <label class="form-label input-label">
                    University <span style={{ color: "red" }}>*</span>
                </label>
                <select
                    class="form-select form-input mb-4"
                    aria-label="Default select example"
                    id="uni"
                    name="uni"
                    value={queries.uni}
                    onChange={onChange}
                >
                    <option value="" selected disabled hidden>
                        Open this select menu
                    </option>
                    <option value="University of Birmingham">
                        University of Birmingham
                    </option>
                    <option value="Aston University">Aston University</option>
                    <option value="Birmingham City University">
                        Birmingham City University
                    </option>
                    <option value="Newman University">Newman University</option>
                    <option value="University College Birmingham">
                        University College Birmingham
                    </option>
                    <option value="other">Other</option>
                </select>
                <button onClick={getStudentsRequest}>
                    Get Students sensus
                </button>
            </div>
            <div>
                <h1>Citizen Sensus</h1>
                <button onClick={getCitizenRequest}>Get Citizen Sensus</button>
            </div>
        </div>
    );
};

export default AdminDB;
