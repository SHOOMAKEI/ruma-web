import React, {useContext} from "react";
import PersonalInformationSection from "./Sections/Information/Personal";
import PersonalInformationAddressSection from "./Sections/Information/Address";
import PersonalInformationContactSection from "./Sections/Information/ContactInfo";
import PersonalInformationOtherSection from "./Sections/Information/Other";
import PersonalInformationEmploymentSection from "./Sections/Information/Employment";
import PersonalInformationCompanySection from "./Sections/Information/Company";
import {Employee} from "../../../../../../../resources/js/Shared/Types";
import {SettingsContext} from "../../../../../../../resources/js/Shared/Contexts/SettingsContexts";
import {EmployeeContext} from "../../Shared/Contexts/Contexts";



export default () => {


    return (
        <div>
            <PersonalInformationSection />
            <PersonalInformationEmploymentSection />
            <PersonalInformationContactSection />
            <PersonalInformationAddressSection  />
            <PersonalInformationOtherSection />
            <PersonalInformationCompanySection  />
        </div>
    )
}
