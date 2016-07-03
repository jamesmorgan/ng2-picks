

export class Game {
  
  _id:String;
  name:String;
  shortName:String;
  order:boolean;
  type:String;
  description:String;
  rules:String;
  status:String;
  image:String;
  featured:boolean;
  prizes:String;

  fromJson(game) {
    this._id = game._id;
    this.name = game.name;
    this.shortName = game.shortName;
    this.order = game.order;
    this.type = game.type;
    this.description = game.description;
    this.rules = game.rules;
    this.status = game.status;
    this.image = game.image;
    this.featured = game.featured;
    this.prizes = game.prizes;
    return this;
  }
}
