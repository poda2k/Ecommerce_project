import { Router } from "express";
import {getAllProducts,getSingleProduct,createProduct,updateProduct,deleteProduct} from "../Controllers/productsController";
import validateTokenMiddleware from "../middleware/authentication";
import { checkIfAdmin } from "../middleware/checkIfAdmin";
const router = Router();

//=========================================================================================//

//GET//

router.get(
  "/allProducts",
  getAllProducts
);
router.get("/singleProduct/:id", getSingleProduct);

//GET//

//=========================================================================================//

//POST//

router.post("/createProducts",validateTokenMiddleware, checkIfAdmin, createProduct);

//POST//

//=========================================================================================//

//PUT//

router.put("/updateProducts/:id",validateTokenMiddleware, checkIfAdmin, updateProduct);

//PUT//

//=========================================================================================//

//DELETE//

router.delete("/deleteProduct/:id",validateTokenMiddleware, checkIfAdmin,deleteProduct);

//DELETE//

export default router;
