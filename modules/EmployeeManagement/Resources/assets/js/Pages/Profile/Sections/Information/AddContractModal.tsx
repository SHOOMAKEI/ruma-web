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

export default function AddContractModal({modalId}: Props) {


    // @ts-ignore
    const {employee, contract_definitions}  = useContext(EmployeeContext)

    const { data, setData, errors, post, processing } = useForm({
        started_at: '',
        ended_at: '',
        contract_definition_id: contract_definitions[0]?.id || '',
        status:'ACTIVE'
    });

    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        post(route('employee.add_contract_info', employee.id));
    }

    return (
        <EmployeeEditModal modalId={modalId+'-add'} title={'Add Contract Information'}>
            <form onSubmit={handleSubmit} className="form w-100">
                <div className="fv-row mb-1">
                    <TextInput
                        className="mt-2"
                        label="Start At"
                        name="started_at"
                        type="date"
                        label_required={true}
                        required
                        errors={errors.started_at}
                        value={data.started_at}
                        onChange={(e: { target: { value: string; }; }) => setData('started_at', e.target.value)}
                    />
                </div>
                <div className="fv-row mb-1">
                    <TextInput
                        className="mt-2"
                        label="End At"
                        name="ended_at"
                        type="date"
                        label_required={true}
                        required
                        errors={errors.ended_at}
                        value={data.ended_at}
                        onChange={(e: { target: { value: string; }; }) => setData('ended_at', e.target.value)}
                    />
                </div>
                <div className="fv-row mb-3 row">
                    <SelectInput
                        className="mt-2"
                        label="Contract Type"
                        name="contract_definition_id"
                        required
                        label_required={true}
                        errors={errors.contract_definition_id}
                        value={data.contract_definition_id}
                        onChange={(e: { target: { value: string; }; }) => setData('contract_definition_id', e.target.value)}
                    >
                        { contract_definitions && contract_definitions.map((definition: { id:number, title:string, type: string }) => (
                            <option key={Math.random()} value={definition.id}>{definition.title} - {definition.type}</option>
                        ))}
                    </SelectInput>
                </div>
                <div className="fv-row mb-3 row">
                    <SelectInput
                        className="mt-2"
                        label="Contract Status"
                        name="status"
                        required
                        label_required={true}
                        errors={errors.status}
                        value={data.status}
                        onChange={(e: { target: { value: string; }; }) => setData('status', e.target.value)}
                    >
                        <option value="ACTIVE">ACTIVE</option>
                        <option value="SUSPENDED">SUSPENDED</option>
                        <option value="TERMINATED">TERMINATED</option>
                    </SelectInput>
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
