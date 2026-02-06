"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auditLogin = void 0;
const audit_service_1 = require("../audit/audit.service");
const auditLogin = async (req, res, next) => {
    if (req.path === '/login' && res.statusCode === 200) {
        await audit_service_1.AuditService.log({
            userId: res.locals.userId,
            action: 'LOGIN',
            entity: 'Auth',
            ip: req.ip,
            userAgent: req.headers['user-agent'],
        });
    }
    next();
};
exports.auditLogin = auditLogin;
