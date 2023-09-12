export interface  INavbarConfig {
    userPosition:string,
    items:INavBarItem[],
    user:INavBarUser,
    logo:string;
    logoName:string;
}

export interface INavBarItem{
    icon:string;
    name:string;
    childern?:INavBarItem[];
    tooltip:boolean;
    route?:string;
}

export interface INavBarUser{
    name:string,
    img:string,
    logOutIcon:string,
    email:string
    route?:string;
}