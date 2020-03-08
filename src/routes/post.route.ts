import PostController from './../controllers/post.controller';
import express, {Express, Router} from "express";


class PostRoute {
    express: Express;
    router: Router
    controller: PostController;

    constructor() {
        this.router = express.Router();
        this.controller = new PostController();
        this.routes();
    }

    routes() {
        this.add();
        this.list()
    }

    add() {
        this.router.post('/', this.controller.add)
    }

    list() {
        this.router.get('/', this.controller.list);
    }
}

export default new PostRoute().router;
