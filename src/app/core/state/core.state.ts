import { HabitState } from './habit';
import { UserState } from './user/state/user.state';

export interface State {
	user: UserState;
	habits: HabitState;
}
