import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Store } from '@ngrx/store';
import { setUser } from './core/state/user/actions/user.actions';
import { User } from 'firebase/auth';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'Habit Tracker';

	constructor(private fireAuth: AngularFireAuth, private store: Store) {}

	ngOnInit(): void {
		this.fireAuth.authState.subscribe((appUser) => {
			if (appUser) {
				let user = JSON.parse(JSON.stringify(appUser)) as User;
				this.store.dispatch(setUser({ user }));
			}
		});
	}
}
