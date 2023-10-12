import { Teams } from "./teams";
import { SoccerLeague, SoccerLeagueCode } from "types/soccer/league";

export const SoccerLeagues: SoccerLeague[] = [
  {
    name: "Premier League",
    code: SoccerLeagueCode.epl,
    teams: Teams.premierLeague,
    enabled: true,
    flagSVGcode: "gb-eng",
  },
  {
    name: "La Liga",
    code: SoccerLeagueCode.laLiga,
    teams: Teams.laLiga,
    enabled: true,
    flagSVGcode: "es",
  },
];
