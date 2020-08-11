import { Driver, Connection, DataSource, GenericPool } from "..";


const poolConfig: any = {
	min: 2,
    max: 2
}
class TestConnection implements Connection {
	execute(sql: string, params?: object | any[]): Promise<import("..").Result> {
		throw new Error("Method not implemented.");
	}
	executeQuery(sql: string, params?: object | any[]): Promise<object[]> {
		throw new Error("Method not implemented.");
	}
	setAutoCommit(autoCommit: boolean): Promise<void> {
		throw new Error("Method not implemented.");
	}
	commit(): Promise<void> {
		throw new Error("Method not implemented.");
	}
	rollback(): Promise<void> {
		throw new Error("Method not implemented.");
	}
	public async close(): Promise<void> {
		
	}
}
const mockClose = jest.fn();
TestConnection.prototype.close = mockClose;

class TestDriver implements Driver {
	async connect(config: any): Promise<Connection> {
		return new TestConnection();
	}
}


test("connection pool", async () => {
	const driver = new TestDriver();
	const pool: DataSource = new GenericPool(driver, null, poolConfig);
	const conn1 = await pool.getConnection();
	expect((pool as any).pool._availableObjects.length).toStrictEqual(1);	
	const conn2 = await pool.getConnection();
	expect((pool as any).pool._availableObjects.length).toStrictEqual(0);
	await conn1.close();
	expect((pool as any).pool._availableObjects.length).toStrictEqual(1);
	await conn2.close();
	expect((pool as any).pool._availableObjects.length).toStrictEqual(2);
	expect(mockClose.mock.calls.length).toBe(0);
	await pool.close();
	expect(mockClose.mock.calls.length).toBe(2);
});