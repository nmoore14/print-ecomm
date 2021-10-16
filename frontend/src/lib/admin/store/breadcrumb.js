import { writable } from 'svelte/store';
import { Home } from 'svelte-hero-icons';

function createBreadcrumb() {
    const { subscribe, set, update } = writable([
        {
            "title": "Home",
            "path": "/admin",
            "icon": Home,
        },
    ]);

    return {
        subscribe,
        appendBreadcrumb: (newCrumb) => update(n => [...n, newCrumb]),
        updateBreadcrumb: (crumbs) => set(crumbs),
        reset: () => set([{"title": "Home", "path": "/admin", "icon": Home,}]),
    }
}

export const Breadcrumb = createBreadcrumb();
