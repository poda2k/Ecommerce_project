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
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getSingleProduct = exports.getAllProducts = void 0;
const Products_1 = __importDefault(require("../Models/Products"));
const Categories_1 = __importDefault(require("../Models/Categories"));
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allProducts = yield Products_1.default.findAll();
    if (allProducts.length <= 0) {
        res.json({ message: "no products found" });
    }
    else {
        res.json({ products: allProducts });
    }
});
exports.getAllProducts = getAllProducts;
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const prodId = req.params.id;
    try {
        const getOneProduct = yield Products_1.default.findOne({
            where: {
                id: prodId,
            },
        });
        res.json({ message: "product found", products: getOneProduct });
    }
    catch (e) {
        console.log("error in Single Product");
        throw e;
    }
});
exports.getSingleProduct = getSingleProduct;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { prodName, description, imageUrl, price, quantity, color, categoryName } = req.body;
    const admin_id = req['userId'];
    // checks for category if exists in category table.
    const getCategory = yield Categories_1.default.findOne({
        where: {
            categoryName: categoryName,
        },
    });
    console.log(categoryName);
    if (getCategory == null) {
        res.json({ message: "no categories found" });
    }
    else {
        try {
            console.log("created");
            const newProduct = yield Products_1.default.create({
                cat_id: getCategory.id,
                name: prodName,
                description: description,
                price: price,
                quantity: quantity,
                imageUrl: imageUrl,
                admin_id: admin_id,
                color: color,
            });
            res.json({
                message: "product created successful",
                product: newProduct,
            });
        }
        catch (e) {
            console.log("error creating product");
            throw e;
        }
    }
});
exports.createProduct = createProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const prodId = req.params.id;
    const { prodName, description, imageUrl, price, quantity, color, categoryName, } = req.body;
    // getting the category info //
    const category = yield Categories_1.default.findOne({
        where: {
            categoryName: categoryName,
        },
    });
    if (categoryName == null) {
        res.json({ message: "category not found" });
    }
    else if (categoryName != null) {
        try {
            const updated = yield Products_1.default.update({
                cat_id: category.id,
                name: prodName,
                description: description,
                price: price,
                quantity: quantity,
                imageUrl: imageUrl,
                color: color,
            }, {
                where: {
                    id: prodId,
                },
            });
            res.json({ message: "product updated", product: updated });
        }
        catch (e) {
            console.log("error in update product");
            throw e;
        }
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const prodId = req.params.id;
    try {
        const deletedProduct = yield Products_1.default.destroy({
            where: {
                id: prodId,
            },
        });
        res.json({ message: "product deleted", product: deletedProduct });
    }
    catch (e) {
        console.log("error in delete product");
        throw e;
    }
});
exports.deleteProduct = deleteProduct;
