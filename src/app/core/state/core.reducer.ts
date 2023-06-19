import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { State } from './core.state';
import * as UserReducer from './user/reducers/user.reducer';
import * as HabitReducer from './habit/reducers/habit.reducer';

export const reducers: ActionReducerMap<State> = {
	user: UserReducer.userReducer,
	habits: HabitReducer.habitReducer
};

export const metaReducers: MetaReducer<State>[] = [];
