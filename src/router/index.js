import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import EnterpriseForm  from '@/views/EnterpriseForm.vue'
import ClientList from '@/views/ClientList.vue'
import ClientForm from '@/views/ClientForm.vue'
import ServiceList from "@/views/ServiceList";
import ServiceForm from "@/views/ServiceForm";
import ProductList from "@/views/ProductList";
import ProductForm from "@/views/ProductForm";
import ProductCategoryList from "@/views/ProductCategoryList";
import ProductCategoryForm from "@/views/ProductCategoryForm";
import ClientInvoiceList from "@/views/ClientInvoiceList";
import ClientInvoiceForm from "@/views/ClientInvoiceForm";

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/clients',
        name: 'ClientList',
        component: ClientList
    },
    {
        path: '/clients/new',
        name: 'ClientAdd',
        component: ClientForm,
    },
    {
        path: '/clients/:id/edit',
        name: 'ClientEdit',
        component: ClientForm
    },
    {
        path: '/enterprise',
        name: 'EnterpriseForm',
        component: EnterpriseForm
    },
    {
        path: '/services',
        name: 'ServiceList',
        component: ServiceList
    },
    {
        path: '/services/new',
        name: 'ServiceAdd',
        component: ServiceForm
    },
    {
        path: '/services/:id/edit',
        name: 'ServiceEdit',
        component: ServiceForm
    },
    {
        path: '/products',
        name: 'ProductList',
        component: ProductList
    },
    {
        path: '/products/new',
        name: 'ProductAdd',
        component: ProductForm
    },
    {
        path: '/products/:id/edit',
        name: 'ProductEdit',
        component: ProductForm
    },
    {
        path: '/products/categories',
        name: 'ProductCategoryList',
        component: ProductCategoryList
    },
    {
        path: '/products/categories/new',
        name: 'ProductCategoryAdd',
        component: ProductCategoryForm
    },
    {
        path: '/products/categories/:id/edit',
        name: 'ProductCategoryEdit',
        component: ProductCategoryForm
    },
    {
        path: '/clients/invoices',
        name: 'ClientInvoiceList',
        component: ClientInvoiceList
    },
    {
        path: '/clients/invoices/new',
        name: 'ClientInvoiceAdd',
        component: ClientInvoiceForm
    },
    {
        path: '/clients/invoices/:id/edit',
        name: 'ClientInvoiceEdit',
        component: ClientInvoiceForm
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router