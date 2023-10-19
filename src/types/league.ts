import { ITeam } from "./team";

export interface ILeague {
  id: number;
  name: string;
  teams: ITeam[];
}
