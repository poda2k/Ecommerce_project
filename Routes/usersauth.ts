import express from "express";
import { Login, register } from "../Controllers/authController";
const router = express.Router();
router.post("/Register", register);
router.post("/Login", Login);
export default router;
