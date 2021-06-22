import InformationSectionTemplate from "./Section";
import {Employee} from "../../../../../../../../../resources/js/Shared/Types";
import React, {useContext} from "react";
import {EmployeeContext} from "../../../../Shared/Contexts/Contexts";
import EmploymentInfoModal from "./EmploymentModal";
interface Props {
    employee: Employee
}

const EMPLOYMENT_INFO_MODAL_ID = 'employment-information-modal';

function PersonalInformationEmploymentSection() {

    // @ts-ignore
    const {employee,errors}  = useContext(EmployeeContext)

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
            <EmploymentInfoModal modalId={EMPLOYMENT_INFO_MODAL_ID} employee={employee} />
        </div>
    )
}

export default InformationSectionTemplate({
    title: 'Employment',
    Content: PersonalInformationEmploymentSection,
    modalId: 'employment-information-modal'
});
