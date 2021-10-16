<script>
    import { ChevronRight } from 'svelte-hero-icons';
    import Icon from 'svelte-hero-icons/Icon.svelte'; 
    import { Breadcrumb } from '$lib/admin/store/breadcrumb.js';

</script>

<div class="flex flex-row nowrap w-auto h-auto justify-start items-center text-sm p-1 bg-primary">
    {#each $Breadcrumb as crumb}
        <a href="{crumb.path}" class="flex flex-row justify-start items-center px-1">
            {#if crumb.icon}
                <Icon src={crumb.icon} size="16"/>&nbsp;
            {/if}
            {crumb.title}
        </a>
        <Icon src={ChevronRight} size="12" />
    {/each}
</div>
