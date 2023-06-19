import { Habit } from 'src/app/models';

export interface HabitState {
	habits: Habit[];
	loading: boolean;
	error: any;
}

export const initialHabitState: HabitState = {
	habits: [],
	loading: false,
	error: null
};
