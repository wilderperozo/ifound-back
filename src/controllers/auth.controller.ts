import {Request, Response} from "express";
import UserModel from '../models/user.model';


export class AuthController {
    async auth(req: Request, res: Response){
        const user = (await UserModel.findOne({email: req.body.email}))
        if(user){
            user.validatePassword(req.body.password, (isValid: boolean) =>{
                if(isValid){
                    const userJson = user.toJSON();
                    delete userJson.password;
                    return res.json(userJson);
                }else{
                    return res.status(404).json({
                        message: 'User not found'
                    })
                }
            })
        }
    }

    async validate(req: Request, res: Response){
        const user = (await UserModel.findOne({email: req.body})).toJSON();
        delete user.password;
        if(user)
            return res.status(200).json(user);
        else
            return res.status(404).json({
                message: 'User not found'
            });
    }

}
