import EmployeeEditModal from "./Modal";
import React, {useCallback, useContext, useEffect, useState} from "react";
import TextInput from "../../../../../../../../../resources/js/Shared/TextInput";
import LoadingButton from "../../../../../../../../../resources/js/Shared/LoadingButton";
import {Employee} from "../../../../../../../../../resources/js/Shared/Types";
import {useForm} from "@inertiajs/inertia-react";
import route from "ziggy-js";
import {EmployeeContext} from "../../../../Shared/Contexts/Contexts";

interface Props {
    modalId: string;
    employee: Employee;
}

interface OtherInfoValuesType {
    resumption_date: string;
    due_date: string;
}


export default function OtherInfoModal({modalId}: Props) {


    // @ts-ignore
    const {employee}  = useContext(EmployeeContext)

    const { data, setData, errors, post, processing } = useForm({
        resumption_date: employee.resumption_date as string || '',
        due_date: employee.due_date as string || '',
    });

    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        post(route('employee.other_info', employee.id));
    }

    return (
        <EmployeeEditModal modalId={modalId} title={'Edit Other Information'}>
            <form onSubmit={handleSubmit} className="form w-100">
                <div className="fv-row mb-1">
                    <TextInput
                        className="mt-2"
                        label="Resumption Date"
                        name="resumption_date"
                        type="date"
                        required
                        errors={errors.resumption_date}
                        value={data.resumption_date}
                        onChange={(e: { target: { value: string; }; }) => setData('resumption_date', e.target.value)}
                    />
                </div>
                <div className="fv-row mb-1 row">
                    <TextInput
                        className="mt-2"
                        label="Due Date"
                        name="due_date"
                        type="date"
                        required
                        errors={errors.due_date}
                        value={data.due_date}
                        onChange={(e: { target: { value: string; }; }) => setData('due_date', e.target.value)}
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
