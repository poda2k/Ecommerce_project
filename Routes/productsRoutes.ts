import { Router } from "express";
import productHandler from "../Controllers/productsController";
import validateTokenMiddleware from "../middleware/authentication";
const router = Router();

//=========================================================================================//

//GET//

router.get(
  "/allProducts",
  validateTokenMiddleware,
  productHandler.getAllProducts
);
router.get("/singleProduct/:id", productHandler.getSingleProduct);

//GET//

//=========================================================================================//

//POST//

router.post("/createProducts", productHandler.createProduct);

//POST//

//=========================================================================================//

//PUT//

router.put("/updateProducts/:id", productHandler.updateProduct);

//PUT//

//=========================================================================================//

//DELETE//

router.delete("/deleteProduct/:id", productHandler.deleteProduct);

//DELETE//

export default router;
