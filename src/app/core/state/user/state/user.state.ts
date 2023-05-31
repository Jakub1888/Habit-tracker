import { User, UserInfo } from 'firebase/auth';

export interface UserState {
	user: User | null;
	loading: boolean;
	error: any;
}

export const initialUserState: UserState = {
	user: null,
	loading: false,
	error: null
};
