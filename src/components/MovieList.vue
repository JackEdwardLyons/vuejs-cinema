<!-- MOVIE LIST COMPONENT -->

<!-- Template -->
<template>
  <div id="movie-list" >
    <div v-for="movie in filteredMovies" class="movie">
      {{ movie.title }}
    </div>
  </div>
</template>
<!-- JavaScript -->
<script>
import genres from "../util/genres.js";
export default { 
  props: [ 'genre', 'time' ],
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
  data() {
    return {
      movies: [
        { title: "Pulp Fiction",  genre: genres.CRIME  },
        { title: "Home Alone",    genre: genres.COMEDY },
        { title: "Austin Powers", genre: genres.COMEDY }
      ]
    };
  }
}
</script>
<!-- Styles -->
<style>

</style>