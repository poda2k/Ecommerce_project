"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productsController_1 = require("../Controllers/productsController");
const authentication_1 = __importDefault(require("../middleware/authentication"));
const checkIfAdmin_1 = require("../middleware/checkIfAdmin");
const router = (0, express_1.Router)();
//=========================================================================================//
//GET//
router.get("/allProducts", productsController_1.getAllProducts);
router.get("/singleProduct/:id", productsController_1.getSingleProduct);
//GET//
//=========================================================================================//
//POST//
router.post("/createProducts", authentication_1.default, checkIfAdmin_1.checkIfAdmin, productsController_1.createProduct);
//POST//
//=========================================================================================//
//PUT//
router.put("/updateProducts/:id", authentication_1.default, checkIfAdmin_1.checkIfAdmin, productsController_1.updateProduct);
//PUT//
//=========================================================================================//
//DELETE//
router.delete("/deleteProduct/:id", authentication_1.default, checkIfAdmin_1.checkIfAdmin, productsController_1.deleteProduct);
//DELETE//
exports.default = router;
