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

  // ... additional mappings for other betting odds
};
