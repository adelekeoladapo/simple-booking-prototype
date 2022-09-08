import type {IPricing} from "./Pricing";

export interface IProductListItem {
    id: number
    name: string
    priceFrom: IPricing
}