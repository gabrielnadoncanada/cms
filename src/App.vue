<template>
  <HeaderComp/>
  <main class="m-5 pt-4">
    <router-view/>
  </main>

</template>

<style>

@media only screen and (min-width: 768px){
  main, footer {

    padding-left: 280px;
  }
}

sidebar {
  z-index: 999;
}
</style>
<script>
import HeaderComp from "@/components/HeaderComp";

export default {
  name: 'App',
  components: {
    HeaderComp,
  }
}

</script>


