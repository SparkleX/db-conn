import { Connection } from ".";

export interface Driver {
	connect(config: any):Promise<Connection>;
}