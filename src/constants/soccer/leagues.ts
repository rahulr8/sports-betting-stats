import { Teams } from "./teams";
import { SoccerLeague } from "types/soccer/league";

export const SoccerLeagues: SoccerLeague[] = [
  {
    name: "Premier League",
    teams: Teams.premierLeague,
    enabled: true,
    flagSVGcode: "gb-eng",
  },
  {
    name: "La Liga",
    teams: Teams.laLiga,
    enabled: true,
    flagSVGcode: "es",
  },
];
