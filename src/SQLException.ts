export class SQLException extends Error{
	message: string;
	public constructor(message: string) {
		super(message);
	}
}
