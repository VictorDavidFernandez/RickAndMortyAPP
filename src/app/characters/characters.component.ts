import { Component, OnInit } from '@angular/core';
import { Character } from './character';
import { CharacterService } from './characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
  providers: [CharacterService]
})
export class CharactersComponent implements OnInit {

  characters: Character[] = [];

  page: number = 1;

  searchedName: string = '';
  
  constructor(private theCharacters: CharacterService) { }

  ngOnInit() {
    this.theCharacters.getCharacters(this.page).subscribe((charactersData: any) => this.characters = charactersData.results)
  }
  
  nextPage() {
    if(this.page == 42){
      this.page = 42
    }else{
      this.page++;
      this.theCharacters.getCharacters(this.page).subscribe((charactersData: any) => this.characters = charactersData.results)
    }
  }

  prevPage() {
    if(this.page == 1){
      this.page = 1
    }else{
      this.page--;
      this.theCharacters.getCharacters(this.page).subscribe((charactersData: any) => this.characters = charactersData.results)
    }
  }

  searchName(){
    this.theCharacters.getName(this.searchedName).subscribe((charactersData: any) => this.characters = charactersData.results)
  }

}
