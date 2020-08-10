import { Result } from "./Result";

export interface Connection {
	execute(sql:string, params?:object|any[]):Promise<Result>;
	executeQuery(sql:string, params?:object|any[]):Promise<object[]>;
	setAutoCommit(autoCommit:boolean):Promise<void>;
	commit():Promise<void>;
	rollback():Promise<void>;
	close():Promise<void>;
}