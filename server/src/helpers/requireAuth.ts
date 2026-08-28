import type { Request, Response, NextFunction } from "express";

export default function requireAuth(req: Request, res: Response, next: NextFunction) {
    if (!req.session.userId) {
        return res.status(401).json({
            message: "You are not logged in."
        })
    }
    next()
}