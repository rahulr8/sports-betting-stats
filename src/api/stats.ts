import { collection } from "firebase/firestore";

import { firestore } from "./firebase";

export const EnglandSoccerStats = collection(firestore(), "soccer/england/stats");
