import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
	HomeComponent,
} from './layout/index';

@NgModule({
	imports: [
		RouterModule.forRoot([
			{ path: '', component: HomeComponent, pathMatch: 'full' }
		])
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
