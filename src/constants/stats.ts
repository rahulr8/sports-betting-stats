export const statVariables = [
  { label: "Home Market Value", value: "homeMv" },
  { label: "Away Market Value", value: "awayMv" },
  { label: "Home Corners", value: "hc" },
  { label: "Away Corners", value: "ac" },
  { label: "Home Fouls", value: "hf" },
  { label: "Away Fouls", value: "af" },
  { label: "Home PPDA", value: "hppda" },
  { label: "Away PPDA", value: "appda" },
  { label: "Home Red Cards", value: "hr" },
  { label: "Away Red Cards", value: "ar" },
  { label: "Home Yellow Cards", value: "hy" },
  { label: "Away Yellow Cards", value: "ay" },
  { label: "Home Shots", value: "hs" },
  { label: "Away Shots", value: "as" },
  { label: "Home Shots on Target", value: "hst" },
  { label: "Away Shots on Target", value: "ast" },
  { label: "Home Average Age", value: "homeAvgAge" },
  { label: "Away Average Age", value: "awayAvgAge" },
  { label: "Home xG after Key Passes", value: "hxA" },
  { label: "Away xG after Key Passes", value: "axA" },
  { label: "Home xG", value: "hxG" },
  { label: "Away xG", value: "axG" },
  { label: "Home Expected Points", value: "hxPts" },
  { label: "Away Expected Points", value: "axPts" },
  { label: "Bet365 Home Win", value: "b365H" },
  { label: "Bet365 Draw", value: "b365D" },
  { label: "Bet365 Away Win", value: "b365A" },
  { label: "Home Half Time Goals", value: "hthg" },
  { label: "Away Half Time Goals", value: "htag" },
  { label: "Home Full Time Goals", value: "fthg" },
  { label: "Away Full Time Goals", value: "ftag" },
  { label: "Half Time Result", value: "htr" },
  { label: "Result", value: "ftr" },
];

export type GameDataType = {
  homeMv: number;
  awayMv: number;
  hc: number;
  ac: number;
  hf: number;
  af: number;
  hppda: number;
  appda: number;
  hr: number;
  ar: number;
  hy: number;
  ay: number;
  hs: number;
  as: number;
  hst: number;
  ast: number;
  homeAvgAge: number;
  awayAvgAge: number;
  hxA: number;
  axA: number;
  hxG: number;
  axG: number;
  hxPts: number;
  axPts: number;
  b365H: number;
  b365D: number;
  b365A: number;
  hthg: number;
  htag: number;
  fthg: number;
  ftag: number;
  htr: string;
  ftr: string;
  awayTeam: string;
  homeTeam: string;
};

// create array of objects mock data from GateDataType

export const mockData: GameDataType[] = [
  {
    homeMv: 1,
    awayMv: 2,
    hc: 3,
    ac: 4,
    hf: 5,
    af: 6,
    hppda: 7,
    appda: 8,
    hr: 9,
    ar: 10,
    hy: 11,
    ay: 12,
    hs: 13,
    as: 14,
    hst: 15,
    ast: 16,
    homeAvgAge: 17,
    awayAvgAge: 18,
    hxA: 19,
    axA: 20,
    hxG: 21,
    axG: 22,
    hxPts: 23,
    axPts: 24,
    b365H: 25,
    b365D: 26,
    b365A: 27,
    hthg: 28,
    htag: 29,
    fthg: 30,
    ftag: 31,
    htr: "H",
    ftr: "H",
    awayTeam: "Arsenal",
    homeTeam: "6",
  },
  {
    homeMv: 1,
    awayMv: 2,
    hc: 3,
    ac: 4,
    hf: 5,
    af: 6,
    hppda: 7,
    appda: 8,
    hr: 9,
    ar: 10,
    hy: 11,
    ay: 12,
    hs: 13,
    as: 14,
    hst: 15,
    ast: 16,
    homeAvgAge: 17,
    awayAvgAge: 18,
    hxA: 19,
    axA: 20,
    hxG: 21,
    axG: 22,
    hxPts: 23,
    axPts: 24,
    b365H: 25,
    b365D: 26,
    b365A: 27,
    hthg: 28,
    htag: 29,
    fthg: 30,
    ftag: 31,
    htr: "D",
    ftr: "H",
    awayTeam: "Arsenal",
    homeTeam: "3",
  },
];
