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
    import { Breadcrumb } from '$lib/admin/store/breadcrumb.js';
    
    import UsersTable from '$lib/admin/components/tables/users_table.svelte';
    import UserTableHeader from '$lib/admin/components/tables/user_table_header.svelte';

    export let users;
    
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
    <UserTableHeader tableTitle={"Customers"} />
    <UsersTable users={ users } />
</div>
