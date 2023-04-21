<template>
  <div>
    <nav>
      <ol>
        <li><router-link :to="{ path: '/' }">Home</router-link></li>
        <li v-for="(crumb, index) in breadcrumbs" :key="index">{{ crumb }}</li>
      </ol>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    breadcrumbs() {
      const route = this.$route;
      const matched = route.matched;
      const crumbs = [];

      console.log(matched)
      // Add the breadcrumb for each matched route
      matched.forEach((match) => {
        if (match.meta && match.meta.breadcrumb) {
          crumbs.push(match.meta.breadcrumb);
        }
      });

      return crumbs;
    }
  }
};
</script>