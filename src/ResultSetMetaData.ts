export enum ColumnType {
	INTEGER = 1,
	NVARCHAR = 2,
	DECIMAL = 3,
	DATE = 10,
	TIME = 11,
	TIMESTAMP = 12
}
export interface ResultSetColumnMetadata {
	columnName?: string;
	columnType?: ColumnType;
}

export type ResultSetMetaData = ResultSetColumnMetadata[];