import express from 'express';

import morgan from 'morgan';

import indexRoutes from './routes/index.routes';

// import path from 'path';


const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//midlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api', indexRoutes);

// configuracion de carpeta publica para subir archivos
// app.use('/uploads', express.static(path.resolve('uploads')));


export default app;