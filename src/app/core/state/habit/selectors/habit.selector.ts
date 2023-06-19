import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HabitState } from '../state/habit.state';

export const selectHabitState = createFeatureSelector<HabitState>('habits');

export const selectAllHabits = createSelector(selectHabitState, (state: HabitState) => state.habits);

export const selectHabit = (props: { id: string }) =>
	createSelector(selectAllHabits, (habits) => habits.find((habit) => habit.id === props.id));
