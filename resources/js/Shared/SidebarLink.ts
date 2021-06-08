import {
    AccountsIcon, BriefcaseIcon,
    ChatsIcon,
    DashboardIcon,
    ProductsIcon,
    SalesIcon,
    ShopsIcon,
    UsersIcon, YoutubeIcon,
} from "./Icons/svg";
import {
    MenuType,
    SideNavLinkType,
} from "./Menu";
import route from "ziggy-js";

/**
 * Sidebar links urls are defined here, that's because we want to track
 * active link to determine which element to set active on the sidebar during
 * page navigation
 * */
export const DASHBOARD: SideNavLinkType = {
    parent: "/dashboard",
    submenus: {},
};

export const USERS: SideNavLinkType = {
    parent: "/users",
    submenus: {
        employees: "/employees",
        probation: '/probation'
    },
};

export const PRODUCTS: SideNavLinkType = {
    parent: "/products",
    submenus: {
        management: "/management",
    },
};

/**
 * If a section is a navigation link, it's id should start with a link-
 * if it is a separator, or heading it should start with a heading-
 *
 * Add pound(#) to any link attribute in case you want to add an item without
 * a link, eg adding a separator, this will help to avoid multiple active items
 * bug on the side navigation bar.
 * */
export const dropdownMenus: Array<MenuType> = [
    {
        id: "link-dashboard",
        name: "Dashboard",
        Icon: DashboardIcon,
        type: "solo",
        subMenus: [],
        link: DASHBOARD.parent,
    },
    {
        id: "heading-apps",
        name: "Apps",
        Icon: ShopsIcon,
        type: "separator",
        subMenus: [],
        link: "#",
    },
    {
        id: "link-users",
        name: "Users",
        Icon: UsersIcon,
        type: "dropdown",
        subMenus: [
            { id: "1", name: "Users", link: "#" },
            { id: "2", name: "Roles", link:  "#"},
            { id: "2", name: "Companies", link:  route('companies.index')},
        ],
        link: USERS.parent,
    },
    {
        id: "link-employees",
        name: "Employees",
        Icon: BriefcaseIcon,
        type: "dropdown",
        subMenus: [
            { id: "1", name: "Employees", link: USERS.parent + USERS.submenus.employees },
            { id: "2", name: "Attendance", link:  "#"},
            { id: "3", name: "Leave Management", link:  "#"},
            { id: "4", name: "Contracts", link:  "#"},
        ],
        link: USERS.parent,
    },
    {
        id: "link-sales",
        name: "Sales",
        Icon: SalesIcon,
        type: "dropdown",
        subMenus: [
            { id: "2", name: "Reports", link:  "#"},
            { id: "3", name: "Incentives", link:  "#"},
            { id: "4", name: "Gift Items", link:  "#"},
        ],
        link: "#",
    },
    {
        id: "link-stores",
        name: "Stores",
        Icon: ShopsIcon,
        type: "dropdown",
        subMenus: [
            { id: "2", name: "Shops", link:  "#"},
            { id: "3", name: "States", link:  "#"},
            { id: "4", name: "Regions", link:  "#"},
        ],
        link: "#",
    },
    {
        id: "link-products",
        name: "Inventory",
        Icon: ProductsIcon,
        type: "dropdown",
        subMenus: [
            { id: "1", name: "products", link: PRODUCTS.parent + PRODUCTS.submenus.management },
            { id: "2", name: "Catalogue", link:  "#"},
            { id: "3", name: "Vendors", link:  "#"},
            { id: "4", name: "Warehouses", link:  "#"},
        ],
        link: PRODUCTS.parent,
    },
    {
        id: "link-e-learning",
        name: "E-Learning",
        Icon: YoutubeIcon,
        type: "dropdown",
        subMenus: [
            { id: "2", name: "Resources", link:  "#"},
            { id: "3", name: "Assessments", link:  "#"},
            { id: "4", name: "Reports", link:  "#"},
        ],
        link: "#",
    },
    {
        id: "link-account",
        name: "Account",
        Icon: AccountsIcon,
        type: "dropdown",
        subMenus: [
            { id: "2", name: "Profile", link:  "#"},
            { id: "3", name: "Security", link:  "#"},
        ],
        link: "#",
    },
];
