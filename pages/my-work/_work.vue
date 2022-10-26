<template>
  <div>
    <header-component-work
      :title="title"
      scrollTo="#main"
      :banner="`${banner}`"
    />

    <main
      id="main"
      class="bg-no-repeat bg-center bg-cover bg-fixed relative"
      :style="`background-image: url('${background}');`"
    >
      <div class="absolute h-24 bg-gradient-to-b from-white w-full"></div>
      <div class="max-w-6xl m-auto pb-16 pt-16">
        <div class="p-always">
          <h1 class="font-write text-5xl text-center mb-10">{{ title }}</h1>
          <client-only>
            <carousel v-bind="options">
              <slide
                v-for="item in items"
                :key="item.id"
                class="max-h-carousel"
              >
                <div class="flex justify-center items-center">
                  <img
                    :src="item.image"
                    alt=""
                    class="carouselImg max-h-carousel object-contain rounded shadow-lg"
                  />
                </div>
              </slide>
            </carousel>
          </client-only>
          <section class="bg-white shadow rounded p-7 mt-16">
            <h2 class="text-3xl font-medium">Over dit project:</h2>
            <p class="text-xl whitespace-pre-line" v-html="information"></p>
          </section>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  data() {
    return {
      items: [],
      data: [],
      banner: "",
      background: "",
      information: "",
      title: "",
      options: {
        loop: true,
        perPage: 1,
        scrollPerPage: false,
      },
    };
  },
  async fetch() {
    const data = await this.$axios.$get(`/data/data.json`);
    this.data = data.data.filter(data => data.attributes.slug === this.$route.params.work);
    this.title = this.data[0].attributes.name;
    this.items = this.data[0].attributes.carousel;
    this.banner = this.data[0].attributes.banner;
    this.background = this.data[0].attributes.background;
    this.information = this.data[0].attributes.information;
  },
};
</script>

<style>
button.VueCarousel-navigation-button {
  font-size: 2em;
}
.VueCarousel-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
