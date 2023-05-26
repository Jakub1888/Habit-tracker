import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { ButtonModule } from 'src/app/shared/components/button';
import { FormFieldModule } from 'src/app/shared/components/forms/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from '../state/user/user.reducer';
import { UserEffects } from '../state/user/user.effects';

const routes: Routes = [{ path: '', component: AuthComponent }];

@NgModule({
	declarations: [AuthComponent],
	imports: [
		CommonModule,
		ButtonModule,
		FormFieldModule,
		ReactiveFormsModule,
		StoreModule.forFeature('user', userReducer),
		EffectsModule.forFeature([UserEffects]),
		RouterModule.forChild(routes)
	],
	exports: [AuthComponent]
})
export class AuthModule {}
