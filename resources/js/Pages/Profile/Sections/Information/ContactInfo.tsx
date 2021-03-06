import InformationSectionTemplate from "./Section";
import {Employee} from "../../../../Shared/Types";
import React from "react";

interface Props {
    employee: Employee
}

function PersonalInformationContactSection({employee}: Props) {

    return (
        <div className="flex-grow-1">
            <div className="d-flex mb-3">
                <div className="text-gray-400 fw-bold w-125px">Phone Number</div>
                <div className="text-gray-800 fw-bold">{employee.mobile_number}</div>
            </div>
            <div className="d-flex mb-3">
                <div className="text-gray-400 fw-bold w-125px">Email</div>
                <div className="text-gray-800 fw-bold">{employee.email}</div>
            </div>
        </div>
    )
}

export default InformationSectionTemplate({
    title: 'Contact Information',
    Content: PersonalInformationContactSection,
    modalId: 'contact-information-modal'
});
