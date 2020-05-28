<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" tag="a" class="navbar-brand">MovieApp</router-link>
      <ul class="navbar-nav mr-auto">
        <router-link active-class="active" to="/" tag="li" class="nav-item">
          <a class="nav-link" href="#">Movie List</a>
        </router-link>
      </ul>
      <template v-if="currenPath == '/'">
        <div class="btn btn-info">
          <i class="fa fa-filter mr-1"></i>Filter
        </div>
        <div class="dropdown">
          <button class="btn btn-info mx-2" @click="isMenu = !isMenu">
            <i class="fa fa-sort mr-1"></i> Sort
          </button>
          <div class="dropdown-menu show" v-if="isMenu">
            <a class="dropdown-item" @click="sortMovie()">Highest First</a>
            <a class="dropdown-item" @click="sortMovie('down')">Lowest First</a>
          </div>
        </div>
      </template>
      <button
        class="btn btn-info mr-2"
        v-if="currenPath == '/movie-add'"
        @click="$router.push('/')"
      >
        <i class="fa fa-arrow-circle-left mr-1"></i>Back
      </button>
      <router-link
        active-class="active"
        to="/movie-add"
        tag="button"
        class="btn btn-info"
      >+ Add Movie</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      currenPath: window.location.pathname,
      isMenu: false
    };
  },
  methods: {
    sortMovie(param) {
      this.$store.dispatch("sortMovie", param);
    }
  },
  watch: {
    $route(from) {
      this.currenPath = from.path;
    }
  }
};
</script>

<style>
header {
  width: 100%;
  background-color: red;
}
</style>