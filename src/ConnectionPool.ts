import { Connection } from "./Connection";
export interface ConnectionPool {
	getConnection():Promise<Connection>;
	close():Promise<void>;
}