import InformationSectionTemplate from "./Section";
import {Employee} from "../../../../../../../../../resources/js/Shared/Types";
import React, {useContext, useEffect} from "react";
import {EmployeeContext} from "../../../../Shared/Contexts/Contexts";
import PersonalInfoModal from "./PersonalInfoModal";
// @ts-ignore
import FileInput from "../../../../../../../../../resources/js/Shared/FileInput";
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";
import {useForm} from "@inertiajs/inertia-react";

interface Props {
    employee: Employee
}

const PERSONAL_INFO_MODAL_ID = 'personal-information-modal'

 function PersonalInformationSection() {
    // @ts-ignore
    const {employee}  = useContext(EmployeeContext)
     const { data, setData, errors, post, processing } = useForm({
         photo: '',
     });


     // @ts-ignore
     useEffect(() => {
             if(data.photo !== ''){
                 post(route('employee.profile_photo', employee.id))
             }
     }
    ,[data.photo])

     // function handleSubmit(e: { preventDefault: () => void; }) {
     //     e.preventDefault();
     //     post(route('login'));
     // }

     function setPhoto(photo: string){
         setData(data => ({
             ...data,
             ['photo']: photo,
         }))
     }

    return (
            <div className="d-flex flex-wrap flex-sm-nowrap mb-3">
                <div className="me-7 mb-4">
                    {/*<div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">*/}
                    {/*    <img src="/images/models/avatar.jpg" alt="image" />*/}
                    {/*</div>*/}

                    <div className="col-lg-8">
                        <form>
                        <div className="image-input image-input-outline" data-kt-image-input="true"
                             style={{backgroundImage: `url(${employee.profile_photo})`}}>
                            <div className="image-input-wrapper w-125px h-125px"
                                 style={{backgroundImage: `url(${employee.profile_photo})`}}/>
                            <label
                                className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow"
                                data-kt-image-input-action="change" data-bs-toggle="tooltip" title=""
                                data-bs-original-title="Change avatar">
                                <i className="bi bi-pencil-fill fs-7"/>
                                <FileInput
                                    name="photo"
                                    accept="image/*"
                                    errors={errors.photo}
                                    value={data.photo}
                                    callback={setPhoto}
                                />
                                <input type="hidden" name="avatar_remove" />
                            </label>
                            <span
                                className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow"
                                data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title=""
                                data-bs-original-title="Cancel avatar">
                                <i className="bi bi-x fs-2"/>
                            </span>
                            <span
                                className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow"
                                data-kt-image-input-action="remove" data-bs-toggle="tooltip" title=""
                                data-bs-original-title="Remove avatar">
                                <i className="bi bi-x fs-2"/>
                            </span>
                        </div>
                        </form>
                        <div className="form-text">Allowed file types: png, jpg, jpeg.</div>
                    </div>

                </div>
                <div className="flex-grow-1">
                    <div className="d-flex mb-3">
                        <div className="text-gray-400 fw-bold w-125px">ID Number</div>
                        <div className="text-gray-800 fw-bold">{employee.id_number}</div>
                    </div>
                    <div className="d-flex mb-3">
                        <div className="text-gray-400 fw-bold w-125px">Username</div>
                        <div className="text-gray-800 fw-bold">{employee.account?.username}</div>
                    </div>
                    <div className="d-flex mb-3">
                        <div className="text-gray-400 fw-bold w-125px">Surname</div>
                        <div className="text-gray-800 fw-bold">{employee.surname}</div>
                    </div>
                    <div className="d-flex mb-3">
                        <div className="text-gray-400 fw-bold w-125px">Other Name</div>
                        <div className="text-gray-800 fw-bold">{employee.other_name}</div>
                    </div>
                    <div className="d-flex mb-3">
                        <div className="text-gray-400 fw-bold w-125px">Gender</div>
                        <div className="text-gray-800 fw-bold">{employee.gender}</div>
                    </div>
                    <div className="d-flex mb-3">
                        <div className="text-gray-400 fw-bold w-125px">Date of birth</div>
                        <div className="text-gray-800 fw-bold">{employee.date_of_birth}</div>
                    </div>
                    <div className="d-flex mb-3">
                        <div className="text-gray-400 fw-bold w-125px">Account status</div>
                        <div className="text-gray-800 fw-bold">{employee.account?.is_active?
                            <span className="badge badge-light-primary">ACTIVE</span>:
                            <span className="badge badge-light-danger">IN ACTIVE</span>}</div>
                    </div>
                    <PersonalInfoModal modalId={PERSONAL_INFO_MODAL_ID} employee={employee} />
                </div>
            </div>
    )
}

export default InformationSectionTemplate({
    title: 'Personal Information',
    Content: PersonalInformationSection,
    modalId: 'personal-information-modal'
});
