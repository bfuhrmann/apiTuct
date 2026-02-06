"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = errorMiddleware;
const AppError_1 = require("../utils/AppError");
function errorMiddleware(error, req, res, next) {
    if (error instanceof AppError_1.AppError) {
        return res.status(error.statusCode).json({ message: error.message });
    }
    console.error(error);
    return res.status(500).json({ message: 'Erro interno do Servidor' });
}
