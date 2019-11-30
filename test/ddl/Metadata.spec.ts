import { Metadata, MdColumnType } from "../../src"

test("Metadata.load", async () => {
	var table = await Metadata.load("./test/ddl/tables/Exam.json");
	expect(table.name).toBe("Exam");
	expect(table.columns[0].name).toBe("id");
	expect(table.columns[0].type).toBe(MdColumnType.number);
	expect(table.primaryKey[0]).toBe("id");
	expect(table.uniqueIndexes["CODE"]).toEqual(["code"]);
	expect(table.nonUniqueIndexes["NAME"]).toEqual(["name"]);	
});

test("Metadata.loadAll", async () => {
	var metadata = await Metadata.loadAll("./test/ddl/tables/");
	expect(metadata.tables.length).toBe(4);
});	
