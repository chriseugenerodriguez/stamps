import { Component, OnInit } from "@angular/core";

// COMPONENT
@Component({
	selector: 'module-product-app',
	templateUrl: 'product.component.html',
})

// CLASS
export class ModuleProductComponent implements OnInit {

  constructor(){}
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
}
