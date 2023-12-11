import express from "express";
import { createUser, getUsers } from "../Controllers/users";
const router = express.Router();
router.get("/user", getUsers);
router.post("/user", createUser);
export default router;
