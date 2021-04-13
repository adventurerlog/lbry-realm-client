import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

  preCodeExtensions = `
   .button-black \{
    background-color: black;
    border-color: black;
    \}
    .button-black.button-clear,
    .button-black.button-outline \{
    background-color: transparent;
    color: black;
    \}
    .button-black.button-clear \{
    border-color: transparent;
    \}
    .button-small {
    font-size: .8rem;
    height: 2.8rem;
    line-height: 2.8rem;
    padding: 0 1.5rem;
    }
    .button-large \{
    font-size: 1.4rem;
    height: 4.5rem;
    line-height: 4.5rem;
    padding: 0 2rem;
    \}
  `;

  constructor() {
  }

  ngOnInit(): void {
  }

}
