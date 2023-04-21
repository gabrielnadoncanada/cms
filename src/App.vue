<script setup>
import SidebarComp from "./components/SidebarComp.vue";
import HeaderComp from "./components/HeaderComp.vue";
</script>

<template>
  <div id="page-container"
       class="sidebar-o sidebar-dark enable-page-overlay side-scroll page-header-fixed main-content-narrow">
    <SidebarComp/>
    <HeaderComp/>
    <main id="main-container">
      <router-view/>
    </main>
  </div>
</template>


<style>
.enterpriseLogo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  aspect-ratio: 2;
}
.editableItem {
  border-bottom: 1px solid transparent;
  border-bottom-color: var(--bs-table-border-color);
  display: inline-block;
  min-width: 1px;
}

.editableItem:focus-visible {
  outline: 0;
}
</style>


