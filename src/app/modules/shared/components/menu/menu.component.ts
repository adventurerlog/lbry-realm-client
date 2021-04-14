import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  theme = 'light'; // 'dark'
  constructor() {
  }

  get logoSrc(): string {
    return `/assets/logo-v-${this.theme}.png`;
  }

  ngOnInit(): void {
  }

}
