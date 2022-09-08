import {IProductListItem} from "../types/ProductListItem";
import {IPricing} from "../types/Pricing";

export class Utils {

    public generateProductListItemFromProduct(product: any): IProductListItem {
        return {
            id: product.id,
            name: product.name,
            // @ts-ignore
            priceFrom: this.findLowestPriceWithCurrencyFromOption(product.options.find(o => o.default), product.defaultCurrency)
        }
    }

    private findLowestPriceWithCurrencyFromOption(option: any, currency: string): IPricing {
        // @ts-ignore
        let matrix: any = option.units.map(u => {return u.pricing})
        let vector: any = []
        for (let m of matrix) {
            for (let n of m) {
                if (n.currency === currency) {
                    vector.push(n)
                }
            }
        }
        return vector.reduce((prev: { price: number; }, curr: { price: number; }) => prev.price < curr.price ? prev : curr)
    }


}