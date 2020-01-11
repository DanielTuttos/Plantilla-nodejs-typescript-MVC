import {Router} from 'express';


import {PostUsuario, GetUsuario} from '../controllers/usuario.controller'



const router = Router();// enrutador

router.route('/usuario')
    .post(PostUsuario)
    .get(GetUsuario)

export default router;
