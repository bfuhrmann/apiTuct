"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRequestMeta = void 0;
const getRequestMeta = (req) => ({
    ip: req.ip,
    userAgent: req.headers['user-agent'],
});
exports.getRequestMeta = getRequestMeta;
