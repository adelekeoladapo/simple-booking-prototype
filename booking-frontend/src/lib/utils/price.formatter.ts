import type {IPricing} from "../types/Pricing";

export class PriceFormatter {

    public format(pricing: IPricing): number {
        return (pricing.price / Math.pow(10, pricing.currencyPrecision))
    }

}