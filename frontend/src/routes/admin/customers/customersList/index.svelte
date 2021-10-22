<script context="module">
    export async function load({ fetch }) {
        const res = await fetch('/api/admin/customersList');

        if (res.ok) {
            return { 
                props: { 
                    users: await res.json()
                }
            };
        }

        return {
            status: res.status,
            error: new Error(),
        };
    }
</script>

<script>
    import { onMount } from 'svelte';
    import Icon from 'svelte-hero-icons/Icon.svelte';
    import { Pencil, Trash, Plus, Download, Users } from 'svelte-hero-icons';
    import { Breadcrumb } from '$lib/admin/store/breadcrumb.js';

    export let users;

    let allChecked = false;
    
    onMount(() => {
        Breadcrumb.updateBreadcrumb([
            {
                "title": "Home",
                "path": "/admin",
            },
            {
                "title": "Customers",
                "path": "/admin/customers",
            },
            {
                "title": "Customers List",
                "path": "/admin/customers/customersList",
            },
        ]);
    });
</script>

<div class="w-full h-full">
    <div class="flex flex-row nowrap justify-between items-center mt-4 mb-6 py-2 px-4" id="customersList-header">
        <h1 class="flex flex-row nowrap justify-around items-center text-2xl font-sans text-base-content">
            <Icon src="{ Users }" size="32" solid />
            &nbsp;
            Customers
        </h1>
        <div class="btn-group">
            <button class="btn btn-secondary text-white">
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
    <div class="w-full h-full overflow-x-auto">
        <table class="w-full table-compact bg-base-200 rounded-lg">
            <thead class="bg-primary text-white">
                <tr class="text-left">
                    <th class="rounded-tl-lg">
                        <div class="form-control">
                            <label class="cursor-pointer label">
                                <input type="checkbox" class="checkbox checkbox-accent" bind:checked={allChecked}>
                            </label>
                        </div>
                    </th>
                    <th>Name</th>
                    <th>Company</th>
                    <th>E-Mail</th>
                    <th>Phone</th>
                    <th class="rounded-tr-lg">Actions</th>
                </tr>
            </thead>
            <tbody class="text-base-content">
                {#each users as user}
                    <tr class="border border-t-0 border-r-0 border-l-0 border-b-1 border-accent">
                        <td>
                            <div class="form-control">
                                <label class="cursor-pointer label">
                                    <input type="checkbox" class="checkbox checkbox-accent" checked={allChecked ? 'checked' : '' }>
                                </label>
                            </div>
                        </td>
                        <td>{ user.firstName } { user.lastName } </td>
                        <td>{ user.company }</td>
                        <td>{ user.userEmail }</td>
                        <td>{ user.phone }</td>
                        <td>
                            <div class="btn-group">
                                <button class="btn btn-sm btn-primary"><Icon src="{ Pencil }" size="16" /></button>
                                <button class="btn btn-sm btn-outline btn-error"><Icon src="{ Trash }" size="16" solid /></button>
                            </div>
                        </td>
                    </tr>
                {/each}
            </tbody>
            <tfoot class="bg-primary text-base-200 text-left">
                <tr>
                    <th class="rounded-bl-lg">
                        <div class="form-control">
                            <label class="cursor-pointer label">
                                <input type="checkbox" class="checkbox checkbox-accent" bind:checked={allChecked}>
                            </label>
                        </div>
                    </th>
                    <th>Name</th>
                    <th>Company</th>
                    <th>E-Mail</th>
                    <th>Phone</th>
                    <th class="rounded-br-lg">Actions</th>
                </tr>
            </tfoot>
        </table>
    </div>
</div>
