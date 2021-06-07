import InformationSectionTemplate from "./Section";
import {Employee} from "../../../../Shared/Types";
import React from "react";

interface Props {
    employee: Employee
}

function PersonalInformationAddressSection({employee}: Props) {

    return (
        <div className="flex-grow-1">
            <div className="d-flex mb-3">
                <div className="text-gray-400 fw-bold w-125px">Region</div>
                <div className="text-gray-800 fw-bold">{employee.region?.name}</div>
            </div>
            <div className="d-flex mb-3">
                <div className="text-gray-400 fw-bold w-125px">Location</div>
                <div className="text-gray-800 fw-bold">{employee.location}</div>
            </div>
            <div className="d-flex mb-3">
                <div className="text-gray-400 fw-bold w-125px">Address</div>
                <div className="text-gray-800 fw-bold">{employee.address}</div>
            </div>
        </div>
    )
}

export default InformationSectionTemplate({
    title: 'Address Information',
    Content: PersonalInformationAddressSection,
    modalId: 'address-information-modal'
});
