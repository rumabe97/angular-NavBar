import { INavbarConfig } from "./navBar/domain/INavbarConfig";

export const config: INavbarConfig = {
    userPosition: 'up',
    items: [
        {
            icon: 'dashboard',
            name: 'Dashboard'
        },
        {
            icon: 'person',
            name: 'Users'
        },
        {
            icon: 'email',
            name: 'Messages'
        },
        {
            icon: 'analytics',
            name: 'Analytics'
        },
        {
            icon: 'folder',
            name: 'File Manager'
        },
        {
            icon: 'shopping_cart',
            name: 'Order'
        },
        {
            icon: 'favorite_border',
            name: 'Saved'
        },
        {
            icon: 'settings',
            name: 'Settings'
        }
    ],
    user: null,
    logo: '',
    logoName: 'Staffit'
}
