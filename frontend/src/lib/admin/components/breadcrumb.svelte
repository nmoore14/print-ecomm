<script>
    import { ChevronRight, Home } from 'svelte-hero-icons';
    import Icon from 'svelte-hero-icons/Icon.svelte'; 
    import { Breadcrumb } from '$lib/admin/store/breadcrumb.js';

</script>

<div class="flex flex-row nowrap w-auto h-auto justify-start items-center text-sm px-1 py-2 rounded-b-md bg-primary">
    {#each $Breadcrumb as crumb}
        <a href="{crumb.path}" class="flex flex-row justify-start items-center px-1">
            {#if crumb.title === "Home"}
                <Icon src={Home} size="16"/>&nbsp;
            {/if}
            {crumb.title}
        </a>
        <Icon src={ChevronRight} size="12" />
    {/each}
</div>
