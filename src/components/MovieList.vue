<!-- Template -->
<template>
  <div id="movie-list">

    <div v-if="filteredMovies.length">
      <movie-item v-for="movie in filteredMovies" :movie="movie.movie">
        <!-- Session Times as SLOT for main page only -->
        <div class="movie-sessions">
          <div v-for="session in filteredSessions(movie.sessions)" class="session-time-wrapper">
            <div class="session-time">{{ formattedSession(session.time) }}</div>
          </div>
        </div>
      </movie-item>
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
import times     from "../util/times.js";

export default { 
  props: [ 'genre', 'time', 'movies', 'day' ],
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
    },
    sessionPassesTimeFilter(session) {
      // if the session is not the same as the current day...
      if (!this.day.isSame(this.$moment(session.time), 'day')) {
        return false;
        // if no filters selected, or if both filters selected...
      } else if (this.time.length === 0 || this.time.length === 2) {
        return true;
      } else if (this.time[0] === times.AFTER_6PM) {
        return this.$moment(session.time).hour() >= 18;
      } else {
        return this.$moment(session.time).hour() <= 18;
      }
    },
    formattedSession(val) {
      // define a time format string
      return this.$moment(val).format('h:mm A');
    },
    filteredSessions(sessions) {
      return sessions.filter(this.sessionPassesTimeFilter);
    }
  },
  computed: {
    filteredMovies() {
      return this.movies
        .filter(this.moviePassesGenreFilter)
        .filter(movie => movie.sessions.find(this.sessionPassesTimeFilter))
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
