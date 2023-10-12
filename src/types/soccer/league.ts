import { Team } from "./team";

export interface SoccerLeague {
  name: string;
  code: SoccerLeagueCode;
  teams: Team[];
  enabled: boolean;
  flagSVGcode: string;
}

export enum SoccerLeagueCode {
  epl = "epl",
  laLiga = "laliga",
}
