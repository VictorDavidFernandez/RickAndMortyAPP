import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { CharacterComponent } from './character/character.component';
import { LocationsComponent } from './locations/locations.component';
import { EpisodesComponent } from './episodes/episodes.component';

const routes: Routes = [
  { path: 'Characters', component: CharactersComponent },
  { path: 'Characters/:id', component: CharacterComponent },
  { path: 'Locations', component: LocationsComponent },
  { path: 'Episodes', component: EpisodesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
