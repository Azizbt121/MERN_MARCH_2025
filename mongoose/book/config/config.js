import {connect} from 'mongoose';
import 'os';
import booksBD from '../models/book.models';

const Uri=os.getenv(URI)
const db= booksBD  


async function dbconnect(){
    try{
        await connect(Uri,{db})
        console.log('All good')
    }catch(error){
        console.log(error)
        throw(error)

    }
        
    
}


export default dbconnect;