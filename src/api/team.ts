import { query, getDocs, where, collection, DocumentData } from "firebase/firestore";

import { TeamCodeKey } from "constants/soccer/teams";
import { firestore } from "api/firebase";
import { Match } from "types/soccer/match";
import { EnglandSoccerStats } from "./stats";

/**
 * Fetch all matches where the provided `teamName` is either a home or away team.
 *
 * @param {string} teamName
 * @returns {Promise<Match[]>} - A promise that resolves to an array of matches.
 */
export const fetchMatchesForTeam = async (teamName: TeamCodeKey): Promise<Match[]> => {
  try {
    const db = firestore();
    // Here two queries are needed since Firestore does not support logical OR in a single query
    const homeMatchesQuery = query(EnglandSoccerStats, where("homeTeam", "==", teamName));
    const awayMatchesQuery = query(EnglandSoccerStats, where("awayTeam", "==", teamName));

    const homeQuerySnapshot = await getDocs(homeMatchesQuery);
    const awayQuerySnapshot = await getDocs(awayMatchesQuery);

    const matches: Match[] = [];

    homeQuerySnapshot.forEach((doc: DocumentData) => {
      matches.push({ id: doc.id, ...doc.data() } as Match);
    });

    awayQuerySnapshot.forEach((doc: DocumentData) => {
      matches.push({ id: doc.id, ...doc.data() } as Match);
    });

    return matches;
  } catch (error) {
    console.error("Error fetching matches: ", error);
    throw error;
  }
};

// API call to get all documents inside the "england" collection
export const fetchAllMatches = async (): Promise<Match[]> => {
  try {
    const db = firestore();
    const matchesQuery = query(collection(db, "england"));
    const querySnapshot = await getDocs(matchesQuery);

    const matches: Match[] = [];

    querySnapshot.forEach((doc: DocumentData) => {
      matches.push({ id: doc.id, ...doc.data() } as Match);
    });

    console.log("All matches!", matches);

    return matches;
  } catch (error) {
    console.error("Error fetching matches: ", error);
    throw error;
  }
};
