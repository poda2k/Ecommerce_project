import { Router } from "express";
import productHandler from "../Controllers/productsController";

const router = Router();

//GET//

router.get('/allProducts' , productHandler.getAllProducts) ;

//GET//


//POST//

router.post('/createProducts', productHandler.createProduct) ;
router.post('/createCategory' , productHandler.createCategory) ;

//POST//



export default router ;