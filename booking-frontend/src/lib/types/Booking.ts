import type {IPricing} from "./Pricing";
import type {IUnitItem} from "./UnitItem";
import type {IContact} from "./Contact";

export interface IBooking {
    id: string
    productId: string
    optionId: string
    pricing: IPricing
    unitItems: IUnitItem[]
    contact: IContact
}