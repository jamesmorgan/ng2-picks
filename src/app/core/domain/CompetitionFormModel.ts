//TODO I needed a simplified model as I could not bind to the Status Object?
import {Status} from "./Status";
import {Competition} from "./Competition";

export class CompetitionFormModel {
  name:String;
  shortName:String;
  description:String;
  start:number;
  gameId:String;
  status:Status;
  order:boolean;
  image:String;

  // TODO this feels wrong...?
  toCompetition():Competition {
    var competition = new Competition();
    competition.name = this.name;
    competition.shortName = this.shortName;
    competition.description = this.description;
    competition.game = this.gameId;
    // competition.start = new Date().getTime(); // this.start; - TODO how to map to Date .. ?
    competition.status = this.status;
    competition.order = this.order;
    competition.image = this.image;
    competition.selections = [];
    return competition;
  }
}
