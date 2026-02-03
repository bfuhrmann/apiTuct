import { prisma } from '../config/prisma';
import { AuditPayload } from './audit.types';


export class AuditService {
  static async log(data: AuditPayload) {
    try {
      await prisma.auditLog.create({
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
    } catch (error) {
      // auditoria NUNCA pode quebrar a API
      console.error("Erro ao salvar audit log", error);
    }
  }
}