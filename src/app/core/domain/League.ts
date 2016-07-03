export class League {

  _id:String;
  name:String;
  shortName:String;
  code:String;
  venue:String;
  created:Date;
  members:String;

  fromJson(league) {
    this._id = league._id;
    this.name = league.name;
    this.shortName = league.shortName;
    this.code = league.code;
    this.venue = league.venue;
    this.created = new Date(league.created * 1000); // unix -> js date
    this.members = league.members;
    return this;
  }
}
