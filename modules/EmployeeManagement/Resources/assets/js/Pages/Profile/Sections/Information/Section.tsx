import React from "react";

interface Props {
    Content: React.ComponentType<any>;
    title: string;
    modalId: string;
    showEditButton?: boolean;
}


export default function InformationSectionTemplate({title, modalId, Content, showEditButton=true}: Props) {
    return () => {

        return (
            <section>
                <div className="d-flex justify-content-between mb-5">
                    <div className="card-title mb-0">
                        <h3>{title}</h3>
                    </div>
                    <div className="card-toolbar">
                        {
                            showEditButton ? (
                                <button type="button" className="btn btn-sm btn-flex btn-light-primary">
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
