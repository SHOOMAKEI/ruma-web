import EmployeeEditModal from "./Modal";
import React, {useCallback, useContext, useEffect, useState} from "react";

import TextInput from "../../../../../../../../../resources/js/Shared/TextInput";
import LoadingButton from "../../../../../../../../../resources/js/Shared/LoadingButton";
import {useForm} from "@inertiajs/inertia-react";
import route from "ziggy-js";
import {Employee} from "../../../../../../../../../resources/js/Shared/Types";
import SelectInput from "../../../../../../../../../resources/js/Shared/SelectInput";
import CheckBoxInput from "../../../../../../../../../resources/js/Shared/CheckBoxInput";
import {EmployeeContext} from "../../../../Shared/Contexts/Contexts";

interface Props {
    modalId: string;
    employee: Employee;
}

interface PersonalInfoValuesType {
    id_number: string;
    username: string;
    surname: string;
    other_name: string;
    gender: string;
    is_active?: boolean;
}


export default function PersonalInfoModal({modalId}: Props) {
    // @ts-ignore
    const {employee}  = useContext(EmployeeContext)


    const { data, setData, errors, post, processing } = useForm({
        id_number: employee.id_number as string || '',
        username: employee.account?.username as string || '',
        surname: employee.surname as string || '',
        other_name: employee.other_name as string || '',
        gender: employee.gender as string || '',
        date_of_birth: employee.date_of_birth as string || '',
        is_active: employee.account?.is_active as boolean || false,
    });

    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        post(route('employee.personal_info', employee.id));
    }


    return (
        <EmployeeEditModal modalId={modalId} title={'Edit Personal Information'}>
            <form onSubmit={handleSubmit} className="form w-100">
                <div className="fv-row mb-1">
                    <TextInput
                        className="mt-0"
                        label="ID Number"
                        name="id_number"
                        type="text"
                        label_required={true}
                        required
                        errors={errors.id_number}
                        value={data.id_number}
                        onChange={(e: { target: { value: string; }; }) => setData('id_number', e.target.value)}
                    />
                </div>

                {
                    employee.account?
                        <div className="fv-row mb-1 row">
                            <TextInput
                                className="mt-2"
                                label="Username"
                                name="username"
                                type="text"
                                label_required={true}
                                required
                                errors={errors.username}
                                value={data.username}
                                onChange={(e: { target: { value: string; }; }) => setData('username', e.target.value)}
                            />
                        </div>
                        :null
                }
                <div className="fv-row mb-1 row">
                    <TextInput
                        className="mt-2"
                        label="Surname"
                        name="surname"
                        type="text"
                        label_required={true}
                        required
                        errors={errors.surname}
                        value={data.surname}
                        onChange={(e: { target: { value: string; }; }) => setData('surname', e.target.value)}
                    />
                </div>
                <div className="fv-row mb-1 row">
                    <TextInput
                        className="mt-2"
                        label="Other Name"
                        name="other_name"
                        type="text"
                        label_required={true}
                        required
                        errors={errors.other_name}
                        value={data.other_name}
                        onChange={(e: { target: { value: string; }; }) => setData('other_name', e.target.value)}
                    />
                </div>
                <div className="fv-row mb-1 row">
                    <SelectInput
                        className="mt-2"
                        label="Gender"
                        name="gender"
                        type="text"
                        label_required={true}
                        required
                        errors={errors.gender}
                        value={data.gender}
                        onChange={(e: { target: { value: string; }; }) => setData('gender', e.target.value)}
                    >
                    <option value="FEMALE">FEMALE</option>
                    <option value="MALE">MALE</option>
                    </SelectInput>
                </div>
                <div className="fv-row mb-1 row">
                    <TextInput
                        className="mt-2"
                        label="Date of Birth"
                        name="date_of_birth"
                        type="date"
                        label_required={true}
                        required
                        errors={errors.date_of_birth}
                        value={data.date_of_birth}
                        onChange={(e: { target: { value: string; }; }) => setData('date_of_birth', e.target.value)}
                    />
                </div>
                {
                    employee.account?
                        <div className="fv-row mb-3 row">
                            <CheckBoxInput
                                className="mt-2"
                                label="Is Active"
                                name="is_active"
                                type="text"
                                label_required={true}
                                required
                                checked={data.is_active}
                                errors={errors.is_active}
                                value={data.is_active}
                                onChange={(e: { target: { value: boolean; }; }) => setData('is_active', e.target.value)}
                            />
                        </div>
                        :null
                }

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
