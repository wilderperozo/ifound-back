import {Request, Response} from 'express';
import UserModel from './../models/user.model';

export class UserController {
    public async add(req: Request, res: Response) {
        const userModel = new UserModel(req.body);
        await userModel.toHash(req.body.password, (pwd: string) =>{
            userModel.password = pwd;
        });
        userModel.save().then(user => {
            res.json({message: 'Success'});
        });

    }
}
