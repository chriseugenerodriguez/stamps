import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

// RELATED
import { HeaderComponent } from './header.component';


// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		HttpModule,
		HttpClientModule
	],
	declarations: [
		HeaderComponent,

	],
	exports: [
		HeaderComponent,
	]
})
export class HeaderModule { }
