"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cartController_1 = require("../Controllers/cartController");
const authentication_1 = __importDefault(require("../middleware/authentication"));
const router = (0, express_1.Router)();
//GET//
router.get("/getCart/:id", authentication_1.default, cartController_1.getCart);
//GET//
//=========================================================================//
//POST//
router.post("/postCart/:prod_Id", authentication_1.default, cartController_1.createCart);
//POST//
//=========================================================================//
//UPDATE//
router.put("/postCart/", authentication_1.default, cartController_1.updateCart);
//UPDATE//
exports.default = router;
