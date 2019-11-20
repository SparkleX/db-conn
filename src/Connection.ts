import {Result} from "./Result"
export interface Connection {
	open(config:any) : Promise<void>;
	close():Promise<void>;
	execute(sql:string, params?:[any]):Promise<Result>;
	setAutoCommit(autoCommit:boolean):Promise<void>;
	commit():Promise<void>;
	rollback():Promise<void>;
}