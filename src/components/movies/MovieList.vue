<template>
  <div class="my-5">
    <template v-if="movies.length > 0">
      <div v-for="movie in movies" :key="movie.id">
        <div class="card mb-3" v-if="filter == movie.type || filter == 'all'">
          <div class="card-body row align-items-center">
            <div class="col-4 align-items-center d-flex">
              {{movie.title}} ({{movie.year}})
              <button
                @click="deleteMovie(movie.id)"
                class="btn bg-danger text-light ml-2"
              >
                <i class="fa fa-trash"></i>
              </button>
            </div>
            <div class="col-4 text-center">
              {{movie.star}}
              <i class="fa fa-star mx-1 text-warning"></i>
            </div>
            <div class="col-4 text-right d-flex flex-column align-items-end">
              <button
                class="btn btn-sm btn-success"
                @click="changeStar(movie.id, parseInt(movie.star) +1)"
              >
                <i class="fa fa-arrow-up"></i>
              </button>
              <button
                class="btn btn-sm btn-warning"
                @click="changeStar(movie.id,parseInt(movie.star) -1)"
              >
                <i class="fa fa-arrow-down"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
    <div class="card" v-else>
      <div class="card-body">no movies</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    // state de olan değişikliği algılayım sunar.
    filter() {
      return this.$store.getters.getFilter;
    },
    movies() {
      return this.$store.getters.getMovieList;
    }
  },
  methods: {
    deleteMovie(movieId) {
      this.$store.dispatch("deleteMovie", movieId);
    },
    changeStar(movieId, newStar) {
      this.$store.dispatch("changeStar", { movieId, newStar });
    }
  }
};
</script>

<style scoped>
.card-body {
  min-height: 90px;
}
.card button.bg-danger {
  display: none;
}
.card:hover button.bg-danger {
  display: inline-block;
}
</style>