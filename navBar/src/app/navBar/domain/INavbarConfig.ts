export interface  INavbarConfig {
    userPosition:string,
    items:INavBarItem[],
    user:INavBarUser,
}

export interface INavBarItem{
    icon:string;
    name:string;
    child?:INavBarItem[];
}

export interface INavBarUser{
    name:string,
    img:string,
    logOutIcon:string,
    email:string
}