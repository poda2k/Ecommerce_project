import { Request,Response,NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export const checkIfAdmin = (req:any , res:Response , next: NextFunction)=>{
    
    const header = req.get('Authorization');
    const token = header.replace('Bearer ', '');
    console.log("tokennnnn =>>>>>>>>>>>"+token) ;
    try{
        const decoded : any = jwt.verify(token,'mysecrettoken');
        if(decoded){
            if(decoded.isAdmin===true){
                next();
            }
            res.json({message:"unauthorized"});
        }

    }catch(error){
        console.log('error in middleware checkIfAdmin: ' + error)
    }
}