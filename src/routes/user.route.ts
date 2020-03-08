import express from "express";
import {UserController} from '../controllers/user.controller';

class UserRoute {
    public router: any;
    public controller = new UserController();

    constructor() {
        this.router = express.Router();
        this.add();
    }

    public add() {
        this.router.post('/', this.controller.add);
    }

    public edit() {
//
    }

    public delete() {
//
    }
}

export default new UserRoute().router;
