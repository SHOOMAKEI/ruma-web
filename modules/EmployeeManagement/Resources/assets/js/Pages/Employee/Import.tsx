import React, {Component, useState} from "react";
import {InertiaLink, useForm, usePage} from "@inertiajs/inertia-react";
import route from "ziggy-js";
import TextInput from "../../../../../../../resources/js/Shared/TextInput";
import SelectInput from "../../../../../../../resources/js/Shared/SelectInput";
import LoadingButton from "../../../../../../../resources/js/Shared/LoadingButton";

import Layout from "../../../../../../../resources/js/Shared/Layout";
// @ts-ignore
import TagInput from "../../../../../../../resources/js/Shared/TagInput";
import CheckBoxInput from "../../../../../../../resources/js/Shared/CheckBoxInput";
// @ts-ignore
import FileInput from "../../../../../../../resources/js/Shared/FileInput";
import CardWrapper from "../../../../../../../resources/js/Shared/CardWrapper";
import  { User} from "../../../../../../../resources/js/Shared/Types";
import {Inertia} from "@inertiajs/inertia";
import MultiSelectInput from "../../../../../../../resources/js/Shared/MultiSelectInput";
import Permission from "../../../../../../../resources/js/Pages/Role/Permission";

interface permission {
    id: number
    name: string
    checked: boolean
}

interface props {
    permissions?: permission []
    [key:string]: any
}

function Create() {
    const {companies, roles, permissions, errors}: props = usePage().props
    const [data, setData] = useState({
        file: '',
    })
    const [loading, setLoading] = useState(false)

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
        e.preventDefault()
        setLoading(true)
        // @ts-ignore
        Inertia.post(route('employee.import_excel_file'), data).then(() => {
            setLoading(false);
        })
    }


    function setFile(file: string){
        setData(data => ({
            ...data,
            ['file']: file,
        }))
    }


    // @ts-ignore
    return(
        <CardWrapper>
                <form onSubmit={handleSubmit} className="form w-100">
                    <div className="">
                        <div className="fv-row mb-5 row">
                            <FileInput
                                className="mt-10 col-md-6"
                                name="file"
                                label="Upload Excel file"
                                required
                                label_required={true}
                                errors={errors.file}
                                value={data.file}
                                callback={setFile}
                            />
                            <div className="mt-10 col-md-6">
                                <div className="card card-custom card-stretch">
                                    <div className="card-header">
                                        <div className="card-title">
                                            <h3 className="card-label">Instructions <small>how to upload excel files</small>
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <ol>
                                            <li>Download template file via link <br/>
                                            <a href={route('employee.excel_template')}>Excel template file</a>
                                            </li>
                                            <li>file the excel with the appropriate data.</li>
                                            <li>Save the file with .xlsx extension.</li>
                                            <li>Upload the file to the system. </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>

                        </div>
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
    children={page}  title="Import Employees"
 />;

export default Create;
