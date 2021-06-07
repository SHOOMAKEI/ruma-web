import InformationSectionTemplate from "./Section";
import {Employee} from "../../../../Shared/Types";
import React from "react";

interface Props {
    employee: Employee
}

function PersonalInformationOtherSection({employee}: Props) {

    return (
        <div className="flex-grow-1">
            <div className="d-flex mb-3">
                <div className="text-gray-400 fw-bold w-125px">Resumption date</div>
                <div className="text-gray-800 fw-bold">{employee.resumption_date}</div>
            </div>
            <div className="d-flex mb-3">
                <div className="text-gray-400 fw-bold w-125px">Due date</div>
                <div className="text-gray-800 fw-bold">{employee.due_date}</div>
            </div>
        </div>
    )
}

export default InformationSectionTemplate({
    title: 'Other Information',
    Content: PersonalInformationOtherSection,
    modalId: 'other-information-modal'
});
