import { Router } from "express";
import {getCart,createCart,updateCart} from "../Controllers/cartController";
import validateTokenMiddleware from "../middleware/authentication";

const router = Router();

//GET//

router.get("/getCart/:id", validateTokenMiddleware, getCart);

//GET//

//=========================================================================//

//POST//

router.post("/postCart/:prod_Id", createCart);

//POST//

//=========================================================================//

//UPDATE//

router.put("/postCart/", updateCart);

//UPDATE//



export default router;
