import { StatMapping } from "types/stats";

export const Stats: StatMapping = {
  // Teams and Match
  LeagueDivision: "div",
  MatchDate: "date",
  HomeTeam: "homeTeam",
  AwayTeam: "awayTeam",

  // Team Ratings
  HomeTeamOverallRating: "htOa",
  AwayTeamOverallRating: "atOa",
  HomeTeamAttackRating: "htAt",
  AwayTeamAttackRating: "atAt",
  HomeTeamMidfieldRating: "htMid",
  AwayTeamMidfieldRating: "atMid",
  HomeTeamDefenceRating: "htDef",
  AwayTeamDefenceRating: "atDef",

  // Team Details
  HomeTeamSquadSize: "homeSquad",
  AwayTeamSquadSize: "awaySquad",
  HomeTeamAverageAge: "homeAvgAge",
  AwayTeamAverageAge: "awayAvgAge",
  HomeTeamMarketValue: "homeMv",
  AwayTeamMarketValue: "awayMv",

  // Match Details: Full Time
  FullTimeHomeGoals: "fthg",
  FullTimeAwayGoals: "ftag",
  FullTimeResult: "ftr",

  // Match Details: Half Time
  HalfTimeHomeGoals: "hthg",
  HalfTimeAwayGoals: "htag",
  HalfTimeResult: "htr",

  // Match Statistics
  HomeTeamShots: "hs",
  AwayTeamShots: "as",
  HomeTeamShotsOnTarget: "hst",
  AwayTeamShotsOnTarget: "ast",
  HomeTeamFouls: "hf",
  AwayTeamFouls: "af",
  HomeTeamCorners: "hc",
  AwayTeamCorners: "ac",
  HomeTeamYellowCards: "hy",
  AwayTeamYellowCards: "ay",
  HomeTeamRedCards: "hr",
  AwayTeamRedCards: "ar",

  // Expected Metrics
  HomeTeamExpectedGoals: "hxG",
  AwayTeamExpectedGoals: "axG",
  HomeTeamExpectedGoalsAfterKeyPasses: "hxA",
  AwayTeamExpectedGoalsAfterKeyPasses: "axA",
  HomeTeamExpectedPoints: "hxPts",
  AwayTeamExpectedPoints: "axPts",
  HomeTeamPassesAllowedPerDefensiveAction: "hppda",
  AwayTeamPassesAllowedPerDefensiveAction: "appda",

  // Betting Odds: Bet365
  Bet365HomeOdds: "b365H",
  Bet365DrawOdds: "b365D",
  Bet365AwayOdds: "b365A",

  // Betting Odds: Bet&Win
  BetAndWinHomeOdds: "bwh",
  BetAndWinDrawOdds: "bwd",
  BetAndWinAwayOdds: "bwa",
};

// create statsArray with the format: {label: 'League Division', value: 'div'}
export const FilteringStatsArray = [
  { label: "Home Team Average Age", value: "homeAvgAge" },
  { label: "Away Team Average Age", value: "awayAvgAge" },
  { label: "Home Team Market Value", value: "homeMv" },
  { label: "Away Team Market Value", value: "awayMv" },
  { label: "Full Time Result", value: "ftr" },
  { label: "Full Time Home Goals", value: "fthg" },
  { label: "Full Time Away Goals", value: "ftag" },
  { label: "Half Time Result", value: "htr" },
  { label: "Half Time Home Goals", value: "hthg" },
  { label: "Half Time Away Goals", value: "htag" },
  { label: "Home Team Shots", value: "hs" },
  { label: "Away Team Shots", value: "as" },
  { label: "Home Team Shots On Target", value: "hst" },
  { label: "Away Team Shots On Target", value: "ast" },
  { label: "Home Team Fouls", value: "hf" },
  { label: "Away Team Fouls", value: "af" },
  { label: "Home Team Corners", value: "hc" },
  { label: "Away Team Corners", value: "ac" },
  { label: "Home Team Yellow Cards", value: "hy" },
  { label: "Away Team Yellow Cards", value: "ay" },
  { label: "Home Team Red Cards", value: "hr" },
  { label: "Away Team Red Cards", value: "ar" },
  { label: "Home Team Expected Goals", value: "hxG" },
  { label: "Away Team Expected Goals", value: "axG" },
  { label: "Home Team Expected Goals After Key Passes", value: "hxA" },
  { label: "Away Team Expected Goals After Key Passes", value: "axA" },
  { label: "Home Team Expected Points", value: "hxPts" },
  { label: "Away Team Expected Points", value: "axPts" },
  { label: "Home Team Passes Allowed Per Defensive Action", value: "hppda" },
  { label: "Away Team Passes Allowed Per Defensive Action", value: "appda" },
  { label: "Bet365 Home Odds", value: "b365H" },
  { label: "Bet365 Draw Odds", value: "b365D" },
  { label: "Bet365 Away Odds", value: "b365A" },
];
