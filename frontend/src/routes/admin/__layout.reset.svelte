<script>
    export const ssr = false;

    import { onMount } from 'svelte';
    import { themeChange } from 'theme-change';
    import { Sun, Moon } from 'svelte-hero-icons';
    import Icon from 'svelte-hero-icons/Icon.svelte';
    import Menu from '$lib/admin/components/menu.svelte';
    import ThemeToggle from '$lib/admin/components/themeToggle.svelte';
    import Breadcrumb from '$lib/admin/components/breadcrumb.svelte';
    

    onMount(() => {
        themeChange(false);
    });

    function handleThemeUpdate(event) {
        const admin = document.getElementById("admin");
        
        if (! event.detail.text) {
            admin.setAttribute("data-theme", "dark");
            return;
        }

        admin.setAttribute("data-theme", "corporate");
        return;
    };
</script>

<div class="grid grid-cols-5 gap-0 w-full h-screen overflow-y-scroll bg-base-100" id="admin" data-theme="corporate">
    <div class="fixed flex flex-col h-full px-8 pt-8 items-center bg-base-200">
        <h1 class="font-sans text-3xl text-base-content">Interstate Graphics, Inc.</h1>
        <div class="flex flex-row nowrap p-1 my-2 justify-center items-center bg-primary rounded-full">
            <Icon src={Sun} size="14" class="mr-1 text-white" />
            <ThemeToggle on:checkUpdate={handleThemeUpdate}/>
            <Icon src={Moon} size="14" class="ml-1 text-white" />
        </div>
        <Menu />
    </div>

    <main class="relative flex flex-col nowrap w-full h-full col-start-2 col-span-4 pr-3">
        <Breadcrumb />
        <slot></slot>
    </main>
</div>
