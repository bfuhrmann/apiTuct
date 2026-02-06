"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_service_1 = require("../services/auth.service");
class AuthController {
    async register(req, res) {
        try {
            const user = await auth_service_1.AuthService.register(req.body);
            res.status(201).json(user);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    async login(req, res) {
        try {
            const result = await auth_service_1.AuthService.login(req.body);
            res.status(200).json(result);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}
exports.default = new AuthController();
