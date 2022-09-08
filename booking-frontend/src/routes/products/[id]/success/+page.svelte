<script lang="ts">
    import {bookingStore} from "$lib/stores/store";
    import type {IBooking} from "$lib/types/Booking";

    let bookingData: IBooking = {}

    bookingStore.subscribe(value => {
        bookingData = <IBooking>value
    })

    console.log(bookingData)

</script>
<h3 class="m-5 text-center">Booking Successful</h3>
<div class="text-center">
    <a href="/" class="btn btn-primary">Home Page</a>
</div>