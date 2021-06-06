import React from 'react';

interface Props {
    type: 'danger' | 'success' | 'dark';
    message: string;
    link?: string;
    linkMessage?: string;
}

export default ({type, message, link, linkMessage}: Props) => {
    return (
        <div className={`alert alert-${type} bg-${type} text-white border-0 mb-10 show mb-4`} role="alert">
            <strong>{type === 'danger' ? 'Error' : 'Info'}:- </strong> {message}
            {
                (link && link?.length > 0) ? (
                    <React.Fragment>
                        <hr />
                        <div>
                            <button className="text-white fw-light btn btn-link p-0" >
                                {`${linkMessage} ${link}`}
                            </button>
                        </div>
                    </React.Fragment>
                ) : null
            }
        </div>
    )
}
