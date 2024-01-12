import { Router } from "express";
import cartController from '../Controllers/cartController';

const router = Router();



//GET//

router.get('/getCart',cartController.getCart);

//GET//

//=========================================================================//

//POST//

router.post('/postCart/:prod_Id' , cartController.createCart);

//POST//



export default router ;