import express from 'express';

import morgan from 'morgan';


// import path from 'path';


const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//midlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//importar las rutas
import rutaUsuario from './routes/usuario.routes';

//routes
app.use('/api/usuario', rutaUsuario);

// configuracion de carpeta publica para subir archivos
// app.use('/uploads', express.static(path.resolve('uploads')));


export default app;