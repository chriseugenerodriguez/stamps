import { Component, OnInit, Input } from "@angular/core";

// COMPONENT
@Component({
	selector: 'module-product-app',
	templateUrl: 'product.component.html',
})

// CLASS
export class ModuleProductComponent implements OnInit {

  @Input() public name: string;
  @Input() public price: number;
  @Input() public image: string;

  constructor(){}
  ngOnInit(): void {
  }
}
