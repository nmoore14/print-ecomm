<script>
    import { isOpen } from '$lib/admin/store/modalStore.js';
    import Modal from '$lib/admin/components/modals/Modal.svelte';

    import AddUserForm from '../forms/addUserForm.svelte';
    import AddCustomerForm from '../forms/addCustomerForm.svelte';

    import Icon from 'svelte-hero-icons/Icon.svelte';
    import { Trash, Plus, Download, Users } from 'svelte-hero-icons';

    export let tableTitle;
   
</script>
<div class="flex flex-row nowrap justify-between items-center mt-4 mb-6 py-2 px-4" id="customersList-header">
    <h1 class="flex flex-row nowrap justify-around items-center text-2xl font-sans text-base-content">
        <Icon src="{ Users }" size="32" solid />
        &nbsp;
        { tableTitle }
    </h1>
    <div class="btn-group">
        <button class="btn btn-secondary text-white" on:click={ isOpen.toggle }>
            <Icon src="{ Plus }" size="16" solid />
            &nbsp;
            Add
        </button>
        <button class="btn btn-secondary text-white">
            <Icon src="{ Download }" size="16" solid />
            &nbsp;
            Export
        </button>
        <button class="btn btn-outline btn-error">
            <Icon src="{ Trash }" size="16" solid />
            &nbsp;
            Delete
        </button>
    </div>
</div>
<Modal form={ tableTitle === 'Employees' ? AddUserForm : AddCustomerForm } />
