import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/core/state';
import { logoutUser } from 'src/app/core/state/user/actions/user.actions';
import { selectIsAuthenticated } from 'src/app/core/state/user/selectors/user.selectors';

export interface NavLink {
	link: string;
	label: string;
}

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
	isLoggedIn$!: Observable<boolean>;

	navAuthLinks: NavLink[] = [
		{ link: '/register', label: 'register' },
		{ link: '/login', label: 'login' }
	];

	navLinks: NavLink[] = [{ link: '/habits', label: 'habits' }];

	constructor(private store: Store<State>) {}

	ngOnInit(): void {
		this.isLoggedIn$ = this.store.pipe(select(selectIsAuthenticated));
	}

	onUserLogout(): void {
		this.store.dispatch(logoutUser());
	}
}
