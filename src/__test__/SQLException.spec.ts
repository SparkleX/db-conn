
import { SQLException } from "..";
test("SQLException", async () => {
	try {
		throw new SQLException("hello");
	}catch (err) {
		expect(err).toBeInstanceOf(SQLException);
	}
});