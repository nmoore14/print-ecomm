<script>
    import { onMount } from 'svelte';
    import Icon from 'svelte-hero-icons/Icon.svelte';

    // Menu items import
    import menuItems from '$lib/admin/menuItems.cjs';

    // Icons import
    import { ChevronRight, ChevronDown } from 'svelte-hero-icons';

    let menu = null;
     
    function resetMenuBorders() {
        const menuItems = document.querySelectorAll('#side-menu li');
        for (let i = 0; i < menuItems.length; i ++) {
            if (document.getElementById(menuItems[i].id)) {
                document.getElementById(menuItems[i].id).classList.add("hovered-bordered");
                document.getElementById(menuItems[i].id).classList.remove("active");
            }
        }
    }
    
    function toggleActive(event) {
        resetMenuBorders();
        const parentId = event.toElement.parentElement.id;

        document.getElementById(parentId).classList.remove("hovered-bordered");
        document.getElementById(parentId).classList.add("active");
    };
</script>

<div bind:this={menu} class="flex flex-col w-full h-full">
    {#each menuItems as item}
        {#if item.type === "single"}
        <a class="flex flex-row nowrap card py-2 px-4 justify-start items-center text-base-content rounded shadow-lg hover:bg-primary hover:text-accent-content"
            href="{item.path}"
            on:click={resetMenuBorders}
        >
            <Icon src="{item.icon}" size="24" />
            <p class="ml-4">{item.title}</p>
        </a>
        {/if}
        {#if item.type === "menu"}
            <div class="py-4">
                <ul class="menu py-4 shadow-lg bg-base-100 rounded" id="side-menu">
                    <li class="menu-title">
                        <span>
                            <Icon src={item.icon} size="12" class="mr-1" />
                            {item.title}
                        </span>
                    </li>
                    {#each item.submenu as sub}
                        <li class="hover-bordered text-base-content" id="{sub.title}-parent">
                            <a href="{sub.path}" id="{sub.title}" on:click={toggleActive}>{sub.title}</a>
                        </li> 
                    {/each}
                </ul>
            </div>
        {/if}
    {/each}
</div>

<style>
    .active {
        @apply bordered;
    }
</style>
