import { Connection } from "./Connection";
export interface ConnectionPool {
	open(config:any):Promise<void>;
	getConnection():Promise<Connection>;
	close():Promise<void>;
}