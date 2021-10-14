<script>
    import Menu from '$lib/admin/components/menu.svelte';
</script>
<div class="grid grid-cols-5 w-full h-screen">
    <div class="flex flex-col h-full px-8 pt-8 items-center border-r-2 border-gray-200">
        <h1 class="font-sans text-3xl">Admin</h1>
        <Menu />
    </div>
    <slot class="col-span-4"></slot>
</div>
