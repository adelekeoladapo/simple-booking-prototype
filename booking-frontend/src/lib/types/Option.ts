import type {ContactField} from "./ContactField";
import type {IUnit} from "./Unit";

export interface IOption {
    id: string
    default: boolean
    name: string
    requiredContactFields: ContactField[]
    units: IUnit[]
}