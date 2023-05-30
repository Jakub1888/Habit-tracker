import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'Habit Tracker';

	constructor(private fireAuth: AngularFireAuth) {}

	ngOnInit(): void {
		this.fireAuth.authState.subscribe((user) => console.log(user))
	}
}
