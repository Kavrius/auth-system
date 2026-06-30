import { Router } from "express";
import { Request, Response } from "express"
import { userValidation } from "../middleware/userValidation";
import { userSchema } from "../schema/user.schema";

const router = Router();

router.post("/teste", userValidation(userSchema), (req, res) => {
    res.status(200).json({
        success: true,
        message: req.body
    })
})

export default router