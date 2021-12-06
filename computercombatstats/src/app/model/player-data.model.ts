import { DeckData } from "./deck-data.model";
import { MatchData } from "./match-data.model";

export class PlayerData {
    username: string;
    uid: string;
    matches: MatchData[]
    decks: DeckData[]
}
