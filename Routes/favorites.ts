import { Router } from "express";
import favorites from "../Controllers/favorites";

const router = Router();


//GET//

router.get('/getFavorites' , favorites.getFavorites);

//GET//



//POST//

router.post('/addFavorites' , favorites.postFavorites ) ;

//POST//