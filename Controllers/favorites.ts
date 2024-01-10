import { Request , Response } from "express";
import favorites from "../Models/favorites";

class favoritesClass {

    static async postFavorites(req:Request, res:Response): Promise<void> {

        const userId = req.params.userId ;
        const prodId = req.params.prodId ;
        try{
            const newFavorite = await favorites.create({
                user_id : userId ,
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