import {connect} from 'mongoose';






export async function startConnection(){
    await connect('mongodb://localhost/hello_world', {
        useNewUrlParser:true,
        useUnifiedTopology: true,
        useFindAndModify:false,
        useCreateIndex:true
    });
    console.log('base de datos conectada');
}
