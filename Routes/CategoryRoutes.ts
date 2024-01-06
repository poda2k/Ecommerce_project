import { Router } from "express";
import CategoryHandler from "../Controllers/CategoryController";

const router = Router();

//GET//

router.get('/getAllCategories' , CategoryHandler.GetCategories);
router.get('/categoriesWithProduct' , CategoryHandler.getSingleCategoryWithProduct);

//GET//

//=========================================================================//

//POST//

router.post('/createCategory' , CategoryHandler.createCategory) ;

//POST//

//=========================================================================//


export default router ;