import { MdTable } from ".";

export interface DdlBuilder {
	createTable(mdTable:MdTable):string[];
	insertSql(mdTable:MdTable):string;
	insertData(mdTable:MdTable, data:object[]):any[][];
}