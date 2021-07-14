import React from 'react';
import {CloseIcon} from "../../../../../../../../../resources/js/Shared/Icons/svg";


interface Props {
    modalId: string;
    title: string;
    children: React.ReactNode;
}

export default function EmployeeEditModal({title, modalId, children}: Props) {
    return (
        <div className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby={`${modalId}Label`}  aria-hidden="true" tabIndex={-1} id={`${modalId}`} >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <h5 className="modal-title"  id={`${modalId}Label`}>{title}</h5>
                        <div className="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal"
                             aria-label="Close">
                            <CloseIcon />
                        </div>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
