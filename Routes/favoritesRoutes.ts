import { Router } from "express";
import favorites from "../Controllers/favoritesController";

const router = Router();


//GET//

router.get('/getFavorites' , favorites.getFavorites);

//GET//

//=========================================================================================//

//POST//

router.post('/addFavorites/:prodId' , favorites.postFavorites ) ;

//POST//

//=========================================================================================//

//DELETE//

router.delete('/deleteFavorites/:prodId' , favorites.deleteFavorites);

//DELETE//



export default router ;