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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.Login = void 0;
const auth_1 = __importDefault(require("../Models/auth"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield auth_1.default.findOne({ where: { email: req.body.email } });
        console.log(user);
        if (!user) {
            res.status(404).json({ message: "user is not found" });
        }
        const checkPass = bcrypt_1.default.compare(req.body.password, user.password);
        if (!checkPass) {
            res.status(400).json({ msg: "password is wrong" });
        }
        const token = jsonwebtoken_1.default.sign({
            id: user.id,
            user_name: user.user_name,
            email: user.email,
            isAdmin: user.is_admin
        }, "mysecrettoken", { expiresIn: "1d" });
        const _a = user.dataValues, { password, isAdmin } = _a, otherdetails = __rest(_a, ["password", "isAdmin"]);
        res.status(200).json({ user: otherdetails, token: token });
    }
    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});
exports.Login = Login;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const exited = yield auth_1.default.findOne({ where: { email: req.body.email } });
        if (exited) {
            return res.status(400).json({ message: "this user is registerd" });
        }
        const hashed_Password = yield bcrypt_1.default.hash(req.body.password, 10);
        const record = yield auth_1.default.create(Object.assign(Object.assign({}, req.body), { password: hashed_Password }));
        res.status(200).json({
            message: "User has been created successfully",
            user: record,
        });
    }
    catch (error) {
        res.status(500).json({ err: error });
    }
});
exports.register = register;
