import * as HabitState from '../state/habit.state';
import * as HabitActions from '../actions/habit.actions';
import { createReducer, on } from '@ngrx/store';

export const habitReducer = createReducer(
	HabitState.initialHabitState,
	on(HabitActions.fetchAllHabits, (state) => ({
		...state,
		loading: true,
		error: false
	})),
	on(HabitActions.fetchAllHabitsSuccess, (state, { habits }) => ({
		...state,
		habits,
		loading: false,
		error: null
	})),
	on(HabitActions.fetchAllHabitsFailure, (state, { error }) => ({
		...state,
		loading: false,
		error
	}))
);
