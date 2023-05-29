export interface UserState {
	user: User | null;
	loading: boolean;
	error: any | null;
}

export interface User {
	uid: string;
	email: string;
	username: string;
}

export const initialUserState: UserState = {
	user: null,
	loading: false,
	error: undefined
}