import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		loadChildren: () => import('./features/home/home.module').then((m) => m.HomeModule)
	},
	{
		path: 'register',
		loadChildren: () => import('./core/auth/auth.module').then((m) => m.AuthModule)
	},
	{
		path: 'login',
		loadChildren: () => import('./core/auth/auth.module').then((m) => m.AuthModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
