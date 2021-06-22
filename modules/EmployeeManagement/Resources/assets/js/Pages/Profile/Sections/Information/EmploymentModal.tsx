import EmployeeEditModal from "./Modal";
import React, {useCallback, useEffect, useState} from "react";
import TextInput from "../../../../../../../../../resources/js/Shared/TextInput";
import LoadingButton from "../../../../../../../../../resources/js/Shared/LoadingButton";
import {Employee} from "../../../../../../../../../resources/js/Shared/Types";
import {useForm} from "@inertiajs/inertia-react";
import route from "ziggy-js";

interface Props {
    modalId: string;
    employee: Employee;
}

interface EmploymentInfoValuesType {
    employment_status: string;
    job_status: string;
}


export default function EmploymentInfoModal({modalId, employee}: Props) {
    const initialValues: EmploymentInfoValuesType = {
        employment_status: employee.employment_status as string,
        job_status: employee.job_status as string,
    };

    const { data, setData, errors, post, processing } = useForm({
        employment_status: '',
        job_status: '',
    });

    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        post(route('login'));
    }

    return (
        <EmployeeEditModal modalId={modalId} title={'Edit Personal Information'}>
            <form onSubmit={handleSubmit} className="form w-100">
                <div className="fv-row mb-5">
                    <TextInput
                        className="mt-10"
                        label="Employment Status"
                        name="employment_status"
                        type="text"
                        required
                        errors={errors.employment_status}
                        value={data.employment_status}
                        onChange={(e: { target: { value: string; }; }) => setData('employment_status', e.target.value)}
                    />
                </div>
                <div className="fv-row mb-5 row">
                    <TextInput
                        className="mt-10"
                        label="Job Status"
                        name="job_status"
                        type="text"
                        required
                        errors={errors.job_status}
                        value={data.job_status}
                        onChange={(e: { target: { value: string; }; }) => setData('job_status', e.target.value)}
                    />
                </div>
                <div className="fv-row">
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
