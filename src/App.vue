<template>
  <div id="app">
    <Header />
    <main class="flex-grow-1 container">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/shared/Header.vue";
import Footer from "./components/shared/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  created() {
    this.$store.dispatch("initApp");
  }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100vh;
}
</style>
