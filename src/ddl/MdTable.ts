import { MdColumn } from "./MdColumn";

export class MdTable {
	public name:string ;
	public description:string;
	public columns : MdColumn[];
	public primaryKey: string[];
	public uniqueIndexes: {[key:string]:string};
	public nonUniqueIndexes: {[key:string]:string};	
}