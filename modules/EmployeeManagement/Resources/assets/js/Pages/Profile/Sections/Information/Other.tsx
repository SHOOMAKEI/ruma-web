import InformationSectionTemplate from "./Section";
import {Employee} from "../../../../../../../../../resources/js/Shared/Types";
import React, {useContext} from "react";
import {EmployeeContext} from "../../../../Shared/Contexts/Contexts";

interface Props {
    employee: Employee
}

function PersonalInformationOtherSection() {

    // @ts-ignore
    const {employee,errors}  = useContext(EmployeeContext)

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
