<script lang="ts">
    import {createEventDispatcher} from "svelte";
    import type {IUnitItem} from "../types/UnitItem";
    import {UnitID} from "../types/UnitID";

    export let unitId: UnitID
    export let unit: string
    export let currency: string
    export let unitPrice: number
    export let value: number = 0
    $: total = value * unitPrice

    const dispatch = createEventDispatcher()

    function add(): void {
        value++
        dispatchUnitItem()
    }

    function subtract(): void {
        if (value > 0) {
            value--
            dispatchUnitItem()
        }
    }

    function dispatchUnitItem(): void {
        let unitItem: IUnitItem = {
            unitId: unitId,
            quantity: value,
            price: value * unitPrice
        }
        dispatch('unitItemMessage', {
            item: unitItem
        })
    }
</script>

<div class="unit-counter">
    <span>{unit} ({unitPrice} {currency})</span>
    <span class="counter-container">
        <button type="button" class="minus" on:click={subtract}>-</button>
        <span class="value">{value}</span>
        <button type="button" class="plus" on:click={add}>+</button>
    </span>
</div>

<style>
    .unit-counter {
        margin-top: 15px;
        border: solid 1px #ddd;
        border-radius: 5px;
        padding: 6px;
    }

    .counter-container {
        border-left: solid 1px #ddd;
        float: right;
        margin: -6px;
        text-align: center;
    }

    .counter-container .minus, .counter-container .plus, .counter-container .value {
        border: solid 1px transparent;
        cursor: pointer;
        padding: 5px 10px 5px 10px;
        width:30px;
    }

    .counter-container .minus:hover , .counter-container .plus:hover {
        background-color: #ddd;
    }

</style>