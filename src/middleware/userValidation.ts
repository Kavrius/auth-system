import { Request, Response, NextFunction } from "express";
import * as z from "zod"

export const userValidation = (schema: z.ZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse({
            body: req.body,
            params: req.params,
            query: req.query
        });

        return next();
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                success: false,
                message: "INVALID_DATA",
                error: error.issues,
            });
        }
    }
}