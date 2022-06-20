export interface ICharacter {
    id: number;
    name: String;
    status: String;
    species: String;
    type: String;
    gender: String;
    image: String;
}

export class Character implements ICharacter{

    constructor(public id: number, public name: String, public status: String, 
    public species: String, public type: String, public gender: String, public image: String){
    }
}
