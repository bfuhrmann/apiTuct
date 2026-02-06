"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditService = void 0;
const prisma_1 = require("../config/prisma");
class AuditService {
    static async log(data) {
        try {
            await prisma_1.prisma.auditLog.create({
                data: {
                    userId: data.userId,
                    action: data.action,
                    entity: data.entity,
                    entityId: data.entityId,
                    oldData: data.oldData,
                    newData: data.newData,
                    ip: data.ip,
                    userAgent: data.userAgent,
                },
            });
        }
        catch (error) {
            // auditoria NUNCA pode quebrar a API
            console.error("Erro ao salvar audit log", error);
        }
    }
}
exports.AuditService = AuditService;
