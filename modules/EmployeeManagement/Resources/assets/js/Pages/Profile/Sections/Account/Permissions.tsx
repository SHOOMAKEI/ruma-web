import InformationSectionTemplate from "../Information/Section";
import React, {useContext, useEffect, useState} from "react";
import {Employee} from "../../../../../../../../../resources/js/Shared/Types";
import {EmployeeContext} from "../../../../Shared/Contexts/Contexts";
import {useForm} from "@inertiajs/inertia-react";
import Permission from "../../../../../../../../../resources/js/Pages/Role/Permission";
import route from "ziggy-js";
import LoadingButton from "../../../../../../../../../resources/js/Shared/LoadingButton";

export interface Props {
    employee: Employee
}

function EmployeeAccountPermissions() {
    // @ts-ignore
    const {employee, permissions}  = useContext(EmployeeContext)

    const { data, setData, errors, post, processing } = useForm({
        permissions: permissions || [],
    });

    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        post(route('employee.permission_info', employee.id));
    }

    //@ts-ignore
    function setPermission(permissions){
        setData(data => ({
            ...data,
            ['permissions']: permissions,
        }))
    }


    return (
        <>
            {
                // @ts-ignore
                employee.account?.id?
                    <div>
                        <form onSubmit={handleSubmit}>
                            <Permission permissions={permissions} callback={setPermission}/>
                            <div className="fv-row mt-5">
                                <LoadingButton
                                    type="submit"
                                    loading={processing} >
                                    Save
                                </LoadingButton>
                            </div>
                        </form>

                    </div>: null
            }
        </>
    )
}

export default InformationSectionTemplate({
    title: 'Account Permissions',
    Content: EmployeeAccountPermissions,
    modalId: 'permissions-account-modal',
    showEditButton: false,
});
