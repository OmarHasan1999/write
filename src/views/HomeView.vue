<script setup>
  import DefaultLayouts from '../components/layouts/DefaultLayouts.vue';
  import HomeHero from '../components/partials/HomeHero.vue';
  import HomeFood from '../components/partials/HomeFood.vue';
  import HomePopular from '../components/partials/HomePopular.vue';
  import HomeFeatured from '../components/partials/HomeFeatured.vue';
</script>

<template>
  <DefaultLayouts>
    <HomeHero />
    <HomeFood />
    <HomePopular />
    <HomeFeatured />
  </DefaultLayouts>
</template>
