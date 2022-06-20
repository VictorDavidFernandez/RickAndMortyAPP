import { Component, OnInit } from '@angular/core';
import { Episode } from './episode';
import { EpisodeService } from './episodes.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css'],
  providers: [EpisodeService]
})
export class EpisodesComponent implements OnInit {

  episodes: Episode[] = [];

  page: number = 1;

  searchedName: string = '';

  constructor(private theEpisodes: EpisodeService) { }

  ngOnInit(): void {
    this.theEpisodes.getEpisodes(this.page).subscribe((episodesData: any) => this.episodes = episodesData.results)
  }

  nextPage() {
    if(this.page == 3){
      this.page = 3
    }else{
      this.page++;
      this.theEpisodes.getEpisodes(this.page).subscribe((episodesData: any) => this.episodes = episodesData.results)
    }
  }

  prevPage() {
    if(this.page == 1){
      this.page = 1
    }else{
      this.page--;
      this.theEpisodes.getEpisodes(this.page).subscribe((episodesData: any) => this.episodes = episodesData.results)
    }
  }

  searchName(){
    this.theEpisodes.getName(this.searchedName).subscribe((episodesData: any) => this.episodes = episodesData.results)
    console.log(this.searchedName);
  }

}
