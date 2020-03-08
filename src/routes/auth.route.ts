import express, {Express, Router} from "express";
import {AuthController} from "../controllers/auth.controller";


class AuthRoute{

    router: Router;
    controller: AuthController;

    constructor() {
        this.router = express.Router();
        this.controller = new AuthController();
        this.routes();
    }

    routes(){
        this.auth();
    };

    auth(){
        this.router.post('/', this.controller.auth)
    }
}

export default new AuthRoute().router;
