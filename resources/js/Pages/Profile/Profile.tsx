import React from "react";

export default () => {


    return (
        <div className="tab-pane show px-7 active" id="kt_user_edit_tab_1" role="tabpanel">
            <div className="row">
                <div className="col-xl-2"></div>
                <div className="col-xl-7 my-2">
                    <div className="row">
                        <label className="col-3"></label>
                        <div className="col-9">
                            <h6 className="text-dark font-weight-bold mb-10">Profile Info:</h6>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label
                            className="col-form-label col-3 text-lg-right text-left">Avatar</label>
                        <div className="col-9">
                            <div className="image-input image-input-outline image-input-changed"
                                 id="kt_user_edit_avatar"
                                 style="background-image: url(/metronic/theme/html/demo1/dist/assets/media/users/blank.png)">
                                <div className="image-input-wrapper"/>
                                <label
                                    className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                                    data-action="change" data-toggle="tooltip" title=""
                                    data-original-title="Change avatar">
                                    <i className="fa fa-pen icon-sm text-muted"></i>
                                    <input type="file" name="profile_avatar"
                                           accept=".png, .jpg, .jpeg">
                                        <input type="hidden" name="profile_avatar_remove"
                                               value="0"/>
                                </label>
                                <span
                                    className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                                    data-action="cancel" data-toggle="tooltip" title=""
                                    data-original-title="Cancel avatar">
																			<i className="ki ki-bold-close icon-xs text-muted"></i>
																		</span>
                                <span
                                    className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                                    data-action="remove" data-toggle="tooltip" title=""
                                    data-original-title="Remove avatar">
																			<i className="ki ki-bold-close icon-xs text-muted"></i>
																		</span>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-form-label col-3 text-lg-right text-left">First
                            Name</label>
                        <div className="col-9">
                            <input className="form-control form-control-lg form-control-solid"
                                   type="text" value="Anna"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-form-label col-3 text-lg-right text-left">Last
                            Name</label>
                        <div className="col-9">
                            <input className="form-control form-control-lg form-control-solid"
                                   type="text" value="Krox"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-form-label col-3 text-lg-right text-left">Company
                            Name</label>
                        <div className="col-9">
                            <input className="form-control form-control-lg form-control-solid"
                                   type="text" value="Loop Inc."/>
                                <span className="form-text text-muted">If you want your invoices addressed to a company. Leave blank to use your full name.</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-form-label col-3 text-lg-right text-left">Contact
                            Phone</label>
                        <div className="col-9">
                            <div className="input-group input-group-lg input-group-solid">
                                <div className="input-group-prepend">
																			<span className="input-group-text">
																				<i className="la la-phone"></i>
																			</span>
                                </div>
                                <input type="text"
                                       className="form-control form-control-lg form-control-solid"
                                       value="+45678967456" placeholder="Phone"/>
                            </div>
                            <span className="form-text text-muted">We'll never share your email with anyone else.</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-form-label col-3 text-lg-right text-left">Email
                            Address</label>
                        <div className="col-9">
                            <div className="input-group input-group-lg input-group-solid">
                                <div className="input-group-prepend">
																			<span className="input-group-text">
																				<i className="la la-at"></i>
																			</span>
                                </div>
                                <input type="text"
                                       className="form-control form-control-lg form-control-solid"
                                       value="anna.krox@loop.com" placeholder="Email"/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-form-label col-3 text-lg-right text-left">Company
                            Site</label>
                        <div className="col-9">
                            <div className="input-group input-group-lg input-group-solid">
                                <input type="text"
                                       className="form-control form-control-lg form-control-solid"
                                       placeholder="Username" value="loop"/>
                                    <div className="input-group-append">
                                        <span className="input-group-text">.com</span>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
