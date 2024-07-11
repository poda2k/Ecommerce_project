import { Router } from "express";
import {getFavorites,postFavorites,deleteFavorites} from "../Controllers/favoritesController";
import authentications from "../middleware/authentication";

const router = Router();


//GET//

router.get('/getFavorites' ,authentications, getFavorites);

//GET//

//=========================================================================================//

//POST//

router.post('/addFavorites/:prodId' ,authentications, postFavorites ) ;

//POST//

//=========================================================================================//

//DELETE//

router.delete('/deleteFavorites/:prodId' ,authentications, deleteFavorites);

//DELETE//



export default router ;