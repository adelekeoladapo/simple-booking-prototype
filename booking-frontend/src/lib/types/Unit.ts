import type {UnitID} from "./UnitID";
import type {IPricing} from "./Pricing";

export interface IUnit {
    id: UnitID
    name: string
    pricing: IPricing[]
}