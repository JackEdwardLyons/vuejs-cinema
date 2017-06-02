<!-- Template -->
<template>
  <div id="movie-list" >
    <movie-item v-for="movie in filteredMovies" 
                :movie="movie">
    </movie-item>
  </div>
</template>
<!-- JavaScript -->
<script>
import genres    from "../util/genres.js";
import MovieItem from "./MovieItem.vue";

export default { 
  props: [ 'genre', 'time', 'movies' ],
  methods: {},
  computed: {
    filteredMovies() {
      return this.movies.filter((movie) => {
        // if no items in the genre array, return all movies
        return (!this.genre.length) 
          ? true
          // this.genre refers to the genre property that is passed in from the root.
          : this.genre.find(category => movie.genre === category);
      });
    }
  },
  components: { MovieItem }
}
</script>
<!-- Styles -->
<style>

</style>