import { DataSource } from "./DataSource";
import * as genericPool from "generic-pool";
import { Connection } from "./Connection";
import { Pool, Factory } from "generic-pool";
import { Driver } from "./Driver";

class PoolFactory implements Factory<Connection>{
	config: any;
	driver: Driver
	constructor(driver: Driver, config: any) {
		this.driver = driver;
		this.config = config;
	}
	async create(): Promise<Connection> {
		const rt = await this.driver.connect(this.config);
		return rt;
	}
	async destroy(client: Connection): Promise<void> {
		await (client as any).__close();
	}

}

export class GenericPool implements DataSource {
	pool: Pool<Connection>;
	constructor(driver: Driver, config: any, opts: any) {
		const factory = new PoolFactory(driver, config);
		this.pool = genericPool.createPool(factory, opts);

	}
	public async getConnection(): Promise<Connection> {
		const rt: Connection = await this.pool.acquire();
		const that = this;
		(rt as any).__close = rt.close;
		rt.close = async function() {
			await that.pool.release(rt);
		}		
		return rt;
	}
	public async close(): Promise<void> {
		await this.pool.clear();
	}

}