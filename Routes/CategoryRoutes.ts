import { Router } from "express";
import {getCategories,getSingleCategoryWithProduct,createCategory} from "../Controllers/CategoryController";
import { checkIfAdmin } from "../middleware/checkIfAdmin";
import authentication from "../middleware/authentication";

const router = Router();

//GET//

router.get("/getAllCategories", getCategories);

router.get(
  "/categoriesWithProduct",
  getSingleCategoryWithProduct
);

//GET//

//=========================================================================//

//POST//

router.post("/createCategory",authentication, checkIfAdmin ,createCategory);

//POST//

//=========================================================================//

export default router;
//DELETE//

// router.delete("/deleteCategory/:catId", CategoryHandler.deleteCategory);

//DELETE//
