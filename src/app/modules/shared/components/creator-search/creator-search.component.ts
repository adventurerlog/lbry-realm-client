import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CreatorSearchResult} from '@models/creator-search-result.model';

@Component({
  selector: 'app-creator-search',
  templateUrl: './creator-search.component.html',
  styleUrls: ['./creator-search.component.scss']
})
export class CreatorSearchComponent implements OnInit {
  searchTerm!: string;
  @Output() onSearch: EventEmitter<any> = new EventEmitter();
  searchResults: CreatorSearchResult[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.lookupCreators();
  }

  getRandomInt(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  lookupCreators(event?: any): void {
    console.log('lookup creators: ', this.searchTerm);
    const exampleRes =  {
      name: 'Mr. Meeseks',
      description: 'I\'m mr meeseks look at me!',
      imageUrl: 'https://thumbnails.lbry.com/UCwow4CXdvIfGj126J10LN3w',
      pageLink: '@mr-meesek'
    }
    if(!event) {
      this.searchResults.push(exampleRes);
      this.searchResults.push(exampleRes);
      this.searchResults.push(exampleRes);
      this.searchResults.push(exampleRes);
    }
    if (!!this.searchTerm) {
      this.searchResults = [];
      let num = this.getRandomInt(1, 5);
      for (let i = 0; i < num; i++) {
        this.searchResults.push(exampleRes);
      }
      setTimeout(() => {
        this.onSearch.emit(true);
      }, 200);
    } else {
      this.onSearch.emit(false);
    }
  }

  keyUp(): void {
    if(!this.searchTerm){
      this.onSearch.emit(false);
    }
  }
}
