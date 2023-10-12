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
      { name: "Team A", code: "team1" },
      { name: "Team B", code: "team2" },
    ],
    enabled: false,
    flagSVGcode: "es",
  },
];
