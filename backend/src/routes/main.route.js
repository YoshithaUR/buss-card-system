import { Router } from "express";
import firstMiddleware from "../middleware/middleware.js";
import { registerController } from "../controller/main.controller.js";

const mainRoute = Router();

mainRoute.post('/register', firstMiddleware, registerController)

export default mainRoute;