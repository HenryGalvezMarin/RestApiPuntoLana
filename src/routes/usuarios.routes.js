import { Router } from "express";
import { methods } from "../controllers/usuario.controller";

const router = Router();

router.get('/',  methods.getUsuarios);
router.get('/:id',  methods.getUsuario);
router.post('/', methods.addUsuario);
router.post('/login', methods.loginUsuario);

export default router;