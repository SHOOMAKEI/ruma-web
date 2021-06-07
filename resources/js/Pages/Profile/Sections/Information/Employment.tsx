import InformationSectionTemplate from "./Section";
import {Employee} from "../../../../Shared/Types";
import React from "react";
interface Props {
    employee: Employee
}

function PersonalInformationEmploymentSection({employee}: Props) {

    return (
        <div className="flex-grow-1">
            <div className="d-flex mb-3">
                <div className="text-gray-400 fw-bold w-125px">Employment Status</div>
                <div className="text-gray-800 fw-bold">{employee.employment_status}</div>
            </div>
            <div className="d-flex mb-3">
                <div className="text-gray-400 fw-bold w-125px">Job Status</div>
                <div className="text-gray-800 fw-bold">{employee.job_status}</div>
            </div>
        </div>
    )
}

export default InformationSectionTemplate({
    title: 'Employment',
    Content: PersonalInformationEmploymentSection,
    modalId: 'employment-information-modal'
});
