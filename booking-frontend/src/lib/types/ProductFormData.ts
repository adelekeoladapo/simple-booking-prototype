import type {IUnitItem} from "./UnitItem";
import type {ContactField} from "./ContactField";

export interface IProductFormData {
    currency: string
    productId: string
    productName: string
    optionId: string
    optionName: string
    unitItems: IUnitItem[]
    price: number
    currencyPrecision: number
    requiredContactFields: ContactField[]
}