<template>
  <sidebar class="h-100 top-0 position-fixed">
    <div class="h-100 d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 280px;">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        <span class="fs-4">CMS</span>
      </a>
      <hr>
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <router-link :to="{ name: 'HomePage' }" class="nav-link text-white" active-class="active">
            <i class="bi bi-house me-2"></i>
            Accueil
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'ClientList' }" class="nav-link text-white" active-class="active">
            <i class="bi bi-people me-2"></i>
            Clients
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'EnterpriseForm' }" class="nav-link text-white" active-class="active">
            <i class="bi bi-briefcase me-2"></i>
            Entreprise
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'ServiceList' }" class="nav-link text-white" active-class="active">
            <i class="bi bi-book me-2"></i>
            Services
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'ProductList' }" class="nav-link text-white" active-class="active">
            <i class="bi bi-grid me-2"></i>
            Produits
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'ClientInvoiceList' }" class="nav-link text-white" active-class="active">
            <i class="bi bi-receipt me-2"></i>
            Factures client
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'ProductCategoryList' }" class="nav-link text-white" active-class="active">
            <i class="bi bi-bookmark me-2"></i>
            Catégories de produits
          </router-link>
        </li>
      </ul>
    </div>
  </sidebar>
</template>




