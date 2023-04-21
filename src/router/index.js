import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import EnterpriseForm  from '../views/EnterpriseForm.vue'
import ClientList from '../views/ClientList.vue'
import ClientForm from '../views/ClientForm.vue'
import ServiceList from "../views/ServiceList.vue";
import ServiceForm from "../views/ServiceForm.vue";
import ProductList from "../views/ProductList.vue";
import ProductForm from "../views/ProductForm.vue";
import ProductCategoryList from "../views/ProductCategoryList.vue";
import ProductCategoryForm from "../views/ProductCategoryForm.vue";
import ClientInvoiceList from "../views/ClientInvoiceList.vue";
import ClientInvoiceForm from "../views/ClientInvoiceForm.vue";

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage,
        meta: {
            breadcrumb: 'Accueil'
        }
    },
    {
        path: '/clients',
        name: 'ClientList',
        component: ClientList,
        meta: {
            breadcrumb: 'Clients'
        }
    },
    {
        path: '/clients/new',
        name: 'ClientAdd',
        component: ClientForm,
        meta: {
            breadcrumb: 'Nouveau client'
        }
    },
    {
        path: '/clients/:id/edit',
        name: 'ClientEdit',
        component: ClientForm,
        meta: {
            breadcrumb: 'Modifier client'
        }
    },
    {
        path: '/enterprise',
        name: 'EnterpriseForm',
        component: EnterpriseForm,
        meta: {
            breadcrumb: 'Entreprise'
        }
    },
    {
        path: '/services',
        name: 'ServiceList',
        component: ServiceList,
        meta: {
            breadcrumb: 'Services'
        }
    },
    {
        path: '/services/new',
        name: 'ServiceAdd',
        component: ServiceForm,
        meta: {
            breadcrumb: 'Nouveau service'
        }
    },
    {
        path: '/services/:id/edit',
        name: 'ServiceEdit',
        component: ServiceForm,
        meta: {
            breadcrumb: 'Modifier service'
        }
    },
    {
        path: '/products',
        name: 'ProductList',
        component: ProductList,
        meta: {
            breadcrumb: 'Produits'
        }
    },
    {
        path: '/products/new',
        name: 'ProductAdd',
        component: ProductForm,
        meta: {
            breadcrumb: 'Nouveau produit'
        }
    },
    {
        path: '/products/:id/edit',
        name: 'ProductEdit',
        component: ProductForm,
        meta: {
            breadcrumb: 'Modifier produit'
        }
    },
    {
        path: '/products/categories',
        name: 'ProductCategoryList',
        component: ProductCategoryList,
        meta: {
            breadcrumb: 'Catégories de produits'
        }
    },
    {
        path: '/products/categories/new',
        name: 'ProductCategoryAdd',
        component: ProductCategoryForm,
        meta: {
            breadcrumb: 'Nouvelle catégorie de produit'
        }
    },
    {
        path: '/products/categories/:id/edit',
        name: 'ProductCategoryEdit',
        component: ProductCategoryForm,
        meta: {
            breadcrumb: 'Modifier catégorie de produit'
        }
    },
    {
        path: '/clients/invoices',
        name: 'ClientInvoiceList',
        component: ClientInvoiceList,
        meta: {
            breadcrumb: 'Factures des clients'
        }
    },
    {
        path: '/clients/invoices/new',
        name: 'ClientInvoiceAdd',
        component: ClientInvoiceForm,
        meta: {
            breadcrumb: 'Nouvelle facture client'
        }
    },
    {
        path: '/clients/invoices/:id/edit',
        name: 'ClientInvoiceEdit',
        component: ClientInvoiceForm,
        meta: {
            breadcrumb: 'Modifier facture client'
        }
    }
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router