import { query, getDocs, where, collection, DocumentData } from "firebase/firestore";

import { firestore } from "api/firebase";
import { Match } from "types/match";

/**
 * Fetch all matches where the provided `teamName` is either a home or away team.
 *
 * @param {string} teamName
 * @returns {Promise<Match[]>} - A promise that resolves to an array of matches.
 */
export const fetchMatchesForTeam = async (teamName: string): Promise<Match[]> => {
  try {
    const db = firestore();
    // Here two queries are needed since Firestore does not support logical OR in a single query
    const homeMatchesQuery = query(collection(db, "england"), where("homeTeam", "==", teamName));

    const awayMatchesQuery = query(collection(db, "england"), where("awayTeam", "==", teamName));

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
