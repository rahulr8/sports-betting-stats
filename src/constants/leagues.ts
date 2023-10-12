export interface Team {
  name: string;
  code: string;
}

interface FootballLeague {
  name: string;
  teams: Team[];
  enabled: boolean;
  flagSVGcode: string;
}

export const SoccerLeagues: FootballLeague[] = [
  {
    name: "Premier League",
    teams: [
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
    ],
    enabled: true,
    flagSVGcode: "gb-eng",
  },
  {
    name: "La Liga",
    teams: [
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
    ],
    enabled: true,
    flagSVGcode: "es",
  },
];
