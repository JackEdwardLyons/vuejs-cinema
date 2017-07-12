<template>
  <div class="movie">

    <div class="movie-col-left">
      <img :src="movie.Poster">
    </div>

    <div class="movie-col-right">
      <div class="movie-title">
        <router-link :to="{ name: 'movie' }">
          <h2>{{ movie.Title }}</h2>
        </router-link>
        <span class="movie-rating">{{ movie.Rated }}</span>
      </div>
      <div class="movie-sessions">
        <div v-for="session in filteredSessions(sessions)" class="session-time-wrapper">
          <div class="session-time">{{ formattedSession(session.time) }}</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import times from "../util/times.js";

export default {
  props: [ 'movie', 'sessions', 'day', 'time' ],
  data() {
    return {
      times
    }
  },
  methods: {
    formattedSession(val) {
      // define a time format string
      return this.$moment(val).format('h:mm A');
    },
    filteredSessions(sessions) {
      return sessions.filter(this.sessionPassesTimeFilter);
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
    }
  }
}
</script>