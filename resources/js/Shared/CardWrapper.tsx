import React from "react";

interface Props {
    children : React.ReactChild
}

export default ({children}: Props) =>{

    return (
        <div className="card pt-4 mb-6 mb-xl-9 h-100">
            <div className="card-body pt-0 h-100">
                {children}
            </div>
        </div>
    )
}
