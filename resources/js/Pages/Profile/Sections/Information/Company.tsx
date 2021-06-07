import InformationSectionTemplate from "./Section";
import {Employee} from "../../../../Shared/Types";
import React from "react";

interface Props {
    employee: Employee
}

function PersonalInformationCompanySection({employee}: Props) {

    return (
        <div className="flex-grow-1">
            <div className="d-flex mb-3">
                <div className="text-gray-400 fw-bold w-125px">Companies</div>
                <div className="text-gray-800 fw-bold">
                    {
                        employee.account?.companies?.map(company => `${company?.name}, `)
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
