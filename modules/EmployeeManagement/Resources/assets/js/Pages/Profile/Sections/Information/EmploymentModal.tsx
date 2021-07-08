import EmployeeEditModal from "./Modal";
import React, {useCallback, useContext, useEffect, useState} from "react";
import TextInput from "../../../../../../../../../resources/js/Shared/TextInput";
import LoadingButton from "../../../../../../../../../resources/js/Shared/LoadingButton";
import {Employee} from "../../../../../../../../../resources/js/Shared/Types";
import {useForm} from "@inertiajs/inertia-react";
import route from "ziggy-js";
import SelectInput from "../../../../../../../../../resources/js/Shared/SelectInput";
import {EmployeeContext} from "../../../../Shared/Contexts/Contexts";

interface Props {
    modalId: string;
    employee: Employee;
}

interface EmploymentInfoValuesType {
    employment_status: string;
    job_status: string;
}


export default function EmploymentInfoModal({modalId}: Props) {


    // @ts-ignore
    const {employee, job_statuses}  = useContext(EmployeeContext)

    const { data, setData, errors, post, processing } = useForm({
        contract_id: '',
        job_status: employee.job_status as string || '',
        from: '',
        to: '',
    });

    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        post(route('employee.contract_info', employee.id));
    }

    return (
        <EmployeeEditModal modalId={modalId} title={'Edit Personal Information'}>
            <form onSubmit={handleSubmit} className="form w-100">
                <div className="fv-row mb-1">
                    <SelectInput
                        className="mt-2"
                        label="Contract"
                        name="contract_id"
                        required
                        label_required={true}
                        errors={errors.contract_id}
                        value={data.contract_id}
                        onChange={(e: { target: { value: string; }; }) => setData('contract_id', e.target.value)}
                    >
                        { employee.contracts.length>0 && employee.contracts.map((contract :{id:number, started_at: string, ended_at:string,status:string, contract_definition: {id:number,title:string, type:string, description:string }}) => (
                            <option key={Math.random()} value={contract.id}>{contract.contract_definition.title} - {contract.contract_definition.type}</option>
                        ))}
                    </SelectInput>
                </div>
                <div className="fv-row mb-2 row">
                    <SelectInput
                        className="mt-2"
                        label="Job Status"
                        name="job_status"
                        type="text"
                        required
                        label_required={true}
                        errors={errors.job_status}
                        value={data.job_status}
                        onChange={(e: { target: { value: string; }; }) => setData('job_status', e.target.value)}
                    >
                        { job_statuses && job_statuses.map((status: { name:string }) => (
                            <option key={Math.random()} value={status.name}>{status.name}</option>
                        ))}
                    </SelectInput>
                </div>
                <div className="fv-row mb-1" style={{display: (data.job_status === 'SUSPENDED') ||  (data.job_status === 'IN-ACTIVE')?'block': ''}}>
                    <TextInput
                        className="mt-2"
                        label="From"
                        name="from"
                        type="date"
                        label_required={true}
                        required
                        errors={errors.from}
                        value={data.from}
                        onChange={(e: { target: { value: string; }; }) => setData('from', e.target.value)}
                    />
                </div>
                <div className="fv-row mb-1" style={{display: (data.job_status === 'SUSPENDED') ||  (data.job_status === 'IN-ACTIVE')?'block': ''}}>
                    <TextInput
                        className="mt-2"
                        label="To"
                        name="to"
                        type="date"
                        label_required={true}
                        required
                        errors={errors.to}
                        value={data.to}
                        onChange={(e: { target: { value: string; }; }) => setData('to', e.target.value)}
                    />
                </div>
                <div className="fv-row">
                    <button type="button" className="btn btn-light mx-4" data-bs-dismiss="modal">Close</button>
                    <LoadingButton
                        type="submit"
                        loading={processing}>
                        Save
                    </LoadingButton>
                </div>
            </form>
        </EmployeeEditModal>
    )
}
