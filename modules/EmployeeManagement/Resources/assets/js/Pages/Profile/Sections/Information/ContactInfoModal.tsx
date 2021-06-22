import EmployeeEditModal from "./Modal";
import React, {useCallback} from "react";
import TextInput from "../../../../../../../../../resources/js/Shared/TextInput";
import LoadingButton from "../../../../../../../../../resources/js/Shared/LoadingButton";
import {Employee} from "../../../../../../../../../resources/js/Shared/Types";
import {useForm} from "@inertiajs/inertia-react";
import route from "ziggy-js";

interface Props {
    modalId: string;
    employee: Employee;
}

interface ContactInfoValuesType {
    mobile_number: string;
    alternative_mobile_number: string;
    email: string;
    alternative_email: string;
}

export default function ContactInfoModal({modalId, employee}: Props) {
    const initialValues: ContactInfoValuesType = {
        mobile_number: employee.mobile_number as string,
        alternative_mobile_number: employee.alternative_mobile_number as string,
        email: employee.email as string,
        alternative_email: employee.alternative_email as string
    };

    const { data, setData, errors, post, processing } = useForm({
        mobile_number: '',
        alternative_mobile_number: '',
        email: '',
        alternative_email: '',
    });

    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        post(route('login'));
    }


    return (
        <EmployeeEditModal modalId={modalId} title={'Edit Contact Information'}>
            <form onSubmit={handleSubmit} className="form w-100">
                <div className="fv-row mb-5">
                    <TextInput
                        className="mt-10"
                        label="Mobile Number"
                        name="mobile_number"
                        type="text"
                        required
                        errors={errors.mobile_number}
                        value={data.mobile_number}
                        onChange={(e: { target: { value: string; }; }) => setData('mobile_number', e.target.value)}
                    />
                </div>
                <div className="fv-row mb-5 row">
                    <TextInput
                        className="mt-10"
                        label="Alternative Mobile Number"
                        name="alternative_mobile_number"
                        type="text"
                        required
                        errors={errors.alternative_mobile_number}
                        value={data.alternative_mobile_number}
                        onChange={(e: { target: { value: string; }; }) => setData('alternative_mobile_number', e.target.value)}
                    />
                </div>
                <div className="fv-row mb-5 row">
                    <TextInput
                        className="mt-10"
                        label="Email"
                        name="email"
                        type="text"
                        required
                        errors={errors.email}
                        value={data.email}
                        onChange={(e: { target: { value: string; }; }) => setData('email', e.target.value)}
                    />
                </div>
                <div className="fv-row mb-5 row">
                    <TextInput
                        className="mt-10"
                        label="Alternative Email"
                        name="alternative_email"
                        type="text"
                        required
                        errors={errors.alternative_email}
                        value={data.alternative_email}
                        onChange={(e: { target: { value: string; }; }) => setData('alternative_email', e.target.value)}
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
