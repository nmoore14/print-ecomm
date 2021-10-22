import { writable } from 'svelte/store';

function createBreadcrumb() {
    const { subscribe, set, update } = writable([
        {
            "title": "Home",
            "path": "/admin",
        },
    ]);

    return {
        subscribe,
        appendBreadcrumb: (newCrumb) => update(n => [...n, newCrumb]),
        updateBreadcrumb: (crumbs) => set(crumbs),
        reset: () => set([{"title": "Home", "path": "/admin",}]),
    }
}

export const Breadcrumb = createBreadcrumb();
