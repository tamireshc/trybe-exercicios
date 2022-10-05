import userModel from '../models/User'
import {User, Userservice, UserEmpty, ArrayUserEmpty} from '../interfaces/userInterface'

const getAllUsers =async():Promise<User[]>=>{
    const users = await userModel.getAllUsers()
    return users as User[]
}

const getUser =async (id:number):Promise<Userservice| UserEmpty >=>{
    const user: User[] = await userModel.getUser(id)
    if(!user){
        return {type: 'User_not_found', message: 'user not found'}
    }
    
    return {type: null, message: user[0]}

}

const createUser =async(user:User):Promise<Userservice| UserEmpty >=>{
    const hasUser: User[] = await userModel.getUserByEmail(user.email)
    console.log(hasUser)
    if(hasUser[0]){
        return {type: 'User_alredy_exists', message: 'user alredy exists'}
    }
    const newUser = await userModel.createUser(user)
    return {type: null, message: newUser}
}

const updateUser = async (id:number, user:User):Promise<Userservice>=>{
    const userAtt = await userModel.updateUser(id, user)
    return {type: null, message: userAtt}
}

const deleteUser =async (id:number)=>{
    await userModel.deleteUser(id)

}

export ={
    getAllUsers,
    getUser,
    createUser, 
    updateUser,
    deleteUser,
}