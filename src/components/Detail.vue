<template>
  <div v-if="movie" id="detail">
    <movie-item :movie="movie">
      <div class="movie-details">
        <p class="movie-genre">{{ movie.Genre }}</p>
        <p class="movie-plot">{{ movie.Plot }}</p>
        <table>
          <tr>
            <td>Release Date</td>
            <td>{{ movie.Released }}</td>
          </tr>
          <tr>
            <td>Running Time</td>
            <td>{{ movie.Runtime }}</td>
          </tr>
          <tr>
            <td>Director</td>
            <td>{{ movie.Director }}</td>
          </tr>
          <tr>
            <td>Case</td>
            <td>{{ movie.Actors }}</td>
          </tr>
        </table>
      </div>
    </movie-item>
    <div class="home">
      <router-link :to="{ name: 'home' }">Back to results</router-link>
    </div>
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
        return movie ? movie.movie : null;
      }
    }
  }
  </script>