import InformationSectionTemplate from "./Section";
import {Employee} from "../../../../Shared/Types";
import React from "react";

interface Props {
    employee: Employee
}

function PersonalInformationSection({employee}: Props) {

    return (
            <div className="d-flex flex-wrap flex-sm-nowrap mb-3">
                <div className="me-7 mb-4">
                    {/*<div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">*/}
                    {/*    <img src="/images/models/avatar.jpg" alt="image" />*/}
                    {/*</div>*/}

                    <div className="col-lg-8">
                        <div className="image-input image-input-outline" data-kt-image-input="true"
                             style={{backgroundImage: "url('/images/utils/blank.png')"}}>
                            <div className="image-input-wrapper w-125px h-125px"
                                 style={{backgroundImage: "url('/images/models/avatar.jpg')"}}/>
                            <label
                                className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow"
                                data-kt-image-input-action="change" data-bs-toggle="tooltip" title=""
                                data-bs-original-title="Change avatar">
                                <i className="bi bi-pencil-fill fs-7"/>
                                <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
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
                        <div className="text-gray-800 fw-bold">{employee.account?.is_active}</div>
                    </div>
                </div>
            </div>
    )
}

export default InformationSectionTemplate({
    title: 'Personal Information',
    Content: PersonalInformationSection,
    modalId: 'personal-information-modal'
});
