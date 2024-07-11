"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CategoryController_1 = require("../Controllers/CategoryController");
const checkIfAdmin_1 = require("../middleware/checkIfAdmin");
const authentication_1 = __importDefault(require("../middleware/authentication"));
const router = (0, express_1.Router)();
//GET//
router.get("/getAllCategories", CategoryController_1.getCategories);
router.get("/categoriesWithProduct", CategoryController_1.getSingleCategoryWithProduct);
//GET//
//=========================================================================//
//POST//
router.post("/createCategory", authentication_1.default, checkIfAdmin_1.checkIfAdmin, CategoryController_1.createCategory);
//POST//
//=========================================================================//
exports.default = router;
//DELETE//
// router.delete("/deleteCategory/:catId", CategoryHandler.deleteCategory);
//DELETE//
