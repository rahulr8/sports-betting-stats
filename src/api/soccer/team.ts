import { query, getDocs, where, collection, DocumentData } from "firebase/firestore";

import { firestore } from "api/firebase";
import { Match } from "types/soccer/match";
import { TeamCodeKey } from "constants/soccer/teams";
import { SoccerStatsCollection } from "./stats";
import { SoccerLeagueCode } from "types/soccer/league";

export const fetchMatchesForTeam = async (teamName: TeamCodeKey, leagueCode: SoccerLeagueCode): Promise<Match[]> => {
  try {
    const matchesCollection = SoccerStatsCollection[leagueCode];

    const homeMatchesQuery = query(matchesCollection, where("homeTeam", "==", teamName));
    const awayMatchesQuery = query(matchesCollection, where("awayTeam", "==", teamName));

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

export const fetchAllMatches = async (leagueCode: SoccerLeagueCode): Promise<Match[]> => {
  try {
    const matchesQuery = query(collection(firestore(), leagueCode));
    const querySnapshot = await getDocs(matchesQuery);

    const matches: Match[] = [];

    querySnapshot.forEach((doc: DocumentData) => {
      matches.push({ id: doc.id, ...doc.data() } as Match);
    });

    return matches;
  } catch (error) {
    console.error("Error fetching matches: ", error);
    throw error;
  }
};
