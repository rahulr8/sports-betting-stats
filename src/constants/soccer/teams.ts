import { Team } from "types/soccer/team";

export const PremierLeagueTeams: Team[] = [
  { name: "Arsenal", code: "ars" },
  { name: "Aston Villa", code: "avl" },
  { name: "Bournemouth", code: "bou" },
  { name: "Brentford", code: "bre" },
  { name: "Brighton & Hove Albion", code: "bha" },
  { name: "Burnley", code: "bur" },
  { name: "Chelsea", code: "che" },
  { name: "Crystal Palace", code: "cry" },
  { name: "Everton", code: "eve" },
  { name: "Fulham", code: "ful" },
  { name: "Liverpool", code: "liv" },
  { name: "Luton Town", code: "lut" },
  { name: "Manchester City", code: "mci" },
  { name: "Manchester United", code: "mun" },
  { name: "Newcastle United", code: "new" },
  { name: "Nottingham Forest", code: "nfo" },
  { name: "Sheffield United", code: "shu" },
  { name: "Tottenham Hotspur", code: "tot" },
  { name: "West Ham United", code: "whu" },
  { name: "Wolverhampton Wanderers", code: "wol" },
];

export const LaLigaTeams: Team[] = [
  { name: "Alavés", code: "alv" },
  { name: "Athletic Club", code: "ath" },
  { name: "Atlético Madrid", code: "atm" },
  { name: "Barcelona", code: "bar" },
  { name: "Cádiz", code: "cad" },
  { name: "Celta Vigo", code: "cel" },
  { name: "Deportivo Alavés", code: "dea" },
  { name: "Eibar", code: "eib" },
  { name: "Elche", code: "elc" },
  { name: "Espanyol", code: "esp" },
  { name: "Getafe", code: "get" },
  { name: "Granada", code: "gra" },
  { name: "Levante", code: "lev" },
  { name: "Mallorca", code: "mal" },
  { name: "Osasuna", code: "osa" },
  { name: "Rayo Vallecano", code: "ray" },
  { name: "Real Betis", code: "bet" },
  { name: "Real Madrid", code: "rma" },
  { name: "Real Sociedad", code: "soc" },
  { name: "Sevilla", code: "sev" },
  { name: "Valencia", code: "val" },
  { name: "Villarreal", code: "vil" },
];

export const Teams = {
  premierLeague: PremierLeagueTeams,
  laLiga: LaLigaTeams,
};

export const AllTeams: Team[] = [...PremierLeagueTeams, ...LaLigaTeams];

export const TeamCode: { [key: string]: string } = AllTeams.reduce(
  (acc, team) => ({ ...acc, [team.code]: team.name }),
  {},
);

export type TeamCodeKey = keyof typeof TeamCode;
