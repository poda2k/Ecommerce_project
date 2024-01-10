import { Request , Response } from "express";
import favorites from "../Models/favorites";

class favoritesClass {

    static async postFavorites(req:Request, res:Response): Promise<void> {

        // userId extracted from the token which we still waiting for el bashmohands omar 3shan y7otha ....
        //const userId = req.userId ;
        const prodId = req.params.prodId ;
        try{
            const newFavorite = await favorites.create({
              //  user_id : userId ,
                product_id : prodId ,
                is_purchased : false
            });

            res.json({favorite: newFavorite , message: 'Favorite created successfully'}) ;
        }catch(error){
            console.log("error in create favorites" + error) ;
            throw error ;
        }
      

    }
}

export default favoritesClass ;