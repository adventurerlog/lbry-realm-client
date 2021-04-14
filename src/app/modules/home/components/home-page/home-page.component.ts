import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  searchPlaceholder = true;
  sp() {
    document.querySelector('#search-placeholder').scrollIntoView({block: 'end', behavior: 'smooth'})
  }
  constructor() { }

  ngOnInit(): void {
  }

}
