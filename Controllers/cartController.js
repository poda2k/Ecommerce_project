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
exports.getCart = exports.updateCart = exports.createCart = void 0;
const Cart_1 = __importDefault(require("../Models/Cart"));
const Products_1 = __importDefault(require("../Models/Products"));
const Prod_Cart_1 = __importDefault(require("../Models/Prod_Cart"));
// Waiting for Eng. Omar to complete the JWT .
const createCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const prod_Id = req.params.prod_Id;
    console.log(prod_Id);
    const userId = req['userId']; // get the user ID from the token .
    try {
        //getting the product info .
        const productsInfo = yield Products_1.default.findOne({
            where: { id: prod_Id },
        });
        console.log(`productsInfo?.price`, productsInfo === null || productsInfo === void 0 ? void 0 : productsInfo.price);
        // Checking if user have cart or not ..
        const checkIfUserHasCart = yield Cart_1.default.findOne({
            where: {
                user_id: userId,
                Is_purchased: false,
            },
        });
        // if user has cart then we check if the product already exists in cart ????????? //
        if (checkIfUserHasCart) {
            const checkIfProdInCart = yield Prod_Cart_1.default.findOne({
                where: {
                    ProductId: prod_Id,
                },
            });
            // if product already exists in cart respond with this .. //
            if (checkIfProdInCart != null) {
                res.json({ message: "Product already exists in cart" });
            }
            else if (checkIfProdInCart == null) {
                // adding product to cart //
                const createAssociation = yield Prod_Cart_1.default.create({
                    CartId: checkIfUserHasCart.id,
                    ProductId: prod_Id,
                    quantity: req.body.quantity,
                    totalprice: productsInfo === null || productsInfo === void 0 ? void 0 : productsInfo.price,
                });
                res.json({
                    message: "Product added to cart successfully",
                    cart: createAssociation,
                });
            }
            // if user don`t have a cart .. //
        }
        else {
            const createCartRecord = yield Cart_1.default.create({
                user_id: userId,
                Is_purchased: false, // update here ==> this attribute must be in association table....??//
            });
            const createAssociation = yield Prod_Cart_1.default.create({
                Cartid: createCartRecord.id,
                Productid: prod_Id,
                quantity: productsInfo === null || productsInfo === void 0 ? void 0 : productsInfo.quantity,
                totalPrice: productsInfo === null || productsInfo === void 0 ? void 0 : productsInfo.price,
            });
            res.json({
                message: "new cart added and product added successfully",
                cart: createAssociation,
            });
        }
    }
    catch (err) {
        console.log("Failed to create cart" + err);
        throw err;
    }
});
exports.createCart = createCart;
const updateCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedCart = yield Prod_Cart_1.default.update({
            quantity: req.body.quantity,
        }, {
            where: { CartId: req.query.cartId, ProductId: req.query.prodId },
        });
        res.status(200).json({ message: "the quantity has been updated" });
        console.log(updatedCart);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.updateCart = updateCart;
const getCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // get userId from the token .
    const userId = req['userId'];
    console.log(req["userId"]);
    try {
        const cart = yield Cart_1.default.findAll({
            where: {
                user_id: userId,
                Is_purchased: false,
            },
            include: [Products_1.default],
        });
        res.json({ message: "Cart found successfully", cart: cart });
    }
    catch (error) {
        console.log("Failed to get cart" + error);
        throw error;
    }
});
exports.getCart = getCart;
