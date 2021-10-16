import { Breadcrumb } from '$lib/admin/store/breadcrumb.js';

const resetBreadcrumb = () => {};

const appendBreadcrumb = (newCrumb) => {
    Breadcrumb.update(n => {[...Breadcrumb, newCrumb]});
    console.log(Breadcrumb);
};

export { resetBreadcrumb, appendBreadcrumb };
