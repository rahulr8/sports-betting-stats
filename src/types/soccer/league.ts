import { ITeam } from "../team";

export interface SoccerLeague {
  id: number;
  name: string;
  code: SoccerLeagueCode;
  teams: ITeam[];
  enabled: boolean;
  flagSVGcode: string;
}

export enum SoccerLeagueCode {
  epl = "epl",
  laLiga = "laliga",
}
