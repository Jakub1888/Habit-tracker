export enum Repetition {
	once = 'Once',
	weekend = 'Weekend',
	daily = 'Daily'
}

export enum YesNo {
	yes = 'Yes',
	no = 'No'
}

export interface Habit {
	uid: string;
	id: string;
	title: string;
	date: Date;
	completed: boolean;
	repetition: Repetition;
	keep: YesNo;
}
