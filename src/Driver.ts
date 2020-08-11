import { Connection } from "./Connection";

export interface Driver {
	connect(config: any):Promise<Connection>;
}