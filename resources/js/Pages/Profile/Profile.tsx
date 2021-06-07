import React from "react";
import PersonalInformationSection from "./Sections/Information/Personal";
import PersonalInformationAddressSection from "./Sections/Information/Address";
import PersonalInformationContactSection from "./Sections/Information/ContactInfo";
import PersonalInformationOtherSection from "./Sections/Information/Other";
import PersonalInformationEmploymentSection from "./Sections/Information/Employment";
import PersonalInformationCompanySection from "./Sections/Information/Company";
import {Employee} from "../../Shared/Types";



export default () => {
    return (
        <div>
            <PersonalInformationSection  />
            <PersonalInformationEmploymentSection />
            <PersonalInformationContactSection />
            <PersonalInformationAddressSection  />
            <PersonalInformationOtherSection />
            <PersonalInformationCompanySection  />
        </div>
    )
}
