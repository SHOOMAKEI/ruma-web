import React, {createContext} from "react";
import Profile from "./Profile";
import Account from "./Account";
import Password from "./Password";
import Settings from "./Settings";
import Layout from "../../Shared/Layout";
import TabNavigator, {TabItemType} from "../../Shared/Tab/TabNavigator";
import TabContent from "../../Shared/Tab/TabContent";
import {usePage} from "@inertiajs/inertia-react";
import {Settings as Setting, Employee, User} from "../../Shared/Types";
import {Session} from "./Sections/Account/BrowserSessions";

interface auth {
    user : User
}
const tabs: Array<TabItemType> = [
    {id: 'kt_user_edit_tab_1', title: 'Profile', component: <Profile />},
    {id: 'kt_user_edit_tab_2', title: 'Account', component: <Account />},
    {id: 'kt_user_edit_tab_3', title: 'Change Password', component: <Password />},
    {id: 'kt_user_edit_tab_4', title: 'Settings', component: <Settings />},
]


const AccountContext = createContext({});
// @ts-ignore
const AccountContextProvider = ({ children, profile, auth, settings, sessions }) => {
    return (
        <AccountContext.Provider value={{ profile, auth, settings, sessions}}>
            {children}
        </AccountContext.Provider>
    );
};

function Index()  {
const {profile, auth, settings, sessions} = usePage().props

    return(
        <AccountContextProvider profile={profile} auth={auth} settings={settings}  sessions={sessions} >
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
        </AccountContextProvider>
    )
}

export { AccountContext, AccountContextProvider };

Index.layout = (page: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => <Layout children={page}  title="Profile Information"/>;

export default Index;
