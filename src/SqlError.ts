export class SqlError extends Error{
	message: string;
	public constructor(message: string) {
		super(message);
	}
}