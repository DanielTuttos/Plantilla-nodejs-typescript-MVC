import { Schema, model, Document } from 'mongoose';

import uniqueValidator from 'mongoose-unique-validator';



const usuarioSchema = new Schema({
    nombre: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    imagePath: { type: String }
});

interface IUsuario extends Document {
    nombre: string,
    correo: string,
    imagePath: string
}

usuarioSchema.plugin(uniqueValidator, { message: 'El {PATH} debe de ser unico' });

export default model<IUsuario>('Usuario', usuarioSchema)
