export interface ISports {
  id: number;
  name: string;
}

export const SportsNames = {
  Soccer: "soccer",
};

export const Sports: ISports[] = [
  {
    id: 1,
    name: SportsNames.Soccer,
  },
];
