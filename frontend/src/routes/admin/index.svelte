<script>
    import { onMount } from 'svelte';
    import { Breadcrumb } from '$lib/admin/store/breadcrumb.js'

    onMount(() => {
        Breadcrumb.reset();
    });
</script>
<h1 class="text-base-content">This is admin homepage</h1>
