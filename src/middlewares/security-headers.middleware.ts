import { Request, Response, NextFunction } from 'express';

export function customSecurityHeaders(
    req: Request,
    res: Response,
    next: NextFunction
){
    res.setHeader('X-Powered-By', 'Prime-API');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('Referrer-Policy', 'no-referrer');

    next();
}