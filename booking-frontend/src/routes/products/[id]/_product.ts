import type {IProduct} from "../../../lib/types/Product";
import {ContactField} from "../../../lib/types/ContactField";
import {UnitID} from "../../../lib/types/UnitID";

export const _product: IProduct = {
    id: "1",
    name: "Germany City Tour",
    options: [
        {
            id: "1",
            name: "Basic",
            default: false,
            requiredContactFields: [ContactField.PHONE_NUMBER],
            units: [
                {
                    id: UnitID.ADULT,
                    name: "Adult",
                    pricing: [
                        {
                            currency: "EUR",
                            currencyPrecision: 2,
                            price: 1499
                        },{
                            currency: "USD",
                            currencyPrecision: 2,
                            price: 1249
                        },{
                            currency: "NGN",
                            currencyPrecision: 2,
                            price: 980000
                        }
                    ]
                },{
                    id: UnitID.CHILD,
                    name: "Child",
                    pricing: [
                        {
                            currency: "EUR",
                            currencyPrecision: 2,
                            price: 2199
                        },{
                            currency: "USD",
                            currencyPrecision: 2,
                            price: 2049
                        },{
                            currency: "NGN",
                            currencyPrecision: 2,
                            price: 560000
                        }
                    ]
                },{
                    id: UnitID.SENIOR,
                    name: "Senior",
                    pricing: [
                        {
                            currency: "EUR",
                            currencyPrecision: 2,
                            price: 1599
                        },{
                            currency: "USD",
                            currencyPrecision: 2,
                            price: 1579
                        },{
                            currency: "NGN",
                            currencyPrecision: 2,
                            price: 730000
                        }
                    ]
                }
            ]
        },{
            id: "2",
            name: "Standard",
            default: true,
            requiredContactFields: [ContactField.PHONE_NUMBER, ContactField.FULL_NAME],
            units: [
                {
                    id: UnitID.ADULT,
                    name: "Adult",
                    pricing: [
                        {
                            currency: "EUR",
                            currencyPrecision: 2,
                            price: 100
                        },{
                            currency: "USD",
                            currencyPrecision: 2,
                            price: 101
                        },{
                            currency: "NGN",
                            currencyPrecision: 2,
                            price: 60000
                        }
                    ]
                },{
                    id: UnitID.SENIOR,
                    name: "Senior",
                    pricing: [
                        {
                            currency: "EUR",
                            currencyPrecision: 2,
                            price: 200
                        },{
                            currency: "USD",
                            currencyPrecision: 2,
                            price: 201
                        },{
                            currency: "NGN",
                            currencyPrecision: 2,
                            price: 120000
                        }
                    ]
                },{
                    id: UnitID.INFANT,
                    name: "Infant",
                    pricing: [
                        {
                            currency: "EUR",
                            currencyPrecision: 2,
                            price: 1000
                        },{
                            currency: "USD",
                            currencyPrecision: 2,
                            price: 1100
                        },{
                            currency: "NGN",
                            currencyPrecision: 2,
                            price: 650000
                        }
                    ]
                }
            ]
        },{
            id: "3",
            name: "VIP",
            default: false,
            requiredContactFields: [ContactField.PHONE_NUMBER, ContactField.FULL_NAME, ContactField.EMAIL_ADDRESS],
            units: [
                {
                    id: UnitID.ADULT,
                    name: "Adult",
                    pricing: [
                        {
                            currency: "EUR",
                            currencyPrecision: 2,
                            price: 5000
                        },{
                            currency: "USD",
                            currencyPrecision: 2,
                            price: 5500
                        },{
                            currency: "NGN",
                            currencyPrecision: 2,
                            price: 800000
                        }
                    ]
                },{
                    id: UnitID.CHILD,
                    name: "Child",
                    pricing: [
                        {
                            currency: "EUR",
                            currencyPrecision: 2,
                            price: 3000
                        },{
                            currency: "USD",
                            currencyPrecision: 2,
                            price: 3500
                        },{
                            currency: "NGN",
                            currencyPrecision: 2,
                            price: 1800000
                        }
                    ]
                },{
                    id: UnitID.SENIOR,
                    name: "Senior",
                    pricing: [
                        {
                            currency: "EUR",
                            currencyPrecision: 2,
                            price: 3500
                        },{
                            currency: "USD",
                            currencyPrecision: 2,
                            price: 3700
                        },{
                            currency: "NGN",
                            currencyPrecision: 2,
                            price: 730000
                        }
                    ]
                }
            ]
        },
    ],
    defaultCurrency: "USD",
    availableCurrencies: ["EUR", "USD", "NGN"]
}