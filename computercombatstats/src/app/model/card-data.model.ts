import { AbilityData } from "./ability-data.model";
import { ComponentData } from "./component-data.model";

export class CardData {
    name: string;
    id: number;
    collection: number;
    textureName: string;
    maxHealth: number;
    maxAttack: number;
    maxDefense: number;
    runRequirements: number;
    ability: AbilityData;
    runComponents: ComponentData[];
}
