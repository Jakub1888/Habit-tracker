import { createAction, props } from '@ngrx/store';
import { Habit } from 'src/app/models';

export const fetchAllHabits = createAction('[Habit Component] Fetch list of all habits', props<{ uid: string }>());

export const fetchAllHabitsSuccess = createAction(
	'[Habit Component] Fetch list of all habits success',
	props<{ habits: Habit[] }>()
);

export const fetchAllHabitsFailure = createAction(
	'[Habit Component] Fetch list of all habits failure',
	props<{ error: any }>()
);

export const addHabitFormSubmitted = createAction(
	'[Habit Form Component] Add habit form submitted',
	props<{ habit: Habit }>()
);

export const addHabitFormSuccess = createAction('[Firebase API] Add habit form submit success');

export const addHabitFormFailure = createAction(
	'[Firebase API] Add habit form submit failure',
	props<{ error: any }>()
);
