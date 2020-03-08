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
        this.validateEmail();
    };

    auth(){
        this.router.post('/', this.controller.auth)
    }

    validateEmail(){
        this.router.post('/validate', this.controller.validate)
    }
}

export default new AuthRoute().router;
