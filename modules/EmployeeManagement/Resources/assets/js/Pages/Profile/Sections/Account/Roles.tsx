import InformationSectionTemplate from "../Information/Section";
import {Employee, Role} from "../../../../../../../../../resources/js/Shared/Types";

import React, {useEffect, useState} from "react";

interface Props {
    employee: Employee
}

function EmployeeAccountRoles({employee}: Props) {


    return (
        <div>
            <div className="row mb-10">
                <div className="col">
                </div>
            </div>
            <div className="row">
                {/*{*/}
                {/*    shownRoles?.map(role => (*/}
                {/*        <div className="col-md-4" key={role.id}>*/}
                {/*            <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack mb-5">*/}
                {/*                <span className="form-check-label ms-0 fs-6 text-gray-700">{role.name?.replace('-', ' ')}</span>*/}
                {/*                <input className="form-check-input me-8" type="checkbox" defaultChecked={false} value="" />*/}
                {/*            </label>*/}
                {/*        </div>*/}
                {/*    ))*/}
                {/*}*/}
            </div>
        </div>
    )
}

export default InformationSectionTemplate({
    title: 'Account Roles',
    Content: EmployeeAccountRoles,
    modalId: 'roles-account-modal',
    showEditButton: false,
});
