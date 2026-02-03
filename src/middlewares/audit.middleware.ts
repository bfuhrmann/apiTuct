import { Request, Response, NextFunction } from 'express';
import { AuditService } from '../audit/audit.service';

export const auditLogin = async (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    if(req.path === '/login' && res.statusCode === 200) {
        await AuditService.log({
            userId: res.locals.userId,
            action: 'LOGIN',
            entity: 'Auth',
            ip: req.ip,
            userAgent: req.headers['user-agent'],
        });
    }
    next();
};