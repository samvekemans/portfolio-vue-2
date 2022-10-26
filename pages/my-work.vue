<template>
  <NuxtChild :key="$route.fullPath" />
</template>

<script>
export default {
  async mounted() {
    console.log(this.$route.params.work);
    if (!this.$route.params.work) {
      const routeData = await this.$axios.$get(
        `https://samvekemans-portfolio.herokuapp.com/data/data.json`
      );
      this.$router.push("/my-work/" + routeData.data[0].attributes.slug);
    }
  },
};
</script>
<style></style>
