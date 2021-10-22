<script>
    import { onMount } from 'svelte';
    import { Breadcrumb } from '$lib/admin/store/breadcrumb.js';

    onMount(() => {
        Breadcrumb.updateBreadcrumb([
            {
                "title": "Home",
                "path": "/admin",
            },
            {
                "title": "Products",
                "path": "/admin/products",
            },
        ]);
    });
</script>
<h1 class="text-base-content">Welcome to Products Page! I don't know how you got here</h1>
