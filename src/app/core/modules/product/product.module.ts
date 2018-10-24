import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

// RELATED
import { ModuleProductComponent } from './product.component';


// BOOTSTRAP
import { BsDropdownModule } from 'ngx-bootstrap';

// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		HttpModule,
		HttpClientModule,
    
    // BOOTSTRAP
    BsDropdownModule	
  ],
	declarations: [
    ModuleProductComponent,


	],
	exports: [
		ModuleProductComponent,
	]
})
export class ModuleProductModule { }
