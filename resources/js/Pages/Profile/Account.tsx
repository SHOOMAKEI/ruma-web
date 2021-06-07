import React from "react";
import EmployeeAccountRoles from "./Sections/Account/Roles";
import EmployeeAccountPermissions from "./Sections/Account/Permissions";
import AccountInformation from "./Sections/Account/AccountInformation";

export default () => {

    return (
        <div>
            <AccountInformation/>
            <EmployeeAccountRoles />
            <EmployeeAccountPermissions />
        </div>
    )
}
