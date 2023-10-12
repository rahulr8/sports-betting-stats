import { Team } from "./team";

export interface SoccerLeague {
  name: string;
  teams: Team[];
  enabled: boolean;
  flagSVGcode: string;
}
