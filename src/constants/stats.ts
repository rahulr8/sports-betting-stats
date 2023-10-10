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

export type GameDataKeys = keyof GameDataType;

// create array of objects mock data from GateDataType

export const mockData: GameDataType[] = [
  {
    homeMv: 1022,
    awayMv: 920,
    hc: 8,
    ac: 2,
    hf: 10,
    af: 6,
    hppda: 11,
    appda: 3,
    hr: 0,
    ar: 0,
    hy: 1,
    ay: 2,
    hs: 3,
    as: 9,
    hst: 2,
    ast: 0,
    homeAvgAge: 23.33,
    awayAvgAge: 24.98,
    hxA: 3.5,
    axA: 1.1,
    hxG: 2.4,
    axG: 0.98,
    hxPts: 2.3,
    axPts: 0.7,
    b365H: 1.03,
    b365D: 1.4,
    b365A: 2.3,
    hthg: 2,
    htag: 0,
    fthg: 2,
    ftag: 0,
    htr: "H",
    ftr: "H",
    awayTeam: "6",
    homeTeam: "Arsenal",
  },
  // another object with the same keys but slightly different number values
  {
    homeMv: 1022,
    awayMv: 670,
    hc: 5,
    ac: 3,
    hf: 3,
    af: 7,
    hppda: 10,
    appda: 4,
    hr: 0,
    ar: 1,
    hy: 0,
    ay: 4,
    hs: 9,
    as: 2,
    hst: 8,
    ast: 0,
    homeAvgAge: 23.33,
    awayAvgAge: 25.7,
    hxA: 4.2,
    axA: 1.3,
    hxG: 3.1,
    axG: 0.04,
    hxPts: 2.3,
    axPts: 0.7,
    b365H: 1.03,
    b365D: 1.4,
    b365A: 2.3,
    hthg: 1,
    htag: 0,
    fthg: 3,
    ftag: 1,
    htr: "H",
    ftr: "H",
    awayTeam: "2",
    homeTeam: "Arsenal",
  },
];
