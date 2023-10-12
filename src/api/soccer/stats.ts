import { collection } from "firebase/firestore";

import { firestore } from "../firebase";

const EnglandSoccerStats = collection(firestore(), "soccer/england/stats");
const SpainSoccerStats = collection(firestore(), "soccer/spain/stats");

export const SoccerStatsCollection = {
  epl: EnglandSoccerStats,
  laliga: SpainSoccerStats,
};
