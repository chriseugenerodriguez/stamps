import { Component, OnInit, Input } from "@angular/core";

// INTERFACE
import { Dropdown } from "../../interfaces/dropdown.interface";


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

  qty: number;

  // DROPDOWN
  selectedQuantity: Dropdown;
  quantity: Array<Dropdown> = [
    { id: 1, name: 1 },
    { id: 2, name: 2 },
    { id: 3, name: 3 },
    { id: 4, name: 4 },
    { id: 5, name: 5 },
    { id: 6, name: 6 },
    { id: 7, name: 7 },
    { id: 8, name: 8 },
    { id: 9, name: 9 },
    { id: 10, name: 10 },
    { id: 11, name: 11 },
    { id: 12, name: 12 },
    { id: 13, name: 13 },
    { id: 14, name: 14 },
    { id: 15, name: 15 },
    { id: 16, name: 16 },
    { id: 17, name: 17 },
    { id: 18, name: 18 },
    { id: 19, name: 19 },
    { id: 20, name: 20 },
  ];

  constructor() {

    // RANDOM QTY
    this._randomQty();
  }

  ngOnInit(): void {
  }

  dragstart(a, b, c) {
    let dt = a.dataTransfer;
    let img = new Image();

    dt.dropEffect = "move";
    dt.setData("price", b);
    dt.setData("qty", c);

    img.src = a.srcElement.currentSrc;
    dt.setDragImage(img, 10, 10);
  }

  private _randomQty() {
    // RANDOM QTY
    let a = this._getRandom(20);
    this.selectedQuantity = { id: a, name: a }

    // DEFINED QTY
    this.qty = this.selectedQuantity.id;
  }

  onSelect(a) {
    this.selectedQuantity = null;
    for (var i = 0; i < this.quantity.length; i++) {
      if (this.quantity[i].id == a) {
        this.selectedQuantity = this.quantity[i];
        this.qty = this.quantity[i].id;
      }
    }
  }



  private _getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
