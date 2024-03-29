export class Pokemon {
    id:number;
    hp:number;
    cp:number;
    name:string;
    picture:string;
    types:Array<string>;
    created:Date;

    constructor (name:string ='',
                hp:number=100,
                cp:number=10,
                picture:string='https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png',
                types:string[]=['normal'],
                created:Date=new Date())
                {
                    this.cp=cp;
                    this.hp=hp;
                    this.name=name;
                    this.picture=picture;
                    this.created=created;
                    this.types=types;
                }
}