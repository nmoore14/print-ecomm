const c = [
	() => import("..\\..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\components\\error.svelte"),
	() => import("..\\..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\admin\\__layout.reset.svelte"),
	() => import("..\\..\\..\\src\\routes\\admin\\index.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/admin/index.svelte
	[/^\/admin\/?$/, [c[3], c[4]], []]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];