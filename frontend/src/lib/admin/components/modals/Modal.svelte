<script>
    import { isOpen } from '$lib/admin/store/modalStore.js';

    export let form;
</script>

<div id="my-modal" class="modal {$isOpen ? 'isOpen': ''}">
    <div class="modal-box">
        <svelte:component this={form} />
    </div>
</div>

<style>
    #my-modal {
        display: none;
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
    }

    .isOpen {
        display: flex;
    }
</style>
