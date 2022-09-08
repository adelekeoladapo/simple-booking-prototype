<script lang="ts">

    import type {IProductListItem} from "$lib/types/ProductListItem";
    import ProductListItem from "$lib/components/ProductListItem.svelte";
    import {onMount} from "svelte";
    import {ProductService} from "../lib/services/product.service";
    import {productFormDataStore} from "../lib/stores/store";

    let productList: IProductListItem[]
    const productService: ProductService = new ProductService()

    onMount(() => {
        productFormDataStore.set({})
        productService.getProducts().then(data => {
            productList = data
        }).catch(error => {
            console.log("Error occurred")
            console.log(error)
        })
    })

</script>

<div class="row justify-content-md-center">
    {#if productList !== undefined}
        <div class="col col-8">
            {#each productList as product}
                <ProductListItem id="{product.id}" name="{product.name}" priceFrom="{product.priceFrom}"/>
            {/each}
        </div>
    {/if}
</div>