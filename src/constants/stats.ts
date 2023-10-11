import { StatMapping } from "types/stats";

export const Stats: StatMapping = {
  // Teams and Match
  LeagueDivision: "div",
  MatchDate: "date",
  HomeTeam: "hometeam",
  AwayTeam: "awayteam",

  // Team Ratings
  HomeTeamOverallRating: "htoa",
  AwayTeamOverallRating: "atoa",
  HomeTeamAttackRating: "htat",
  AwayTeamAttackRating: "atat",
  HomeTeamMidfieldRating: "htmid",
  AwayTeamMidfieldRating: "atmid",
  HomeTeamDefenceRating: "htdef",
  AwayTeamDefenceRating: "atdef",

  // Team Details
  HomeTeamSquadSize: "homesquad",
  AwayTeamSquadSize: "awaysquad",
  HomeTeamAverageAge: "homeavgage",
  AwayTeamAverageAge: "awayavgage",
  HomeTeamMarketValue: "homemv",
  AwayTeamMarketValue: "awaymv",

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
  HomeTeamExpectedGoals: "hxg",
  AwayTeamExpectedGoals: "axg",
  HomeTeamExpectedGoalsAfterKeyPasses: "hxa",
  AwayTeamExpectedGoalsAfterKeyPasses: "axa",
  HomeTeamExpectedPoints: "hxpts",
  AwayTeamExpectedPoints: "axpts",
  HomeTeamPassesAllowedPerDefensiveAction: "hppda",
  AwayTeamPassesAllowedPerDefensiveAction: "appda",

  // Betting Odds: Bet365
  Bet365HomeOdds: "b365h",
  Bet365DrawOdds: "b365d",
  Bet365AwayOdds: "b365a",

  // Betting Odds: Bet&Win
  BetAndWinHomeOdds: "bwh",
  BetAndWinDrawOdds: "bwd",
  BetAndWinAwayOdds: "bwa",
};
