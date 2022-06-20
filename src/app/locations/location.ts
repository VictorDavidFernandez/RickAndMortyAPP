export interface ILocation {
    id: number;
    name: String;
    type: String;
    dimension: String;
    created: Date;
}

export class Location implements ILocation{

    constructor(public id: number, public name: String, public type: String, public dimension: String, public created: Date){
    }
}