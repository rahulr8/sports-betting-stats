type TeamAbreviation = {
  [key: string]: string;
};
// current Teams in the Premier League, which will be mapped for the UI, will not contain all Team constants as there are teams now in the Championship and League One
export const teamAbreviation: TeamAbreviation = {
  ars: "Arsenal",
  avl: "Aston Villa",
  bou: "Bournemouth",
  bre: "Brentford",
  bha: "Brighton & Hove Albion",
  bur: "Burnley",
  che: "Chelsea",
  cry: "Crystal Palace",
  eve: "Everton",
  ful: "Fulham",
  liv: "Liverpool",
  lut: "Luton Town",
  mci: "Manchester City",
  mun: "Manchester United",
  new: "Newcastle United",
  nfo: "Nottingham Forest",
  shu: "Sheffield United",
  tot: "Tottenham Hotspur",
  whu: "West Ham",
  wol: "Wolverhampton Wanderers",
};

export type PremierLeagueTeam =
  | "Arsenal"
  | "Aston Villa"
  | "Bournemouth"
  | "Brighton & Hove Albion"
  | "Burnley"
  | "Chelsea"
  | "Crystal Palace"
  | "Everton"
  | "Fulham"
  | "Leeds United"
  | "Liverpool"
  | "Manchester City"
  | "Manchester United"
  | "Newcastle United"
  | "Sheffield United"
  | "Southampton"
  | "Tottenham Hotspur"
  | "West Bromwich Albion"
  | "West Ham"
  | "Wolverhampton Wanderers"
  | "Norwich City"
  | "Watford"
  | "Brentford"
  | "Leicester"
  | "Middlesbrough"
  | "Stoke"
  | "Swansea"
  | "Nottingham Forest"
  | "Huddersfield"
  | "Queens Park Rangers"
  | "Hull";
// to be continued