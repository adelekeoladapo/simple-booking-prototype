<script lang="ts">
    import type {IProductFormData} from "../types/ProductFormData";
    import {productFormDataStore} from "../stores/store";
    import {createEventDispatcher} from "svelte";
    import {PriceFormatter} from "../utils/price.formatter";

    export let showBookButton: boolean = false
    export let showContinueButton: boolean = false
    let productFormData: IProductFormData
    const priceFormatter: PriceFormatter = new PriceFormatter()

    const dispatch = createEventDispatcher()

    productFormDataStore.subscribe(value => {
        productFormData = <IProductFormData>value
    })

    function dispatchBookEvent(): void {
        dispatch('bookEvent')
    }

    function dispatchContinueEvent(): void {
        dispatch('continueEvent')
    }
</script>

<div class="card">
    <h5 class="card-header">Booking Details</h5>
    <div class="card-body">
        {#if productFormData.productName}
            <div>
                <p>{productFormData.productName}</p>
                <p>Option: {productFormData.optionName}</p>
                {#if productFormData.unitItems.length > 0}
                    <div class="price-table">
                        <div class="row header p-2">
                            <div class="col">Details</div>
                            <div class="col right">Amount</div>
                        </div>
                        {#each productFormData.unitItems as item}
                            <div class="row p-1">
                                <div class="col">{item.quantity} x {item.unitId}</div>
                                <div class="col right">{priceFormatter.format({price: item.price * item.quantity, currencyPrecision: productFormData.currencyPrecision, currency: productFormData.currency})} {productFormData.currency}</div>
                            </div>
                        {/each}
                        <div class="row footer p-1">
                            <div class="col">Total</div>
                            <div class="col right">{priceFormatter.format({price: productFormData.price, currencyPrecision: productFormData.currencyPrecision, currency: productFormData.currency})} {productFormData.currency}</div>
                        </div>
                        <div class="d-grid gap-2 text-center button-container">
                            {#if showBookButton}
                                <button class="btn btn-primary" on:click={dispatchBookEvent}>Book</button>
                            {/if}
                            {#if showContinueButton}
                                <button class="btn btn-primary" on:click={dispatchContinueEvent}>Continue</button>
                            {/if}
                        </div>

                    </div>
                {/if}
            </div>
        {/if}
    </div>
</div>

<style>
    .price-table {}

    .price-table .header {
        background-color: #f7f7f7;
    }

    .right {
        text-align: right;
    }

    .price-table .footer {
        border-top: dashed 1px #ddd;
        margin-top: 5px;
    }

    .price-table .button-container {
        margin-top: 5px;
    }

</style>