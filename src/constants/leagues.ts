export interface Team {
  name: string;
  abreviation: string;
}

interface FootballLeague {
  name: string;
  teams: Team[];
  enabled: boolean;
  flagSVGcode: string;
}

export const footballLeagues: FootballLeague[] = [
  {
    name: "Premier League",
    teams: [
      { name: "Arsenal", abreviation: "ars" },
      { name: "Aston Villa", abreviation: "avl" },
      { name: "Bournemouth", abreviation: "bou" },
      { name: "Brentford", abreviation: "bre" },
      { name: "Brighton & Hove Albion", abreviation: "bha" },
      { name: "Burnley", abreviation: "bur" },
      { name: "Chelsea", abreviation: "che" },
      { name: "Crystal Palace", abreviation: "cry" },
      { name: "Everton", abreviation: "eve" },
      { name: "Fulham", abreviation: "ful" },
      { name: "Liverpool", abreviation: "liv" },
      { name: "Luton Town", abreviation: "lut" },
      { name: "Manchester City", abreviation: "mci" },
      { name: "Manchester United", abreviation: "mun" },
      { name: "Newcastle United", abreviation: "new" },
      { name: "Nottingham Forest", abreviation: "nfo" },
      { name: "Sheffield United", abreviation: "shu" },
      { name: "Tottenham Hotspur", abreviation: "tot" },
      { name: "West Ham United", abreviation: "whu" },
      { name: "Wolverhampton Wanderers", abreviation: "wol" },
    ],
    enabled: true,
    flagSVGcode: "gb-eng",
  },
  {
    name: "La Liga",
    teams: [
      { name: "Team A", abreviation: "team1" },
      { name: "Team B", abreviation: "team2" },
    ],
    enabled: false,
    flagSVGcode: "es",
  },
];
