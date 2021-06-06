import React from "react";

export default () => {
    return (
        <div className="footer py-4 d-flex flex-lg-column" id="kt_footer">
            <div className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between">
                <div className="text-dark order-2 order-md-1">
                    <span className="text-muted fw-bold me-1">{new Date().getFullYear()}©</span>
                    <a href="" target="_blank" className="text-gray-800 text-hover-primary">Ruma</a>
                </div>
            </div>
        </div>
    )
}
