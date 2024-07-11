"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIfAdmin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const checkIfAdmin = (req, res, next) => {
    const header = req.get('Authorization');
    const token = header.replace('Bearer ', '');
    console.log("tokennnnn =>>>>>>>>>>>" + token);
    try {
        const decoded = jsonwebtoken_1.default.verify(token, 'mysecrettoken');
        if (decoded) {
            if (decoded.isAdmin === true) {
                next();
            }
            res.json({ message: "unauthorized" });
        }
    }
    catch (error) {
        console.log('error in middleware checkIfAdmin: ' + error);
    }
};
exports.checkIfAdmin = checkIfAdmin;
