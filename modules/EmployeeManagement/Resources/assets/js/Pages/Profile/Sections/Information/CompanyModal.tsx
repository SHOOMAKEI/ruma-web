import EmployeeEditModal from "./Modal";
import React, {useCallback, useContext, useEffect, useState} from "react";
import TextInput from "../../../../../../../../../resources/js/Shared/TextInput";
import LoadingButton from "../../../../../../../../../resources/js/Shared/LoadingButton";
import {Company, Employee} from "../../../../../../../../../resources/js/Shared/Types";
import {useForm} from "@inertiajs/inertia-react";
import route from "ziggy-js";
import {EmployeeContext} from "../../../../Shared/Contexts/Contexts";
import MultiSelectInput from "../../../../../../../../../resources/js/Shared/MultiSelectInput";

interface Props {
    modalId: string;
    employee: Employee;
}

interface OtherInfoValuesType {
    resumption_date: string;
    due_date: string;
}


export default function CompanyInfoModal({modalId}: Props) {

    // @ts-ignore
    const {employee, companies}  = useContext(EmployeeContext)
    // @ts-ignore
    const companiesData = employee.companies.map((company) => {
        return {
            label: company.name,
            value: company.id
        }
    })

    const { data, setData, errors, post, processing } = useForm({
        companies: companiesData || [],
    });

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


    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        post(route('employee.companies_info', employee.id));
    }

    return (
        <EmployeeEditModal modalId={modalId} title={'Edit Other Information'}>
            <form onSubmit={handleSubmit} className="form w-100">
                <div className="fv-row mb-1">
                    <MultiSelectInput
                        className="mt-2"
                        label="Companies"
                        name="companies"
                        placeholder="Press enter to select new Company"
                        label_required={true}
                        errors={errors.companies}
                        value={data.companies}
                        options={companies}
                        onChange={handleSelectChange}
                    />
                </div>
                <div className="fv-row">
                    <button type="button" className="btn btn-light mx-4" data-bs-dismiss="modal">Close</button>
                    <LoadingButton
                        type="submit"
                        loading={processing} >
                        Save
                    </LoadingButton>
                </div>
            </form>
        </EmployeeEditModal>
    )
}
