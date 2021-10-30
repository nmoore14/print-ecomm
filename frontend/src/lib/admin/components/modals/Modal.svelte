<script>
    import { isOpen } from '$lib/admin/store/modalStore.js';

    export let form;
</script>

<input type="checkbox" id="my-modal-checkbox" class="modal-toggle" checked={$isOpen ? 'checked' : '' }>
<div id="my-modal" class="w-full modal" on:click|self={ isOpen.toggle }>
    <div class="modal-box max-w-full w-4/5">
        <div class="flex flex-row nowrap w-full justify-end items-center">
            <button class="btn btn-sm bg-base-200 hover:bg-warning" on:click={ isOpen.toggle }>
                <p class="text-base-content">CLOSE</p>
            </button> 
        </div>
        <svelte:component this={ form }/>
    </div>
</div>
