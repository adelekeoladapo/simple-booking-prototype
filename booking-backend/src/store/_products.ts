export const _products = [
    {
        id: "1",
        name: "Lagos City Tour",
        options: [
            {
                id: "1",
                name: "Basic",
                default: true,
                requiredContactFields: ["phoneNumber"],
                units: [
                    {
                        id: "adult",
                        name: "Adult",
                        pricing: [
                            {
                                currency: "EUR",
                                currencyPrecision: 2,
                                price: 1000
                            },{
                                currency: "USD",
                                currencyPrecision: 2,
                                price: 928
                            },{
                                currency: "NGN",
                                currencyPrecision: 2,
                                price: 600000
                            }
                        ]
                    },{
                        id: "child",
                        name: "Child",
                        pricing: [
                            {
                                currency: "EUR",
                                currencyPrecision: 2,
                                price: 500
                            },{
                                currency: "USD",
                                currencyPrecision: 2,
                                price: 422
                            },{
                                currency: "NGN",
                                currencyPrecision: 2,
                                price: 300000
                            }
                        ]
                    }
                ]
            },{
                id: "2",
                name: "VIP",
                default: false,
                requiredContactFields: ["phoneNumber", "fullName", "emailAddress"],
                units: [
                    {
                        id: "adult",
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
                                price: 3000000
                            }
                        ]
                    },{
                        id: "child",
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
                                price: 4000000
                            }
                        ]
                    }
                ]
            },
        ],
        defaultCurrency: "NGN",
        availableCurrencies: ["USD", "EUR", "NGN"]
    },{
        id: "2",
        name: "Germany City Tour",
        options: [
            {
                id: "1",
                name: "Basic",
                default: false,
                requiredContactFields: ["phoneNumber"],
                units: [
                    {
                        id: "adult",
                        name: "Adult",
                        pricing: [
                            {
                                currency: "EUR",
                                currencyPrecision: 2,
                                price: 1499
                            },{
                                currency: "USD",
                                currencyPrecision: 2,
                                price: 1525
                            },{
                                currency: "GBP",
                                currencyPrecision: 2,
                                price: 1245
                            }
                        ]
                    },{
                        id: "child",
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
                                currency: "GBP",
                                currencyPrecision: 2,
                                price: 1855
                            }
                        ]
                    },{
                        id: "senior",
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
                                currency: "GBP",
                                currencyPrecision: 2,
                                price: 1247
                            }
                        ]
                    }
                ]
            },{
                id: "2",
                name: "Standard",
                default: true,
                requiredContactFields: ["phoneNumber", "fullName"],
                units: [
                    {
                        id: "adult",
                        name: "Adult",
                        pricing: [
                            {
                                currency: "EUR",
                                currencyPrecision: 2,
                                price: 1899
                            },{
                                currency: "USD",
                                currencyPrecision: 2,
                                price: 2086
                            },{
                                currency: "GBP",
                                currencyPrecision: 2,
                                price: 1643
                            }
                        ]
                    },{
                        id: "child",
                        name: "Child",
                        pricing: [
                            {
                                currency: "EUR",
                                currencyPrecision: 2,
                                price: 2099
                            },{
                                currency: "USD",
                                currencyPrecision: 2,
                                price: 2245
                            },{
                                currency: "GBP",
                                currencyPrecision: 2,
                                price: 1858
                            }
                        ]
                    },{
                        id: "senior",
                        name: "Senior",
                        pricing: [
                            {
                                currency: "EUR",
                                currencyPrecision: 2,
                                price: 2500
                            },{
                                currency: "USD",
                                currencyPrecision: 2,
                                price: 2745
                            },{
                                currency: "GBP",
                                currencyPrecision: 2,
                                price: 2355
                            }
                        ]
                    }
                ]
            },{
                id: "3",
                name: "VIP",
                default: false,
                requiredContactFields: ["phoneNumber", "fullName", "emailAddress"],
                units: [
                    {
                        id: "adult",
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
                                currency: "GBP",
                                currencyPrecision: 2,
                                price: 4800
                            }
                        ]
                    },{
                        id: "child",
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
                                currency: "GBP",
                                currencyPrecision: 2,
                                price: 2800
                            }
                        ]
                    },{
                        id: "senior",
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
                                currency: "GBP",
                                currencyPrecision: 2,
                                price: 3200
                            }
                        ]
                    }
                ]
            },
        ],
        defaultCurrency: "EUR",
        availableCurrencies: ["USD", "EUR", "GBP"]
    }
]