import { INavbarConfig } from "./navBar/domain/INavbarConfig";

export const config: INavbarConfig = {
    userPosition: 'up',
    items: [
        {
            icon: 'dashboard',
            name: 'Dashboard',
            tooltip:false,
        },
        {
            icon: 'person',
            name: 'Users',
            tooltip:false,
        },
        {
            icon: 'email',
            name: 'Messages',
            tooltip:false,
        },
        {
            icon: 'analytics',
            name: 'Analytics',
            tooltip:false,
        },
        {
            icon: 'folder',
            name: 'File Manager',
            tooltip:false,
        },
        {
            icon: 'shopping_cart',
            name: 'Order',
            tooltip:false,
        },
        {
            icon: 'favorite_border',
            name: 'Saved',
            tooltip:false,
        },
        {
            icon: 'settings',
            name: 'Settings',
            tooltip:false,
        }
    ],
    user: null,
    logo: '',
    logoName: 'Staffit'
}
