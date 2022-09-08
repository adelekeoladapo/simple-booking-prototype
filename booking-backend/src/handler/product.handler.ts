import {ProductRepository} from "../repository/product.repository";

const productRepository = new ProductRepository()
const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json'
}

export const Products = async () => {
    const body = JSON.stringify(await productRepository.getAllPosts())
    return new Response(body, {headers})
}

export const Product = async (request: any) => {
    const productId = request.params.id;
    const body = JSON.stringify(await productRepository.find(productId))
    return new Response(body, {headers})
}