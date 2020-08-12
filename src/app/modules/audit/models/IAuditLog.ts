export interface IAuditLog {
    auditLogId: number;
    userId: number;
    tableName: number;
    date: Date;
    keyValues: string;
    oldValues: string;
    newValues: string;
}