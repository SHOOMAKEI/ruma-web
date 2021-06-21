import React, {createContext} from "react";
import Profile from "./Profile";
import Account from "./Account";
import Password from "./Password";
import Settings from "./Settings";
import Layout from "../../../../../../../resources/js/Shared/Layout";
import TabNavigator, {TabItemType} from "../../../../../../../resources/js/Shared/Tab/TabNavigator";
import TabContent from "../../../../../../../resources/js/Shared/Tab/TabContent";
import {usePage} from "@inertiajs/inertia-react";
import {Settings as Setting, Employee, User} from "../../../../../../../resources/js/Shared/Types";
import {Session} from "./Sections/Account/BrowserSessions";
import {EmployeeContext} from '../../Shared/Contexts/Contexts'

interface auth {
    user : User
}
const tabs: Array<TabItemType> = [
    {id: 'kt_user_edit_tab_1', title: 'Profile', component: <Profile />},
]


function Index()  {
    const {employee,auth, errors} = usePage().props

    return(
        <EmployeeContext.Provider value={{employee, auth, errors}}>
        <div className="d-flex flex-column flex-xl-row">
            <div className="flex-lg-row-fluid">
                <div className="card">
                    <div className="card-body">
                        <TabNavigator tabs={tabs} />
                        <TabContent tabs={tabs} />
                    </div>
                </div>
            </div>
        </div>
        </EmployeeContext.Provider>
    )
}


Index.layout = (page: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => <Layout children={page}  title="Profile Information"/>;

export default Index;
