import { Router } from "express";
import {getAllProducts,getSingleProduct,createProduct,updateProduct,deleteProduct} from "../Controllers/productsController";
import validateTokenMiddleware from "../middleware/authentication";
const router = Router();

//=========================================================================================//

//GET//

router.get(
  "/allProducts",
  validateTokenMiddleware,
  getAllProducts
);
router.get("/singleProduct/:id", getSingleProduct);

//GET//

//=========================================================================================//

//POST//

router.post("/createProducts", createProduct);

//POST//

//=========================================================================================//

//PUT//

router.put("/updateProducts/:id", updateProduct);

//PUT//

//=========================================================================================//

//DELETE//

router.delete("/deleteProduct/:id",deleteProduct);

//DELETE//

export default router;
