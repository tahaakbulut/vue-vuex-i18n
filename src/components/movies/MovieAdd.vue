<template>
  <div class="card my-5 p-3">
    <form class="car-body">
      <div class="form-group">
        <label for="movieName">Name</label>
        <input
          v-model="movie.title"
          class="form-control"
          type="text"
          name="name"
          id="movieName"
          required
        />
      </div>
      <div class="form-group">
        <div class="form-check">
          <input
            v-model="movie.type"
            class="form-check-input"
            type="radio"
            name="type"
            value="movie"
            id="movieType"
            required
          />
          <label class="form-check-label" for="movieType">Movie</label>
        </div>
        <div class="form-check">
          <input
            v-model="movie.type"
            class="form-check-input"
            type="radio"
            name="type"
            value="series"
            id="SeriesType"
          />
          <label class="form-check-label" for="SeriesType">Series</label>
        </div>
      </div>
      <div class="form-group">
        <label for="movieYear">Year</label>
        <input
          v-model="movie.year"
          class="form-control"
          type="number"
          name="year"
          min="1900"
          id="movieYear"
          required
        />
      </div>
      <div class="form-group">
        <label for="movieStar">Star</label>
        <input
          v-model="movie.star"
          class="form-control"
          type="number"
          name="star"
          max="10"
          min="0"
          id="movieStar"
          required
        />
      </div>
      <button class="btn btn-primary" @click.prevent="saveMovie">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movie: {
        title: "",
        type: "",
        year: null,
        star: null
      }
    };
  },
  methods: {
    saveMovie() {
      this.$store.dispatch("addMovie", this.movie).then(() => {
        this.$router.push("/");
      });
    }
  }
};
</script>

<style>
</style>