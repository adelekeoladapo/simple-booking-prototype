import type {IProduct} from "../types/Product";
import type {IProductListItem} from "../types/ProductListItem";

export class ProductService {

    readonly baseUrl = "https://booking-backend.dapoadeleke.workers.dev"

    async getProduct(id: string): Promise<IProduct> {
        const response = await fetch(this.baseUrl + "/api/products/" + id)
        return await response.json()
    }

    async getProducts(): Promise<IProductListItem[]> {
        const response = await fetch(this.baseUrl + "/api/products/")
        return await response.json()
    }
}