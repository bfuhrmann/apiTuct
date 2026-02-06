"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customSecurityHeaders = customSecurityHeaders;
function customSecurityHeaders(req, res, next) {
    res.setHeader('X-Powered-By', 'TUCT-API');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('Referrer-Policy', 'no-referrer');
    next();
}
