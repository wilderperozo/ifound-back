import {Request, Response} from "express";
import PostModel from './../models/post.model';

export default class PostController {

    public add(req: Request, res: Response) {
        const post = new PostModel(req.body);
        post.save().then(r => {
            res.json({
                message: 'success'
            });
        })
    }

    public async list(req: Request, res: Response) {
        const posts = await PostModel.find({}).populate('author', '-password');
        res.json(posts);
    }
}
