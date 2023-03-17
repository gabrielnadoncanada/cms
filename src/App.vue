<template>
  <HeaderComp/>
  <main class="m-5 pt-4">
    <router-view/>
  </main>

</template>

<style>

main, footer {
  padding-left: 280px;
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


