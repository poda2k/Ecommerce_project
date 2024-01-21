import { Request, Response } from "express";
import favorites from "../Models/favorites";



export const postFavorites = async (req: Request, res: Response) => {
    // waiting for JWT ..//
    // const userId = req.userId ;  user id extracted from the token .
    const prodId = req.params.prodId;

    try {

        const findProduct = await favorites.findOne({
            where: {
                product_id: prodId,
                // waiting for JWT ..//
                // user_id : req.userId
            }
        })
        if (findProduct) {
            res.json({ message: " product already in favorites " });
        } else {
            const newFavorite = await favorites.create({
                // waiting for JWT ..//
                // userId : req.userId,
                product_id: prodId,
                is_purchased: false
            });


            res.json({ favorite: newFavorite, message: 'Favorite created successfully' });
        }


    } catch (error) {
        console.log("error in create favorites" + error);
        throw error;
    }


}

export const getFavorites = async (req: Request, res: Response) => {

    //const userId = req.userId ;
    try {
        const myFavorites = await favorites.findAll({
            where: {
                // waiting for JWT ..//
                // user_id : req.userId
            }
        })
        if (myFavorites == null) {
            res.json({ message: "no favorites found" });
        }
        res.json({ myFavorites: myFavorites, message: "favorite found successfully" });
    } catch (error) {
        console.log("error in get favorites" + error);
        throw error;
    }
}
export const deleteFavorites = async (req: Request, res: Response) => {
    const prodId = req.params.prodId;

    try {
        const deleteFavorites = await favorites.destroy({
            where: {
                product_id: prodId
            }
        });

        res.json({ message: "favorite deleted successfully" });

    } catch (error) {
        console.log("error in delete favorites" + error);
        throw error;
    }
}


