import { Connection } from "./Connection";
export interface DataSource {
	getConnection():Promise<Connection>;
	close():Promise<void>;
}