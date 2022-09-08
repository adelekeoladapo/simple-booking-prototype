<script lang="ts">
    import UnitCounter from "./UnitCounter.svelte";
    import type {IOption} from "../types/Option";
    import {onMount} from "svelte";
    import type {IUnit} from "../types/Unit";
    import type {IUnitItem} from "../types/UnitItem";
    import type {IProductFormData} from "../types/ProductFormData";
    import {productFormDataStore} from "../stores/store";
    import {ContactField} from "../types/ContactField";
    import {PriceFormatter} from "../utils/price.formatter";

    export let productId: string
    export let productName: string
    export let availableCurrencies: string[]
    export let defaultCurrency: string
    export let options: IOption[]
    let defaultOption: IOption
    let requiredContactFields: ContactField[] = []
    let units: IUnit[] = []
    let unitItems: IUnitItem[] = []
    let productFormData: IProductFormData = {}
    let priceFormatter: PriceFormatter = new PriceFormatter();

    onMount(() => {
        const productFormDataStoreValue = <IProductFormData>$productFormDataStore
        if (productFormDataStoreValue.productId) {
            productName = productFormDataStoreValue.productName
            defaultCurrency = productFormDataStoreValue.currency
            defaultOption = options.find(o => o.id === productFormDataStoreValue.optionId)
            unitItems = productFormDataStoreValue.unitItems
            requiredContactFields = productFormDataStoreValue.requiredContactFields
            units = defaultOption.units
        } else {
            defaultOption = options.find(o => o.default)
            units = defaultOption.units
            requiredContactFields = defaultOption.requiredContactFields
        }
        updateProductFormData()
    })

    function handleUnitItemMessage(event): void {
        updateUnitItems(event.detail.item)
    }

    function updateUnitItems(unitItem: IUnitItem): void {
        let item: IUnitItem = unitItems.find(u => u.unitId === unitItem.unitId)
        if (!item) {
            unitItems.push(unitItem)
        } else {
            item.quantity = unitItem.quantity
            item.price = unitItem.price
            unitItems = unitItems.map(it => {
                if (it.unitId === item.unitId)
                    it = item
                return it
            }).filter(it => it.quantity > 0)
        }
        updateProductFormData()
    }

    function updateProductFormData(): void {
        productFormData.currency = defaultCurrency
        productFormData.productId = productId
        productFormData.productName = productName
        productFormData.optionId = defaultOption.id
        productFormData.optionName = defaultOption.name
        unitItems = unitItems.map(ui => {
            ui.price = units.find(u => u.id === ui.unitId).pricing.find(p => p.currency === defaultCurrency).price
            return ui
        })
        productFormData.unitItems = unitItems
        productFormData.requiredContactFields = requiredContactFields
        productFormData.price = calculateTotalPrice()
        productFormData.currencyPrecision = 2
        updateProductFormDataStore()
    }

    function updateProductFormDataStore(): void {
        productFormDataStore.set(productFormData)
    }

    function calculateTotalPrice(): number {
        let total = 0;
        unitItems.forEach(item => {
            total += item.quantity * item.price
        })
        return total
    }


</script>

<div class="card">
    <h5 class="card-header">{productName}</h5>
    <div class="card-body">
        <form>
            <div class="mb-3">
                <label for="currency" class="form-label">Select currency</label>
                <select class="form-select" id="currency" bind:value={defaultCurrency} on:change={updateProductFormData}>
                    {#each availableCurrencies as currency}
                        <option>{currency}</option>
                    {/each}
                </select>
            </div>
            <div class="mb-3">
                <label for="option" class="form-label">Select option</label>
                <select class="form-select" id="option" bind:value={defaultOption} on:change={() => {units = defaultOption.units; requiredContactFields = defaultOption.requiredContactFields; updateProductFormData()}}>
                    {#each options as option}
                        <option value="{option}">{option.name}</option>
                    {/each}
                </select>
            </div>
            {#each units as unit, i}
                <UnitCounter
                        unitId="{unit.id}"
                        unit="{unit.name}"
                        currency="{defaultCurrency}"
                        unitPrice="{priceFormatter.format(unit.pricing.find(p => p.currency === defaultCurrency))}"
                        value="{unitItems.length > 0 && unitItems.find(u => u.unitId === unit.id) ? unitItems.find(u => u.unitId === unit.id).quantity : 0}"
                        on:unitItemMessage={handleUnitItemMessage}
                />
            {/each}

        </form>
    </div>
</div>
