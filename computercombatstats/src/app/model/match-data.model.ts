import { DeckData } from "./deck-data.model";
import { PlayerData } from "./player-data.model"

export class MatchData {
    id: number
    player_1: PlayerData;
    player_2: PlayerData;
    deck_1: DeckData;
    deck_2: DeckData;
    winner: number;
}
