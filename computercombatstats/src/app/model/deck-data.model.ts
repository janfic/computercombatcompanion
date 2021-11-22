import { CardData } from "./card-data.model";
import { PlayerData } from "./player-data.model";

export class DeckData {
    name: string;
    id: number;
    owner: string;
    cards: CardData[];
}
