export interface User {
    id?: number,
    name:string,
    email:string,
    password:string,
}

export interface Userservice {
    type:null,
    message:User,
}

export interface UserEmpty {
    type:string,
    message:string,
}

export interface ArrayUserEmpty{
    
}


