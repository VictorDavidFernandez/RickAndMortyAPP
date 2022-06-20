import { Component, OnInit } from '@angular/core';
import { Character } from '../characters/character';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from './character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
  providers: [CharacterService]
})
export class CharacterComponent implements OnInit {

  character: Character | undefined

  constructor(private theCharacter: CharacterService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id: number = this.activatedRoute.snapshot.params['id'];
    this.theCharacter.getCharacter(id).subscribe((characterData) => this.character = characterData);
  }

}
