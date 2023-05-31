import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Store } from '@ngrx/store';
import { setUser } from './core/state/user/actions/user.actions';
import { User } from 'firebase/auth';
import { Observable, delay, map, switchMap, takeUntil, timer } from 'rxjs';
import { selectLoading } from './core/state/user/selectors/user.selectors';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'Habit Tracker';
	isLoading$!: Observable<boolean>;

	constructor(private fireAuth: AngularFireAuth, private store: Store) {}

	ngOnInit(): void {
		this.fireAuth.authState.subscribe((appUser) => {
			if (appUser) {
				let user = JSON.parse(JSON.stringify(appUser)) as User;
				this.store.dispatch(setUser({ user }));
			}
		});

		this.isLoading$ = this.store.select(selectLoading);
	}
}
