import { Router } from "express";
import {methods as watsonController} from "./../controllers/watson.controller.js";

const router = Router();

router.get('/session',  watsonController.createSession);
router.post('/message', watsonController.sendMessage)

export default router;