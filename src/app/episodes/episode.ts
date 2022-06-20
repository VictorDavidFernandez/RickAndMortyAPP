export interface IEpisode {
    id: number;
    name: String;
    air_date: Date;
    episode: String;
    created: Date;
}

export class Episode implements IEpisode{

    constructor(public id: number, public name: String, public air_date: Date, public episode: String, public created: Date){
    }
}