import React from "react";
import TwoFactorAuthentication from "./Sections/Account/TwoFactorAuthentication";
import OneTimePassword from "./Sections/Account/OneTimePassword";
import BrowserSessions from "./Sections/Account/BrowserSessions";

export default  () => {


    return (
        <>
          <TwoFactorAuthentication/>
            <hr/>
          <OneTimePassword/>
            <hr/>
          <BrowserSessions/>
        </>
    )
}
