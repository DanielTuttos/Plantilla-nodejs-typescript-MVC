


import { Request, Response } from 'express'
import Usuario from '../models/usuario.models';
import { version } from 'mongoose';


export const PostUsuario = (req: Request, res: Response) => {

    let body = req.body;

    const usuario = new Usuario({
        nombre: body.nombre,
        correo: body.correo
    });

    usuario.save((err, usuarioGuardado) => {
        if (err) {
            return res.json({
                ok: false,
                Error: err
            });
        }

        return res.json({
            ok: true,
            usuario: usuarioGuardado
        });
    });
}

export const GetUsuario = (req: Request, res: Response) => {

    Usuario.find({}, (err, usuarios) => {
        if (err) {
            return res.json({
                ok: false,
                Error: err
            });
        }

        return res.json({
            ok: true,
            usuarios: usuarios
        });
    });
}