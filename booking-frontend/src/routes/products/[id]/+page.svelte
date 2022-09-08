<script lang="ts">
    import ProductForm from "$lib/components/ProductForm.svelte";
    import BookingDetails from "$lib/components/BookingDetails.svelte";
    import {goto} from "$app/navigation"
    import {onMount} from "svelte";
    import {ProductService} from "$lib/services/product.service";
    import type {IProduct} from "$lib/types/Product";
    import {page} from "$app/stores";

    let product: IProduct
    const productService: ProductService = new ProductService()

    onMount(() => {
        const productId = $page.params.id
        productService.getProduct(productId).then(data => {
            product = data
        }).catch(error => {
            console.log("Error occurred")
            console.log(error)
        })
    })

    function handleContinueEvent(): void {
        goto("/products/3/contact")
    }

</script>

<div class="row justify-content-md-center">
    <div class="col col-7">
        {#if (product !== undefined)}
        <ProductForm
                productId="{product.id}"
                productName="{product.name}"
                defaultCurrency="{product.defaultCurrency}"
                availableCurrencies="{product.availableCurrencies}"
                options="{product.options}"
        />
        {/if}
    </div>
    <div class="col col-3">
        <BookingDetails
                showContinueButton="{true}"
                on:continueEvent={handleContinueEvent}
        />
    </div>
</div>
