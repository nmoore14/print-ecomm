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
            {
                "title": "Products List",
                "path": "/admin/products/productsList",
            },
        ]);
    });
</script>

<h1 class="text-base-content">Products</h1>
