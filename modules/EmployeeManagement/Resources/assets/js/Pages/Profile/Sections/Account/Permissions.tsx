import InformationSectionTemplate from "../Information/Section";
import React, {useEffect, useState} from "react";
import {Employee} from "../../../../../../../../../resources/js/Shared/Types";

export interface Props {
    employee: Employee
}


interface filterType {
    id: string;
    name: string;
}

const FILTERS: Array<filterType> = [
    {id: '1', name: 'Read'},
    {id: '2', name: 'Create'},
    {id: '3', name: 'Update'},
    {id: '4', name: 'Delete'},
]

function EmployeeAccountPermissions({employee}:Props) {

    return (
        <div>
            <div className="row mb-5">
                <div className="col">
                </div>
            </div>
            <div className="row mb-8">
                <div className="col d-flex">
                    {
                        FILTERS.map(filter => (
                            <button
                                type="button"

                                className={`btn btn-sm btn-flex ${'btn-primary'} me-3`}>
                                {filter.name}
                            </button>
                        ))
                    }
                </div>
            </div>
            <div className="row">
                {/*{*/}
                {/*    shownPermissions?.map(permission => {*/}
                {/*        if (permission.name?.toLocaleLowerCase().includes(activeFilter.name.toLocaleLowerCase())) {*/}
                {/*            return (*/}
                {/*                <div className="col-md-4" key={permission.id}>*/}
                {/*                    <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack mb-5">*/}
                {/*                        <span className="form-check-label ms-0 fs-6 text-gray-700">*/}
                {/*                            {`can ${permission.name?.split('.')[1].replace('_', ' ')} ${permission.name?.split('.')[0].replace('_', ' ')}`}*/}
                {/*                        </span>*/}
                {/*                        <input className="form-check-input me-8" type="checkbox" defaultChecked={false} value="" />*/}
                {/*                    </label>*/}
                {/*                </div>*/}
                {/*            )*/}
                {/*        }*/}
                {/*    })*/}
                {/*}*/}
            </div>
        </div>
    )
}

export default InformationSectionTemplate({
    title: 'Account Permissions',
    Content: EmployeeAccountPermissions,
    modalId: 'permissions-account-modal',
    showEditButton: false,
});
