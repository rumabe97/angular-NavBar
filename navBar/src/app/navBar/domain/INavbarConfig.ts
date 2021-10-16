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
    child?:INavBarItem[];
    tooltip:boolean;
}

export interface INavBarUser{
    name:string,
    img:string,
    logOutIcon:string,
    email:string
}