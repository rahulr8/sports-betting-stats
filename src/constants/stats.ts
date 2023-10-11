import { StatMapping } from "types/stats";

export const Stats: StatMapping = {
  // Teams and Match
  LeagueDivision: "Div",
  MatchDate: "Date",
  HomeTeam: "HomeTeam",
  AwayTeam: "AwayTeam",

  // Team Ratings
  HomeTeamOverallRating: "HTOa",
  AwayTeamOverallRating: "ATOa",
  HomeTeamAttackRating: "HTAt",
  AwayTeamAttackRating: "ATAt",
  HomeTeamMidfieldRating: "HTMid",
  AwayTeamMidfieldRating: "ATMid",
  HomeTeamDefenceRating: "HTDef",
  AwayTeamDefenceRating: "ATDef",

  // Team Details
  HomeTeamSquadSize: "HomeSquad",
  AwayTeamSquadSize: "AwaySquad",
  HomeTeamAverageAge: "HomeAvgAge",
  AwayTeamAverageAge: "AwayAvgAge",
  HomeTeamMarketValue: "HomeMV",
  AwayTeamMarketValue: "AwayMV",

  // Match Details: Full Time
  FullTimeHomeGoals: "FTHG",
  FullTimeAwayGoals: "FTAG",
  FullTimeResult: "FTR",

  // Match Details: Half Time
  HalfTimeHomeGoals: "HTHG",
  HalfTimeAwayGoals: "HTAG",
  HalfTimeResult: "HTR",

  // Match Statistics
  HomeTeamShots: "HS",
  AwayTeamShots: "AS",
  HomeTeamShotsOnTarget: "HST",
  AwayTeamShotsOnTarget: "AST",
  HomeTeamFouls: "HF",
  AwayTeamFouls: "AF",
  HomeTeamCorners: "HC",
  AwayTeamCorners: "AC",
  HomeTeamYellowCards: "HY",
  AwayTeamYellowCards: "AY",
  HomeTeamRedCards: "HR",
  AwayTeamRedCards: "AR",

  // Expected Metrics
  HomeTeamExpectedGoals: "HxG",
  AwayTeamExpectedGoals: "AxG",
  HomeTeamExpectedGoalsAfterKeyPasses: "HxA",
  AwayTeamExpectedGoalsAfterKeyPasses: "AxA",
  HomeTeamExpectedPoints: "HxPTS",
  AwayTeamExpectedPoints: "AxPTS",
  HomeTeamPassesAllowedPerDefensiveAction: "HPPDA",
  AwayTeamPassesAllowedPerDefensiveAction: "APPDA",

  // Betting Odds: Bet365
  Bet365HomeOdds: "B365H",
  Bet365DrawOdds: "B365D",
  Bet365AwayOdds: "B365A",

  // Betting Odds: Bet&Win
  BetAndWinHomeOdds: "BWH",
  BetAndWinDrawOdds: "BWD",
  BetAndWinAwayOdds: "BWA",

  // ... additional mappings for other betting odds
};
