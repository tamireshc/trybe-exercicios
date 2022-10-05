import connection from "./connection";
import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import {User} from '../interfaces/userInterface'

const getAllUsers =async ():Promise<User[]>=>{
    const [users] = await connection.execute('SELECT * from TypeScriptExpress.Users')
    return users as User[]
}

const getUser =async (id:number):Promise<User[]>=>{
    const [user] = await connection.execute<User[] & RowDataPacket[]>('SELECT * from TypeScriptExpress.Users WHERE id =?',[id])
    return user 
}

const getUserByEmail = async(email:string):Promise<User[]>=>{
    const [user] = await connection.execute<User[] & RowDataPacket[]>('SELECT * from TypeScriptExpress.Users WHERE email =?',[email])
    return user
}
const createUser =async(user:User)=>{
    const [{insertId}] = await connection.execute<ResultSetHeader>(
        'INSERT INTO TypeScriptExpress.Users (name, email, password) VALUES(?,?,?)',[user.name, user.email, user.password]
    )
    return {id:insertId, ...user}
}

const updateUser =async(id:number, user:User):Promise<User>=>{
    const {name, email, password} = user
    await connection.execute(
        'UPDATE TypeScriptExpress.Users SET name=?, email=?, password=? WHERE id=?',
        [name, email, password, id]
    )
    return {id, ...user}
}

const deleteUser =async(id:number):Promise<void> =>{
    await connection.execute(
        'DELETE FROM TypeScriptExpress.Users WHERE id=?',[id]
    )

}


export ={
    getAllUsers,
    getUser,
    createUser,
    getUserByEmail,
    updateUser,
    deleteUser,
}