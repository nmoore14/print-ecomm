<script>
    import Icon from 'svelte-hero-icons/Icon.svelte';
    import { Pencil, Trash, Plus, Download, Users } from 'svelte-hero-icons';
import Company from 'faker/lib/company';
import { company } from 'faker/lib/locales/az';

    export let users;

    let allChecked = false;
</script>

    <div class="w-full h-full overflow-x-auto">
        <table class="w-full table-compact bg-base-200 rounded-lg">
            <thead class="bg-primary text-white">
                <tr class="text-left">
                    <th class="rounded-tl-lg">
                        <div class="form-control">
                            <label class="cursor-pointer label">
                                <input type="checkbox" class="checkbox checkbox-accent" bind:checked={allChecked}>
                            </label>
                        </div>
                    </th>
                    <th>Name</th>
                    <th> 
                        {#if users[0].title}
                            Title
                        {:else}
                            Company
                        {/if}
                    </th>
                    <th>E-Mail</th>
                    <th>Phone</th>
                    {#if users[0].permission}
                        <th>Permission Level</th>
                    {/if}
                    <th class="rounded-tr-lg">Actions</th>
                </tr>
            </thead>
            <tbody class="text-base-content">
                {#each users as user}
                    <tr class="border border-t-0 border-r-0 border-l-0 border-b-1 border-accent">
                        <td>
                            <div class="form-control">
                                <label class="cursor-pointer label">
                                    <input type="checkbox" class="checkbox checkbox-accent" value="{user.id}" checked={allChecked ? 'checked' : '' }>
                                </label>
                            </div>
                        </td>
                        <td>{ user.name }</td>
                        <td>{ user.company || user.title }</td>
                        <td>{ user.email }</td>
                        <td>{ user.phone }</td>
                        {#if user.permission}
                            <td>{ user.permission }</td>
                        {/if}
                        <td>
                            <div class="btn-group">
                                <button class="btn btn-sm btn-primary"><Icon src="{ Pencil }" size="16" /></button>
                                <button class="btn btn-sm btn-outline btn-error"><Icon src="{ Trash }" size="16" solid /></button>
                            </div>
                        </td>
                    </tr>
                {/each}
            </tbody>
            <tfoot class="bg-primary text-base-200 text-left">
                <tr>
                    <th class="rounded-bl-lg">
                        <div class="form-control">
                            <label class="cursor-pointer label">
                                <input type="checkbox" class="checkbox checkbox-accent" bind:checked={allChecked}>
                            </label>
                        </div>
                    </th>
                    <th>Name</th>
                    <th>
                        {#if users[0].title}
                            Title
                        {:else}
                            Company
                        {/if}
                    </th>
                    <th>E-Mail</th>
                    <th>Phone</th>
                    {#if users[0].permission}
                        <th>Permission Level</th>
                    {/if}
                    <th class="rounded-br-lg">Actions</th>
                </tr>
            </tfoot>
        </table>
    </div>
