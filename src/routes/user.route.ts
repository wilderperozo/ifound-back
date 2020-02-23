import express from "express";
import {UserController} from '../controllers/user.controller';

class UserRoute {
    public express: any;
    public route: any;
    public controller = new UserController();

    constructor() {
        this.express = express;
        this.route = this.express.Router();
        this.add();
    }

    public add() {
        this.route.post('/', this.controller.add);
        console.log('llego aqui?')
    }

    public edit() {
//
    }

    public delete() {
//
    }
}

export default new UserRoute().route;
