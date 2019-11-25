export interface Connection {
	open(config:any) : Promise<void>;
	close():Promise<void>;
	execute(sql:string, params?:any[]):Promise<boolean>;
	executeQuery(sql:string, params?:any[]):Promise<any[]>;
	getUpdateCount():number;
	getResultSet():any[];
	setAutoCommit(autoCommit:boolean):Promise<void>;
	commit():Promise<void>;
	rollback():Promise<void>;
}