import InformationSectionTemplate from "./Section";
import {Employee} from "../../../../../../../../../resources/js/Shared/Types";
import React, {useContext} from "react";
import {EmployeeContext} from "../../../../Shared/Contexts/Contexts";
import AddressInfoModal from "./AddressInfoModal";

interface Props {
    employee: Employee
}

const ADDRESS_INFO_MODAL_ID = 'address-information-modal'

function PersonalInformationAddressSection() {
    // @ts-ignore
    const {employee,errors}  = useContext(EmployeeContext)

    return (
        <div className="flex-grow-1">
            <div className="d-flex mb-3">
                <div className="text-gray-400 fw-bold w-125px">Region</div>
                <div className="text-gray-800 fw-bold">{employee.region}</div>
            </div>
            <div className="d-flex mb-3">
                <div className="text-gray-400 fw-bold w-125px">Location</div>
                <div className="text-gray-800 fw-bold">{employee.location}</div>
            </div>
            <div className="d-flex mb-3">
                <div className="text-gray-400 fw-bold w-125px">Address</div>
                <div className="text-gray-800 fw-bold">{employee.address}</div>
            </div>
            <AddressInfoModal modalId={ADDRESS_INFO_MODAL_ID} employee={employee} />
        </div>
    )
}

export default InformationSectionTemplate({
    title: 'Address Information',
    Content: PersonalInformationAddressSection,
    modalId: 'address-information-modal'
});
