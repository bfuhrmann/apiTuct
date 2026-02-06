"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma_1 = require("../config/prisma");
const jwt_1 = require("../utils/jwt");
class AuthService {
    static async register(data) {
        const userExists = await prisma_1.prisma.users.findUnique({
            where: { email: data.email },
        });
        if (userExists) {
            throw new Error("Usuário já existe");
        }
        const hashedPassword = await bcryptjs_1.default.hash(data.password, 10);
        const user = await prisma_1.prisma.users.create({
            data: {
                name: data.name,
                email: data.email,
                password: hashedPassword,
                roleId: data.roleId,
            },
            select: {
                id: true,
                name: true,
                email: true,
            },
        });
        return user;
    }
    static async login(data) {
        const user = await prisma_1.prisma.users.findUnique({
            where: { email: data.email },
            include: { role: true },
        });
        if (!user) {
            throw new Error("Usuário ou senha inválidos");
        }
        const passwordMatch = await bcryptjs_1.default.compare(data.password, user.password);
        if (!passwordMatch) {
            throw new Error("Usuário ou senha inválidos");
        }
        const token = (0, jwt_1.generateToken)({
            id: user.id,
            role: user.role.name,
        });
        return {
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role.name,
            },
        };
    }
}
exports.AuthService = AuthService;
