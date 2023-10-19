import { Teams } from "./teams";
import { SoccerLeague, SoccerLeagueCode } from "types/soccer/league";

export const SoccerLeagues: SoccerLeague[] = [
  {
    id: 1,
    name: "Premier League",
    code: SoccerLeagueCode.epl,
    teams: Teams.premierLeague,
    enabled: true,
    flagSVGcode: "gb-eng",
  },
  {
    id: 2,
    name: "La Liga",
    code: SoccerLeagueCode.laLiga,
    teams: Teams.laLiga,
    enabled: true,
    flagSVGcode: "es",
  },
];
