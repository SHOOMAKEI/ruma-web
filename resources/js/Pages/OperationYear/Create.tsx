import React, {useState} from "react";
import {InertiaLink, useForm, usePage} from "@inertiajs/inertia-react";
import route from "ziggy-js";
import TextInput from "../../Shared/TextInput";
import LoadingButton from "../../Shared/LoadingButton";
import Layout from "../../Shared/Layout";
import TextAreaInput from "../../Shared/TextAreaInput";
import SelectInput from "../../Shared/SelectInput";
import CheckBoxInput from "../../Shared/CheckBoxInput";
// @ts-ignore
import FileInput from "../../Shared/FileInput";
import CardWrapper from "../../Shared/CardWrapper";
import {Inertia} from "@inertiajs/inertia";
import MultiSelectInput from "../../Shared/MultiSelectInput";

function Create() {
    const { companies } = usePage().props

    const [data, setData] = useState({
        name: '',
        code_name: '',
        start_at: '',
        end_at: '',
        companies:[],
        is_current: true,

    })
    const [loading, setLoading] = useState(false)
    const {  errors } = usePage().props;

    function handleChange(e: { target: { id: any; value: any; }; }) {
        const key = e.target.id;
        // @ts-ignore
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setData(data => ({
            ...data,
            [key]: value,
        }))
    }

    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        setLoading(true)
        //@ts-ignore
        Inertia.post(route('operation-years.store'), data).then(() => {
            setLoading(false);
        })
    }

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

    return(
        <CardWrapper>
                <form onSubmit={handleSubmit} className="form w-100">
                    <div className="fv-row mb-5 row">
                        <TextInput
                            className="mt-10 col-md-6"
                            label="Name"
                            placeholder="Name"
                            name="name"
                            type="text"
                            label_required={true}
                            required
                            errors={errors.name}
                            value={data.name}
                            onChange={handleChange}
                        />
                        <TextInput
                            className="mt-10 col-md-6"
                            label="Code Name"
                            placeholder="Code Name"
                            name="code_name"
                            type="text"
                            required
                            label_required={true}
                            errors={errors.code_name}
                            value={data.code_name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="fv-row mb-5 row">
                        <TextInput
                            className="mt-10 col-md-6"
                            label="Start Date"
                            placeholder="Start Date"
                            name="start_at"
                            type="date"
                            required
                            label_required={true}
                            errors={errors.start_at}
                            value={data.start_at}
                            onChange={handleChange}
                        />
                        <TextInput
                            className="mt-10 col-md-6"
                            label="End Date"
                            placeholder="End Date"
                            name="end_at"
                            type="date"
                            required
                            label_required={true}
                            errors={errors.end_at}
                            value={data.end_at}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="fv-row mb-5 row">
                        <MultiSelectInput
                            className="mt-10 col-md-6"
                            label="Companies"
                            name="companies"
                            placeholder="Press enter to select new Company"
                            label_required={true}
                            errors={errors.companies}
                            value={data.companies}
                            options={companies}
                            onChange={handleSelectChange}
                        />
                        <CheckBoxInput
                            className="mt-10 col-md-6"
                            label="Is Active"
                            name="is_current"
                            checked={data.is_current}
                            errors={errors.is_current}
                            value={data.is_current}
                            onChange={handleChange}
                        />
                </div>
                <div className="fv-row">
                    <LoadingButton
                        type="submit"
                        loading={loading} >
                        Save
                    </LoadingButton>
                </div>
                </form>
        </CardWrapper>
    )
}

Create.layout = (page: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => <Layout
    children={page}  title="Create Operation Year"
 />;

export default Create;
