import React, {useState} from "react";
import {InertiaLink} from "@inertiajs/inertia-react";
import route from "ziggy-js";

export interface SubmenuType {
    id: string;
    name: string;
    link: string;
}

export interface MenuType {
    id: string;
    name: string;
    Icon: React.FunctionComponent;
    link: string;
    type: 'dropdown' | 'solo' | 'separator';
    subMenus: Array<SubmenuType>; // pass an empty array in case the menu is a solo menu
}

export interface SideNavLinkType {
    parent: string;
    submenus: any;
}


interface Props {
    menu: MenuType;
}

export default function Menu({menu}: Props) {
    const {Icon} = menu;
    const [show, setShow] = useState(false)

    function checkActiveLink(link: string): string {
        if (route().current(link + '*'))
            return 'active'

        return ''
    }

    function checkActiveMenuParent(link: string) {
        /**
         * This is for sidebar dropdown menus, it determines which
         * sidebar dropdown menu is active
         * */
        if (route().current(link + '*'))
            return 'here show'

        return ''
    }

    if (menu.type === 'solo') {
        return (
            <div className="menu-item" key={menu.id}>
                    <InertiaLink className={`menu-link ${checkActiveLink(menu.link)}`} href={menu.link}>
                        <span className="menu-icon">
                            <Icon />
                        </span>
                        <span className="menu-title">{menu.name}</span>
                    </InertiaLink>
            </div>
        )
    }

    if (menu.type === 'separator') {
        return (
            <div className="menu-item" key={menu.id}>
                <div className="menu-content pt-8 pb-2">
                    <span className="menu-section text-muted text-uppercase fs-8 ls-1">{menu.name}</span>
                </div>
            </div>
        )
    }



    return (
        <div data-kt-menu-trigger="click" onClick={ e => setShow(!show)} className={`menu-item menu-accordion ${checkActiveMenuParent(menu.link)}  ${show?'show':''} `} key={menu.id}>
            <span className="menu-link" >
                <span className="menu-icon">
                    <Icon />
                </span>
                <span className="menu-title">{menu.name}</span>
                <span className="menu-arrow"/>
            </span>
            <div className={`menu-sub menu-sub-accordion ${show?'show':''}`}>
                {
                    menu.subMenus.map((submenu: { id: React.Key | null | undefined; link: string; name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
                        <div className="menu-item" key={Math.random()}>
                            <InertiaLink className={`menu-link ${checkActiveLink(submenu.link)}`} href={submenu.link}>
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"/>
                                </span>
                                <span className="menu-title">{submenu.name}</span>
                            </InertiaLink>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
