import InformationSectionTemplate from "./Section";
import {Employee} from "../../../../../../../../../resources/js/Shared/Types";
import React, {useContext} from "react";
import {EmployeeContext} from "../../../../Shared/Contexts/Contexts";
import ContactInfoModal from "./ContactInfoModal";

interface Props {
    employee: Employee
}

const CONTACT_INFO_EDIT_MODAL = 'contact-information-modal'

function PersonalInformationContactSection( ) {

    // @ts-ignore
    const {employee,errors}  = useContext(EmployeeContext)

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
            <ContactInfoModal modalId={CONTACT_INFO_EDIT_MODAL} employee={employee} />
        </div>
    )
}

export default InformationSectionTemplate({
    title: 'Contact Information',
    Content: PersonalInformationContactSection,
    modalId: 'contact-information-modal'
});
