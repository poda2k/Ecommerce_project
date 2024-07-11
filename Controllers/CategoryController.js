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
exports.getSingleCategoryWithProduct = exports.getCategories = exports.createCategory = void 0;
const Categories_1 = __importDefault(require("../Models/Categories"));
const Products_1 = __importDefault(require("../Models/Products"));
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryName = req.body.categoryName;
    try {
        const newCategory = yield Categories_1.default.create({
            categoryName: categoryName,
        });
        res.json({ massage: "category created", category: newCategory });
    }
    catch (e) {
        console.log("error creating category");
        throw e;
    }
});
exports.createCategory = createCategory;
const getCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allCategories = yield Categories_1.default.findAll();
        if (allCategories.length > 0) {
            res.json({ message: "categories", categories: allCategories });
        }
        res.json({ message: "no categories found" });
    }
    catch (e) {
        console.log("error getting categories");
        throw e;
    }
});
exports.getCategories = getCategories;
const getSingleCategoryWithProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const catId = req.params.catId;
    try {
        const productWithCategory = yield Products_1.default.findAll({
            where: {
                cat_id: catId,
            },
        });
        if (productWithCategory) {
            res.json({
                message: "products with category found",
                products: productWithCategory,
            });
        }
        res.json({ message: "cant find product with category" });
    }
    catch (e) {
        console.log("error in get product with category");
        throw e;
    }
});
exports.getSingleCategoryWithProduct = getSingleCategoryWithProduct;
