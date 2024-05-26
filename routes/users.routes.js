import { Router } from "express";
import { getAllusers, createUser, getUserByEmail, updateUser } from "../controller/users.controller.js";
const router = Router()

router.get("/", getAllusers)
router.get("/email", getUserByEmail)
router.post("/", createUser)
router.put("/", updateUser)


export default router;