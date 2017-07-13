<template>
  <div v-if="movie" id="detail">
    <movie-item :movie="movie.movie" :sessions="[]"></movie-item>
  </div>
</template>
<script>
  import MovieItem from './MovieItem.vue';
  export default {
    props: [ 'movies' ],
    components: { MovieItem },
    computed: {
      movie() {
        let movie = this.movies.find(movie => movie.id === this.$route.params.id);
        return movie ? movie : null;
      }
    }
  }
  </script>