<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        <span class="fs-4">CMS</span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse"
              aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>

    <div class="collapse" id="sidebarCollapse">
      <sidebar class="h-100 top-0 position-fixed">
        <div class="h-100 d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 280px;">
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
    </div>
  </div>
</template>
