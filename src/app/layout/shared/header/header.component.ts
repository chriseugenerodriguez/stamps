import { Component, OnInit } from "@angular/core";

// COMPONENT
@Component({
	moduleId: module.id,
	selector: 'header-app',
	templateUrl: 'header.component.html',
})

// CLASS
export class HeaderComponent implements OnInit {

  constructor(){}
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
}
