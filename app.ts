import express from 'express' ;
import * as dotenv from 'dotenv';

dotenv.config() ;

const app = express() ;

const port = process.env.PORT || 3000;



app.listen(port,()=>{
    console.log('listening on port : '+port) ;
}) ;