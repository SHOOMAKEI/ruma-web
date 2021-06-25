import InformationSectionTemplate from "../Information/Section";
import {Employee, Role} from "../../../../../../../../../resources/js/Shared/Types";

import React, {useContext, useEffect, useState} from "react";
import MultiSelectInput from "../../../../../../../../../resources/js/Shared/MultiSelectInput";
import {EmployeeContext} from "../../../../Shared/Contexts/Contexts";
import {useForm} from "@inertiajs/inertia-react";
import route from "ziggy-js";
import LoadingButton from "../../../../../../../../../resources/js/Shared/LoadingButton";

interface Props {
    employee: Employee
}

function EmployeeAccountRoles() {
    // @ts-ignore
    const {employee,roles}  = useContext(EmployeeContext)
    // @ts-ignore
    const ShowRoles = employee.account?.roles.map(role=> (
        {
            label: role.name,
            value: role.id
        }
    ))

    const { data, setData, errors, post, processing } = useForm({
        roles: ShowRoles  || [],
    });

    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        post(route('employee.role_info', employee.id));
    }

    function handleSelectChange(newValue: any, actionMeta: any) {

        if(actionMeta.action === 'select-option'){
            //@ts-ignore
            let stateValue = data[actionMeta.name].find(role=> (role === newValue))

            if(!stateValue) {
                // @ts-ignore
                setData(data => ({
                    ...data,
                    // @ts-ignore
                    [actionMeta.name]: newValue,
                }))
            }
        }

        if(actionMeta.action === 'remove-value') {

            // @ts-ignore
            setData(data => ({
                ...data,
                // @ts-ignore
                [actionMeta.name]: newValue,
            }))
        }

        if(actionMeta.action === 'clear'){

            // @ts-ignore
            setData(data => ({
                ...data,
                // @ts-ignore
                [actionMeta.name]: [],
            }))

        }

    }

    return (
        <div className="flex-grow-1">
            <div className="d-flex mb-5">
                <div className="text-gray-400 w-125px">Assigned Roles</div>
                {
                    employee.account?.id? <div className="text-gray-800">{ShowRoles.length>0? ShowRoles.map((role: { label: string; }) => (
                        role.label + ', '
                    )): 'No role assigned to this account.'}</div>: 'No account found.'
                }

            </div>
            {
                employee.account?.id?
                    <div className="row">
                        <form onSubmit={handleSubmit}>
                            <MultiSelectInput
                                className="mt-10 col-md-6"
                                label="Roles"
                                name="roles"
                                placeholder="Press enter to select new Role"
                                label_required={true}
                                errors={errors.roles}
                                value={data.roles}
                                options={roles}
                                onChange={handleSelectChange}
                            />
                            <div className="fv-row mt-3">
                                <LoadingButton
                                    type="submit"
                                    loading={processing} >
                                    Save
                                </LoadingButton>
                            </div>
                        </form>

                    </div>:
                    null
            }

        </div>
    )
}

export default InformationSectionTemplate({
    title: 'Account Roles',
    Content: EmployeeAccountRoles,
    modalId: 'roles-account-modal',
    showEditButton: false,
});
