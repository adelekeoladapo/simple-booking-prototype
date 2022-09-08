import {Router} from "itty-router";
import {Product, Products} from "./product.handler";

const router = Router()

router
    .get('/api/products', Products)
    .get('/api/products/:id', Product)
    .get('*', () => new Response('Not found', {status: 404}))

export const handleRequest = (request: any) => router.handle(request)