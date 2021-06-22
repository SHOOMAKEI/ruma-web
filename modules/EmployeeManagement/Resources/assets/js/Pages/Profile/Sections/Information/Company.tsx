import InformationSectionTemplate from "./Section";
import {Employee} from "../../../../../../../../../resources/js/Shared/Types";
import React, {useContext} from "react";
import {EmployeeContext} from "../../../../Shared/Contexts/Contexts";

interface Props {
    employee: Employee
}

function PersonalInformationCompanySection() {

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
        </div>
    )
}

export default InformationSectionTemplate({
    title: 'Company Information',
    Content: PersonalInformationCompanySection,
    modalId: 'company-information-modal'
});
