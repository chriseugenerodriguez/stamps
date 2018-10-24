import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

// COMPONENT
@Component({
	selector: 'home-app',
	templateUrl: 'home.component.html',
})

// CLASS
export class HomeComponent implements OnInit {

  constructor(title: Title, meta: Meta){
		title.setTitle('Drag and Drop Interface - Vicky\'s');
		meta.addTags([
			{ name: 'description', content: 'Making it simple and easy drag and drop products into cart.' },
		]);
  }
  ngOnInit(): void {
  }
}
