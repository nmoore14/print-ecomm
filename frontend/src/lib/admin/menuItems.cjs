import { Home, ClipboardList, Users, Cog } from 'svelte-hero-icons';

const menuItems = [
    {
        "title": "Home",
        "type": "single",
        "path": "/admin",
        "icon": Home,
        "submenu": [],
    },
    {
        "title": "DIVIDER",
        "type": "DIVIDER",
    },
    {
        "title": "Products",
        "type": "menu",
        "path": "/admin/products",
        "icon": ClipboardList,
        "submenu": [
            {
                "title": "Products",
                "path": "/admin/products/productsList",
                "icon": ClipboardList,
            },
            {
                "title": "Settings",
            }
        ]
    },
    {
        "title": "Customers",
        "type": "menu",
        "path": "",
        "icon": Users,
        "submenu": [
            {
                "title": "Customer Groups",
            },
            {
                "title": "Cusotmers",
            },
        ]
    },
    {
        "title": "DIVIDER",
        "type": "DIVIDER",
    },
    {
        "title": "Settings",
        "type": "menu",
        "path": "",
        "icon": Cog,
        "submenu": [
            {
                "title": "Employees",
            },
            {
                "title": "Site",
            },
            {
                "title": "Storefront",
            },
        ],
    },
]

export default menuItems;
