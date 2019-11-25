import { Metadata, MdColumnType } from "../../src/index"
import * as chai from 'chai'

describe(__filename, () => {
    it("Metadata.load", async () => {
		var table = await Metadata.load("./test/ddl/tables/Exam.json");
		chai.expect(table.name).equals("Exam");
		chai.expect(table.columns[0].name).equals("id");
		chai.expect(table.columns[0].type).equals(MdColumnType.number);
	}),
    it("Metadata.loadAll", async () => {
		var metadata = await Metadata.loadAll("./test/ddl/tables/");
		chai.expect(metadata.tables.length).equals(4);
    });	
});