import { Component } from '@angular/core';

export interface NavItem {
	link: string;
	label: string;
}

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
	navItems: NavItem[] = [
		{ link: '/register', label: 'register' },
		{ link: '/login', label: 'login' }
	];
}
