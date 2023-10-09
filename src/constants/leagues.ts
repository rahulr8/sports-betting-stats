export interface Team {
  name: string;
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
      { name: "Arsenal" },
      { name: "Aston Villa" },
      { name: "Bournemouth" },
      { name: "Brentford" },
      { name: "Brighton & Hove Albion" },
      { name: "Burnley" },
      { name: "Chelsea" },
      { name: "Crystal Palace" },
      { name: "Everton" },
      { name: "Fulham" },
      { name: "Liverpool" },
      { name: "Luton Town" },
      { name: "Manchester City" },
      { name: "Manchester United" },
      { name: "Newcastle United" },
      { name: "Nottingham Forest" },
      { name: "Sheffield United" },
      { name: "Tottenham Hotspur" },
      { name: "West Ham United" },
      { name: "Wolverhampton Wanderers" },
    ],
    enabled: true,
    flagSVGcode: "gb-eng",
  },
  {
    name: "La Liga",
    teams: [{ name: "Team A" }, { name: "Team B" }],
    enabled: false,
    flagSVGcode: "es",
  },
];
