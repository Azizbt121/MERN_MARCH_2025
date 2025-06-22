import express from 'express';
import 'os';
import dbconnect from './config/config';
import routers from './routes/route';



const app = express();
app.use(express.json());
app.use('/api/books',routers)
dbconnect();


const Port =os.getenv(port);


















app.listen(port,()=>{
    console.log('congrats you launched the server')
})