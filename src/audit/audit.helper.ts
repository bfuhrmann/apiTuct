import { Request } from 'express';

export const getRequestMeta = (req: Request) => ({
    ip: req.ip,
    userAgent: req.headers['user-agent'],
});