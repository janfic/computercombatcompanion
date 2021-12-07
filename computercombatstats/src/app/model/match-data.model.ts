import { DeckData } from "./deck-data.model";
import { PlayerData } from "./player-data.model"

export class MatchData {
    id: number
    player1: string;
    player2: string;
    deck1: DeckData;
    deck2: DeckData;
    winner: number;
    starttime: string;
    endtime: string;
}
