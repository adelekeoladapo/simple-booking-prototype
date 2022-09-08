import type {IOption} from "./Option";

export interface IProduct {
    id: string
    name: string
    options: IOption[]
    defaultCurrency: string
    availableCurrencies: string[]
}