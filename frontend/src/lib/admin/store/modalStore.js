import { writable } from 'svelte/store'

function modalStore() {
    const { subscribe, set, update } = writable(false);
    return {
        subscribe,
        open: () => set(true),
        close: () => set(false),
        toggle: () => update((n) => !n),
    };
}

export const isOpen = modalStore();
