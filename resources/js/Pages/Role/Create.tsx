import React, {useState} from "react";
import {InertiaLink, useForm, usePage} from "@inertiajs/inertia-react";
import route from "ziggy-js";
import TextInput from "../../Shared/TextInput";
import LoadingButton from "../../Shared/LoadingButton";
import Layout from "../../Shared/Layout";
import SelectInput from "../../Shared/SelectInput";
// @ts-ignore
import FileInput from "../../Shared/FileInput";
import CardWrapper from "../../Shared/CardWrapper";
import Permission from "./Permission";
import {Inertia} from "@inertiajs/inertia";

interface props {
    permissions?: permission []
    [key:string]: any
}

interface permission {
    id: number
    name: string
    checked: boolean
}

function Create() {

    const { permissions }: props = usePage().props
    const [data, setData] = useState({
        name: '',
        permissions: []
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
        Inertia.post(route('companies.store'), data).then(() => {
            setLoading(false);
        })
    }

    //@ts-ignore
    function setPermission(permissions){
        setData(data => ({
            ...data,
            ['permissions']: permissions,
        }))
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
                    </div>
                    <div className="fv-row mb-5 row">
                        <Permission permissions={permissions} callback={setPermission}/>
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
    children={page}  title="Create Role"
 />;

export default Create;
