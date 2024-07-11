"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const favoritesController_1 = require("../Controllers/favoritesController");
const authentication_1 = __importDefault(require("../middleware/authentication"));
const router = (0, express_1.Router)();
//GET//
router.get('/getFavorites', authentication_1.default, favoritesController_1.getFavorites);
//GET//
//=========================================================================================//
//POST//
router.post('/addFavorites/:prodId', authentication_1.default, favoritesController_1.postFavorites);
//POST//
//=========================================================================================//
//DELETE//
router.delete('/deleteFavorites/:prodId', authentication_1.default, favoritesController_1.deleteFavorites);
//DELETE//
exports.default = router;
