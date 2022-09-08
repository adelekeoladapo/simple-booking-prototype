<script lang="ts">
import NavBar from "../lib/components/NavBar.svelte";
</script>

<div class="container-fluid">

    <NavBar/>

    <main>
        <slot />
    </main>

    <footer>
        <p>&copy footer</p>
    </footer>
</div>



<style>
    footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 40px;
    }
</style>