import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

class AuthController {
    async register(req: Request, res: Response) {
        try {
            const user = await AuthService.register(req.body);
            res.status(201).json(user);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }
    async login(req: Request, res: Response) {
        try {
            const result = await AuthService.login(req.body);
            res.status(200).json(result);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }
}

export default new AuthController();
