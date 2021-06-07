import React, {ReactNode} from "react";

export interface TabItemType {
    id: string;
    title: string;
    component: ReactNode;
}

interface Props {
    tabs: Array<TabItemType>;
    navigatorActions?: React.ReactNode;
}

export default ({tabs, navigatorActions}: Props)  => {
    function checkActiveTab(tab: TabItemType): string {
        if (tabs.indexOf(tab) === 0)
            return 'active show'

        return ''
    }

    return (
        <ul className="nav nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-bold mb-8">
            {
                tabs.map(tabItem => (
                    <li className="nav-item" key={Math.random()}>
                        <a className={`nav-link text-active-primary pb-4 ${checkActiveTab(tabItem)}`}
                           data-bs-toggle="tab"
                           href={`#${tabItem.id}`}>
                            {tabItem.title}
                        </a>
                    </li>
                ))
            }
            <li className="nav-item ms-auto">
                {navigatorActions}
            </li>
        </ul>
    )
}
