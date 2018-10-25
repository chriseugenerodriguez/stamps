import { Component, OnInit, Input } from "@angular/core";

// COMPONENT
@Component({
	selector: 'module-cart-app',
	templateUrl: 'cart.component.html',
})

// CLASS
export class ModuleCartComponent implements OnInit {

  @Input() public data: object;

  constructor(){}
  ngOnInit(): void {
  }
}
