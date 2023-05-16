import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { ButtonModule } from 'src/app/shared/components/button';

@NgModule({
	declarations: [AuthComponent],
	imports: [CommonModule, ButtonModule],
	exports: [AuthComponent]
})
export class AuthModule {}
