<script lang="ts">
    function goHome(): void {
        location.href = "/"
    }
</script>

<nav class="navbar bg-light mb-4">
    <div class="container-fluid">
        <span class="navbar-brand clickable" on:click={goHome}>Simple Booking Prototype</span>
    </div>
</nav>

<style>
    .clickable {
        cursor: pointer;
    }
</style>