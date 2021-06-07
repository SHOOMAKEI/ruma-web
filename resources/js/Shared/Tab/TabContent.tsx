import React from "react";
import {TabItemType} from "./TabNavigator";

interface Props {
    tabs: Array<TabItemType>;
}

export default ({tabs}: Props) => {
    function checkActiveTab(tab: TabItemType): string {
        if (tabs.indexOf(tab) === 0)
            return 'active show'

        return ''
    }

    return (
        <div className="tab-content" id="myTabContent">
            {
                tabs.map(tabItem => (
                    <div className={`tab-pane fade ${checkActiveTab(tabItem)}`} id={tabItem.id} role="tabpanel" key={Math.random()}>
                        {tabItem.component}
                    </div>
                ))
            }
        </div>
    )
}
