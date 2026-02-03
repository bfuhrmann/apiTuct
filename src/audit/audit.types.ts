export type AuditAction =
    | 'CREATE'
    | 'UPDATE'
    | 'DELETE'
    | 'LOGIN'
    | 'LOGOUT'
    | 'ERROR';

export interface AuditPayload {
  userId?: number;
  action: AuditAction;
  entity: string;
  entityId?: number;
  oldData?: any;
  newData?: any;
  ip?: string;
  userAgent?: string;
}