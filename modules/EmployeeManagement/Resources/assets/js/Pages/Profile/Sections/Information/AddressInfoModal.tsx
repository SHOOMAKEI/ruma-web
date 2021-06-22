import EmployeeEditModal from "./Modal";
import React, {useCallback, useEffect, useState} from "react";
import {Employee} from "../../../../../../../../../resources/js/Shared/Types";
import TextInput from "../../../../../../../../../resources/js/Shared/TextInput";
import {InertiaLink, useForm} from "@inertiajs/inertia-react";
import route from "ziggy-js";
import LoadingButton from "../../../../../../../../../resources/js/Shared/LoadingButton";


interface Props {
    modalId: string;
    employee: Employee;
}

interface AddressInfoValuesType {
    region: string;
    location: string;
    address: string;
}
export default function AddressInfoModal({modalId, employee}: Props) {

const { data, setData, errors, post, processing } = useForm({
    region: '',
    location: '',
    address: ''
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
                        label="Region"
                        name="region"
                        type="text"
                        required
                        errors={errors.region}
                        value={data.region}
                        onChange={(e: { target: { value: string; }; }) => setData('region', e.target.value)}
                    />
                </div>
                <div className="fv-row mb-5 row">
                    <TextInput
                        className="mt-10 "
                        label="Location"
                        name="location"
                        type="text"
                        required
                        errors={errors.location}
                        value={data.location}
                        onChange={(e: { target: { value: string; }; }) => setData('location', e.target.value)}
                    />
                </div>
                <div className="fv-row mb-5 row">
                    <TextInput
                        className="mt-10"
                        label="Address"
                        name="address"
                        type="text"
                        required
                        errors={errors.address}
                        value={data.address}
                        onChange={(e: { target: { value: string; }; }) => setData('address', e.target.value)}
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
