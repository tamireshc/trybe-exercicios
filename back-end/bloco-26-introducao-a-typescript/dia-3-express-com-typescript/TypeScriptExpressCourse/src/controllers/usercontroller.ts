import userService from '../services/userService'
import {User, UserEmpty} from '../interfaces/userInterface'

import  { Request, Response } from 'express';

const getAllUsers = async(req:Request, res:Response):Promise<User[]| unknown>=>{
    try{
        const users = await userService.getAllUsers()
        return res.status(200).json(users)

    }catch(error:any){
        return res.status(500).json(error.message) as unknown
    }

}

const getUser =async(req:Request, res:Response)=>{
    const {id} = req.params

    try{
        const {type, message}  = await userService.getUser(Number(id))
        if(type){
            return res.status(400).json(message)
        }
        return res.status(200).json(message)

    }catch(error:any){
        return res.status(500).json(error.message) 
    }
}

const createUser = async(req:Request, res:Response)=>{
    const user = req.body

    try{
        const {type, message}  = await userService.createUser(user)
        if(type){
            return res.status(400).json(message)
        }
        return res.status(200).json(message)

    }catch(error:any){
        return res.status(500).json(error.message) 
    }
}

const updateUser = async (req:Request, res:Response)=>{
    const {id} = req.params
    const user = req.body
    try{
        const {type, message}  = await userService.updateUser(Number(id), user)
        if(type){
            return res.status(400).json(message)
        }
        return res.status(200).json(message)

    }catch(error:any){
        return res.status(500).json(error.message) 
    }

}

const deleteUser =async (req:Request, res:Response)=>{
    const {id} = req.params

    try{
         await userService.deleteUser(Number(id))
        
        return res.status(200).json('user was delete')

    }catch(error:any){
        return res.status(500).json(error.message) 
    }
}


export ={
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
}