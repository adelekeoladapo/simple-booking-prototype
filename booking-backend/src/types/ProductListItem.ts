import {IPricing} from "./Pricing";

export interface IProductListItem {
    id: string
    name: string
    priceFrom: IPricing
}