import React from "react";

interface Props {
    Content: React.ComponentType<any>;
    title: string;
    modalId: string;
    showEditButton?: boolean;
    showContractButton?:boolean;
    addContractButton?:boolean;
}


export default function InformationSectionTemplate({title, modalId, Content, showEditButton=true, addContractButton=false}: Props) {
    return () => {

        return (
            <section>
                <div className="d-flex justify-content-between mb-5">
                    <div className="card-title mb-0">
                        <h3>{title}</h3>
                    </div>
                    <div className="card-toolbar">
                        {
                            addContractButton ? (
                                <button type="button" className="btn btn-sm btn-flex btn-light-success mx-2" data-bs-toggle="modal" data-bs-target={`#${modalId}-add`}
                                >
                                    Add Contract
                                </button>
                            ) : null
                        }
                        {
                            showEditButton ? (
                                <button type="button" className="btn btn-sm btn-flex btn-light-primary" data-bs-toggle="modal" data-bs-target={`#${modalId}`}
                                >
                                    Edit
                                </button>
                            ) : null
                        }
                    </div>
                </div>
                <Content />
                <div className="separator separator-dashed my-5"/>
            </section>
        )
    }
}
