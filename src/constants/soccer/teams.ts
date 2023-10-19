import { ITeam } from "types/team";

export const PremierLeagueTeams: ITeam[] = [
  { id: 1, name: "Arsenal", code: "ars", logoUrl: "" },
  { id: 2, name: "Aston Villa", code: "avl", logoUrl: "" },
  { id: 3, name: "Bournemouth", code: "bou", logoUrl: "" },
  { id: 4, name: "Brentford", code: "bre", logoUrl: "" },
  { id: 5, name: "Brighton & Hove Albion", code: "bha", logoUrl: "" },
  { id: 6, name: "Burnley", code: "bur", logoUrl: "" },
  { id: 7, name: "Chelsea", code: "che", logoUrl: "" },
  { id: 8, name: "Crystal Palace", code: "cry", logoUrl: "" },
  { id: 9, name: "Everton", code: "eve", logoUrl: "" },
  { id: 10, name: "Fulham", code: "ful", logoUrl: "" },
  { id: 11, name: "Liverpool", code: "liv", logoUrl: "" },
  { id: 12, name: "Luton Town", code: "lut", logoUrl: "" },
  { id: 13, name: "Manchester City", code: "mci", logoUrl: "" },
  { id: 14, name: "Manchester United", code: "mun", logoUrl: "" },
  { id: 15, name: "Newcastle United", code: "new", logoUrl: "" },
  { id: 16, name: "Nottingham Forest", code: "nfo", logoUrl: "" },
  { id: 17, name: "Sheffield United", code: "shu", logoUrl: "" },
  { id: 18, name: "Tottenham Hotspur", code: "tot", logoUrl: "" },
  { id: 19, name: "West Ham United", code: "whu", logoUrl: "" },
  { id: 20, name: "Wolverhampton Wanderers", code: "wol", logoUrl: "" },
];

export const LaLigaTeams: ITeam[] = [
  { id: 21, name: "Alaves", code: "alv" },
  { id: 22, name: "Athletic Club", code: "ath" },
  { id: 23, name: "Atletico Madrid", code: "atm" },
  { id: 24, name: "Barcelona", code: "bar" },
  { id: 25, name: "Cadiz", code: "cad" },
  { id: 26, name: "Celta Vigo", code: "cel" },
  { id: 27, name: "Deportivo Alavés", code: "dea" },
  { id: 28, name: "Eibar", code: "eib" },
  { id: 29, name: "Elche", code: "elc" },
  { id: 30, name: "Espanyol", code: "esp" },
  { id: 31, name: "Getafe", code: "get" },
  { id: 32, name: "Granada", code: "gra" },
  { id: 33, name: "Levante", code: "lev" },
  { id: 34, name: "Mallorca", code: "mal" },
  { id: 35, name: "Osasuna", code: "osa" },
  { id: 36, name: "Rayo Vallecano", code: "ray" },
  { id: 37, name: "Real Betis", code: "bet" },
  { id: 38, name: "Real Madrid", code: "rma" },
  { id: 39, name: "Real Sociedad", code: "soc" },
  { id: 40, name: "Sevilla", code: "sev" },
  { id: 41, name: "Valencia", code: "val" },
  { id: 42, name: "Villarreal", code: "vil" },
];

export const Teams = {
  premierLeague: PremierLeagueTeams,
  laLiga: LaLigaTeams,
};

export const AllTeams: ITeam[] = [...PremierLeagueTeams, ...LaLigaTeams];

export const TeamCode: { [key: string]: string } = AllTeams.reduce(
  (acc, team) => ({ ...acc, [team.code]: team.name }),
  {},
);

export type TeamCodeKey = keyof typeof TeamCode;
