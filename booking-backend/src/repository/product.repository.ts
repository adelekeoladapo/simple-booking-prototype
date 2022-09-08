import {_products} from "../store/_products";
import {Utils} from "../utils/utils";

export class ProductRepository {

    async getAllPosts() {
        const utils: Utils = new Utils();
        return _products.map(p => {
            return utils.generateProductListItemFromProduct(p)
        })
    }

    async find(id: string) {
        return _products.find(product => product.id == id)
    }

}