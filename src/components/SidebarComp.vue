<template>
  <nav id="sidebar" aria-label="Main Navigation">
    <div class="bg-header-dark">
      <div class="content-header bg-white-5">
        <a class="fw-semibold text-white tracking-wide" href="/">
              <span class="smini-visible">
                D<span class="opacity-75">x</span>
              </span>
          <span class="smini-hidden">
                Lead<span class="opacity-75">Pilot</span>
              </span>
        </a>
        <div>
          <button type="button" class="btn btn-sm btn-alt-secondary" data-toggle="class-toggle"
                  data-target="#sidebar-style-toggler" data-class="fa-toggle-off fa-toggle-on"
                  onclick="Dashmix.layout('sidebar_style_toggle');Dashmix.layout('header_style_toggle');">
            <i class="fa fa-toggle-off" id="sidebar-style-toggler"></i>
          </button>
          <button type="button" class="btn btn-sm btn-alt-secondary" data-toggle="class-toggle"
                  data-target="#dark-mode-toggler" data-class="far fa" onclick="Dashmix.layout('dark_mode_toggle');">
            <i class="far fa-moon" id="dark-mode-toggler"></i>
          </button>
          <button type="button" class="btn btn-sm btn-alt-secondary d-lg-none" data-toggle="layout"
                  data-action="sidebar_close">
            <i class="fa fa-times-circle"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="js-sidebar-scroll">
      <div class="content-side">
        <ul class="nav-main">
          <li class="nav-main-item">
            <router-link :to="{ name: 'ClientList' }" class="nav-main-link">
              <i class="nav-main-link-icon fa fa-2x fa-briefcase"></i>
              <span class="nav-main-link-name">Clients</span>
            </router-link>
          </li>
          <li class="nav-main-item">
            <router-link :to="{ name: 'ClientInvoiceList' }" class="nav-main-link">
              <i class="nav-main-link-icon fa fa-2x fa-briefcase"></i>
              <span class="nav-main-link-name">Factures</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>