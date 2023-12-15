import { Router } from "express";
import productHandler from "../Controllers/productsController";

const router = Router();

//=========================================================================================//

//GET//

router.get('/allProducts' , productHandler.getAllProducts) ;
router.get('/singleProduct/:id', productHandler.getSingleProduct) ;

//GET//

//=========================================================================================//

//POST//

router.post('/createProducts', productHandler.createProduct) ;
router.post('/createCategory' , productHandler.createCategory) ;

//POST//

//=========================================================================================//

//PUT//

router.put('/updateProducts/:id', productHandler.updateProduct);

//PUT//

//=========================================================================================//

//DELETE//

router.delete('/deleteProduct/:id', productHandler.deleteProduct);

//DELETE//



export default router ;