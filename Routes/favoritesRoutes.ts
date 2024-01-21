import { Router } from "express";
import {getFavorites,postFavorites,deleteFavorites} from "../Controllers/favoritesController";

const router = Router();


//GET//

router.get('/getFavorites' , getFavorites);

//GET//

//=========================================================================================//

//POST//

router.post('/addFavorites/:prodId' , postFavorites ) ;

//POST//

//=========================================================================================//

//DELETE//

router.delete('/deleteFavorites/:prodId' , deleteFavorites);

//DELETE//



export default router ;