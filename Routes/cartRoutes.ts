import { Router } from "express";
import cartController from "../Controllers/cartController";
import validateTokenMiddleware from "../middleware/authentication";

const router = Router();

//GET//

router.get("/getCart/:id", validateTokenMiddleware, cartController.getCart);

//GET//

//=========================================================================//

//POST//

router.post("/postCart/:prod_Id", cartController.createCart);

router.put("/postCart/", cartController.update);

//POST//

export default router;
