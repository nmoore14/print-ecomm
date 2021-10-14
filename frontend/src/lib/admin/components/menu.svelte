<script>
    import { onMount } from 'svelte';
    import { scale } from 'svelte/transition';
    import Icon from 'svelte-hero-icons/Icon.svelte';

    import { ChevronRight, ChevronDown } from 'svelte-hero-icons';

    import menuItems from '$lib/admin/menuItems.cjs';

    let show = false;
    let menu = null;

    onMount(() => {
        const handleOutsideClick = (event) => {
            if (show && !menu.contains(event.target)) {
                show = false;
            }
        };

        const handleEscape = (event) => {
            if (show && event.key === 'Escape') {
                show = false;
            }
        };

        document.addEventListener('click', handleOutsideClick, false);
        document.addEventListener('keyup', handleEscape, false);

        return () => {
            document.removeEventListener('click', handleOutsideClick, false);
            document.removeEventListener('keyup', handleEscape, false);
        };
    });

</script>
<div bind:this={menu} class="flex flex-col w-2/3 h-full">
    {#each menuItems as item}
        {#if item.path}
            <a href="{item.path}">{item.title}</a>
        {:else}
            <div class="flex flex-row nowrap w-full bg-green-200 justify-between items-center"
                on:click={() => (show = !show)}
            >
                <h1 class="text-indigo-200">
                    {item.title}
                </h1>
                <Icon src="{show ? ChevronDown : ChevronRight}" size="16" />
            </div>
            {#if show}
                {#if item.submenu.length > 0}
                    {#each item.submenu as sub}
                        {#if sub.path}
                            <a href="{sub.path}">{item.title}</a>
                        {:else}
                            <h1 class="text-indigo-200">{sub.title}</h1>
                        {/if}
                    {/each}
                {/if}
            {/if}
        {/if}
    {/each}
</div>
