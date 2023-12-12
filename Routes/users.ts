import express from "express";
import { createUser, getUsers, updateUser } from "../Controllers/users";
const router = express.Router();
router.get("/user", getUsers);
router.post("/user", createUser);
router.put("/user/:id", updateUser);
export default router;
