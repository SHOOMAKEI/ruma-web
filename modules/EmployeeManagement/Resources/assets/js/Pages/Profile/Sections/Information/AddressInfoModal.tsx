import EmployeeEditModal from "./Modal";
import React, {useCallback, useContext, useEffect, useState} from "react";
import {Employee} from "../../../../../../../../../resources/js/Shared/Types";
import TextInput from "../../../../../../../../../resources/js/Shared/TextInput";
import {InertiaLink, useForm} from "@inertiajs/inertia-react";
import route from "ziggy-js";
import LoadingButton from "../../../../../../../../../resources/js/Shared/LoadingButton";
import {EmployeeContext} from "../../../../Shared/Contexts/Contexts";


interface Props {
    modalId: string;
    employee: Employee;
}

interface AddressInfoValuesType {
    region: string;
    location: string;
    address: string;
}
export default function AddressInfoModal({modalId}: Props) {
    // @ts-ignore
    const {employee}  = useContext(EmployeeContext)

const { data, setData, errors, post, processing } = useForm({
    region: employee.region as string || '',
    location: employee.location as string || '',
    address: employee.address as string || ''
});

function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    post(route('employee.address_info', employee.id));
}

    return (
        <EmployeeEditModal modalId={modalId} title={'Edit Personal Information'}>
            <form onSubmit={handleSubmit} className="form w-100">
                <div className="fv-row mb-1">
                    <TextInput
                        className="mt-2"
                        label="Region"
                        name="region"
                        type="text"
                        required
                        errors={errors.region}
                        value={data.region}
                        onChange={(e: { target: { value: string; }; }) => setData('region', e.target.value)}
                    />
                </div>
                <div className="fv-row mb-1 row">
                    <TextInput
                        className="mt-2"
                        label="Location"
                        name="location"
                        type="text"
                        required
                        errors={errors.location}
                        value={data.location}
                        onChange={(e: { target: { value: string; }; }) => setData('location', e.target.value)}
                    />
                </div>
                <div className="fv-row mb-1 row">
                    <TextInput
                        className="mt-2"
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
