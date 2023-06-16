import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabitsComponent } from './habits.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: HabitsComponent }];

@NgModule({
	declarations: [HabitsComponent],
	imports: [CommonModule, RouterModule.forChild(routes)]
})
export class HabitsModule {}
