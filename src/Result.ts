import { ResultSetMetaData } from "./ResultSetMetaData";

export interface Result {
	data?: object[];
	metadata?: ResultSetMetaData;
	affectedRows? :number;
}