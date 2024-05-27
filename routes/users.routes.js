import { Router } from "express";
import { getAllusers, createUser, getUserByEmail, updateUser } from "../controller/users.controller.js";
import {superAdmincheck} from "../middleware/superadmin.middle.js"
const router = Router()

router.get("/", superAdmincheck, getAllusers)
router.get("/email", superAdmincheck, getUserByEmail)
router.post("/", superAdmincheck, createUser)
router.put("/", superAdmincheck, updateUser)


export default router;