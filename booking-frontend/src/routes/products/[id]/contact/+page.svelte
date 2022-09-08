<script lang="ts">
    import BookingDetails from "$lib/components/BookingDetails.svelte";
    import type {IProductFormData} from "$lib/types/ProductFormData";
    import {ContactField} from "$lib/types/ContactField";
    import type {IContact} from "$lib/types/Contact";
    import {bookingStore, productFormDataStore} from "$lib/stores/store";
    import type {IBooking} from "$lib/types/Booking";
    import {goto} from "$app/navigation"
    import {PriceFormatter} from "../../../../lib/utils/price.formatter";

    let productFormData: IProductFormData = {}
    let requiredContactFields: ContactField[] = []
    let contact: IContact = {}
    let booking: IBooking = {}
    let errors: {[inputName: string]: string} = {}
    let priceFormatter: PriceFormatter = new PriceFormatter();

    const value = $productFormDataStore
    if (value) {
        productFormData = <IProductFormData>value
        requiredContactFields = productFormData.requiredContactFields
    }

    function isFormValid(): boolean {
        let res: boolean = true
        errors = {}
        if ((!contact.fullName || contact.fullName.trim() == "") && requiredContactFields.indexOf(ContactField.FULL_NAME) > -1) {
            errors['fullName'] = "Full name is required"
            res = false
        }
        if ((!contact.emailAddress || contact.emailAddress.trim() == "") && requiredContactFields.indexOf(ContactField.EMAIL_ADDRESS) > -1) {
            errors['emailAddress'] = "Email address is required"
            res = false
        }
        if ((!contact.phoneNumber || contact.phoneNumber.trim() == "") && requiredContactFields.indexOf(ContactField.PHONE_NUMBER) > -1) {
            errors['phoneNumber'] = "Phone number is required"
            res = false
        }
        return res
    }

    function handleBookEvent(): void {
        if (isFormValid()) {
            booking.productId = productFormData.productId
            booking.optionId = productFormData.optionId
            booking.pricing = {
                currency: productFormData.currency,
                currencyPrecision: 2,
                price: productFormData.price
            }
            booking.unitItems = productFormData.unitItems.map(u => {
                u.price = priceFormatter.format({price: u.price, currencyPrecision: booking.pricing.currencyPrecision, currency: booking.pricing.currency})
                return u
            })
            booking.contact = contact
            bookingStore.set(booking)
            productFormDataStore.set({})
            goto("/products/"+ productFormData.productId +"/success")
        }
    }
</script>

<div class="row justify-content-md-center">
    <div class="col col-7">
        <div class="card">
            <h5 class="card-header">Contact Form</h5>
            <div class="card-body">
                <form on:submit={handleBookEvent}>
                    <div class="mb-3">
                        <label for="fullName" class="form-label">Full Name</label>
                        <input class="form-control" type="text" id="fullName" placeholder="Full Name {requiredContactFields.indexOf(ContactField.FULL_NAME) > -1 ? '(required)' : ''}" bind:value={contact.fullName}>
                        {#if errors?.fullName}
                            <div class="invalid-feedback">{errors.fullName}</div>
                        {/if}
                    </div>
                    <div class="mb-3">
                        <label for="emailAddress" class="form-label">Email Address</label>
                        <input class="form-control" type="email" id="emailAddress" placeholder="Email Address {requiredContactFields.indexOf(ContactField.EMAIL_ADDRESS) > -1 ? '(required)' : ''}" bind:value={contact.emailAddress}>
                        {#if errors?.emailAddress}
                            <div class="invalid-feedback">{errors.emailAddress}</div>
                        {/if}
                    </div>
                    <div class="mb-3">
                        <label for="phoneNumber" class="form-label">Phone Number</label>
                        <input class="form-control" type="text" id="phoneNumber" placeholder="Phone Number {requiredContactFields.indexOf(ContactField.PHONE_NUMBER) > -1 ? '(required)' : ''}" bind:value={contact.phoneNumber} required>
                        {#if errors?.phoneNumber}
                            <div class="invalid-feedback">{errors.phoneNumber}</div>
                        {/if}
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="col col-3">
        <BookingDetails
                showBookButton="{true}"
                on:bookEvent={handleBookEvent}
        />
    </div>
</div>


<style>
    .invalid-feedback {
        display: block;
    }
</style>






