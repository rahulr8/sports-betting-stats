import { ITeam } from "./team";

export interface ILeague {
  id: number;
  name: string;
  code: string;
  teams: ITeam[];
}
