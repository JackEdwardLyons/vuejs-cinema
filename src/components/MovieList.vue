<!-- Template -->
<template>
  <div id="movie-list">
    <div v-if="filteredMovies.length">
      <movie-item v-for="movie in filteredMovies" :movie="movie.movie"></movie-item>
    </div>
    <div v-else-if="movies.length" class="no-results">
      No results for {{ genre | joinGenres }}
    </div>
    <div v-else class="no-results">
      Loading...
    </div>
  </div>
</template>
<!-- JavaScript -->
<script>
import genres    from "../util/genres.js";
import MovieItem from "./MovieItem.vue";

export default { 
  props: [ 'genre', 'time', 'movies' ],
  methods: {
    moviePassesGenreFilter(movie) {
      if (!this.genre.length) {
        return true;
      } else {
        // create a new Array for the genres stored in each movie
        let genresForEachMovie = movie.movie.Genre.split(', ');
        let matched = true;
        // this.genre refers to the genre of the clicked radio button
        this.genre.forEach(genre => {
          if (genresForEachMovie.indexOf(genre)  === -1) {
            matched = false;
          }
        })
        // return all movies that match genre
        return matched;
      }
    }
  },
  computed: {
    filteredMovies() {
      return this.movies.filter(this.moviePassesGenreFilter);
    }
  },
  filters: {
    joinGenres(value) {
      return value.join(", ");
    }
  },
  components: { 
    MovieItem 
  }
}
</script>
<!-- Styles -->
<style>

</style>