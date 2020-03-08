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

}
