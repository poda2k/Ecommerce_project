"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFavorites = exports.getFavorites = exports.postFavorites = void 0;
const favorites_1 = __importDefault(require("../Models/favorites"));
const postFavorites = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // waiting for JWT ..//
    const userId = req['userId'];
    const prodId = req.params.prodId;
    try {
        const findProduct = yield favorites_1.default.findOne({
            where: {
                product_id: prodId,
                user_id: userId
            }
        });
        if (findProduct) {
            res.json({ message: " product already in favorites " });
        }
        else {
            const newFavorite = yield favorites_1.default.create({
                // waiting for JWT ..//
                userId: userId,
                product_id: prodId,
                is_purchased: false
            });
            res.json({ favorite: newFavorite, message: 'Favorite created successfully' });
        }
    }
    catch (error) {
        console.log("error in create favorites" + error);
        throw error;
    }
});
exports.postFavorites = postFavorites;
const getFavorites = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req['userId'];
    try {
        const myFavorites = yield favorites_1.default.findAll({
            where: {
                user_id: userId
            }
        });
        if (myFavorites == null) {
            res.json({ message: "no favorites found" });
        }
        res.json({ myFavorites: myFavorites, message: "favorite found successfully" });
    }
    catch (error) {
        console.log("error in get favorites" + error);
        throw error;
    }
});
exports.getFavorites = getFavorites;
const deleteFavorites = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const prodId = req.params.prodId;
    try {
        const deleteFavorites = yield favorites_1.default.destroy({
            where: {
                product_id: prodId
            }
        });
        res.json({ message: "favorite deleted successfully" });
    }
    catch (error) {
        console.log("error in delete favorites" + error);
        throw error;
    }
});
exports.deleteFavorites = deleteFavorites;
