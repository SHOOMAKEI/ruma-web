import InformationSectionTemplate from "./Section";
import {Employee} from "../../../../../../../../../resources/js/Shared/Types";
import React, {useContext} from "react";
import {EmployeeContext} from "../../../../Shared/Contexts/Contexts";
import EmploymentInfoModal from "./EmploymentModal";
import CompanyInfoModal from "./CompanyModal";

interface Props {
    employee: Employee
}

function PersonalInformationCompanySection() {
    const COMPANIES_INFO_MODAL_ID = 'company-information-modal';

    // @ts-ignore
    const {employee,errors}  = useContext(EmployeeContext)

    return (
        <div className="flex-grow-1">
            <div className="d-flex mb-3">
                <div className="text-gray-400 fw-bold w-125px">Companies</div>
                <div className="text-gray-800 fw-bold">
                    {
                        employee.companies?.map((company: { name: any; }) => `${company?.name}, `)
                    }
                </div>
            </div>
            <CompanyInfoModal modalId={COMPANIES_INFO_MODAL_ID} employee={employee} />
        </div>
    )
}

export default InformationSectionTemplate({
    title: 'Company Information',
    Content: PersonalInformationCompanySection,
    modalId: 'company-information-modal'
});
