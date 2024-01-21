import { Router } from "express";
import {getCategories,getSingleCategoryWithProduct,createCategory} from "../Controllers/CategoryController";

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

router.post("/createCategory", createCategory);

//POST//

//=========================================================================//

export default router;
//DELETE//

// router.delete("/deleteCategory/:catId", CategoryHandler.deleteCategory);

//DELETE//
