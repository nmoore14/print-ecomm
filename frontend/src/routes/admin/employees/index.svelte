<script context="module">
    export const ssr = false;

    export async function load({ fetch }) {
        const res = await fetch('http://localhost:8080/users', { mode: 'cors' });

        if (res.ok) {
            return { 
                props: { 
                    employees: await res.json()
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

    export let employees;
    
    onMount(() => {
        Breadcrumb.updateBreadcrumb([
            {
                "title": "Home",
                "path": "/admin",
            },
            {
                "title": "Employees",
                "path": "/admin/employees",
            },
        ]);
    });
</script>
<div class="w-full h-full">
    <UserTableHeader tableTitle={"Employees"} />
    {#await employees}
        <p>...loading users</p>
    {:then employees}
        <UsersTable users={ employees } />
    {:catch error}
        <p>Error Loading Employees</p>
    {/await}
</div>
