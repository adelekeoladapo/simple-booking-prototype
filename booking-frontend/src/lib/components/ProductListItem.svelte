<script lang="ts">
    import {PriceFormatter} from "../utils/price.formatter";

    export let id, name, priceFrom
    const priceFormatter: PriceFormatter = new PriceFormatter();
</script>

<div class="row item">
    <div class="col-9 p-2 item-name">
        <h4>{name}</h4>
    </div>
    <div class="col-3 p-2 d-grid gap-2 text-center">
        <em class="small">Price from: </em>
        <div>{priceFormatter.format(priceFrom)} {priceFrom.currency}</div>
        <a href="/products/{id}" class="btn btn-primary btn-sm">Select</a>
    </div>
</div>

<style>
    .item {
        border: solid 1px #ddd;
        margin-bottom: 10px;
        border-radius: 5px;
    }

    .item .item-name {
        /*border: solid 1px red;*/
    }

    .item .item-name h4 {
        border-right: dashed 1px #ddd;
        margin-top: 15px;
    }

    .small {
        font-size: 12px;
        margin-bottom: -10px;
    }

    .btn {
        margin-top: -5px;
    }
</style>