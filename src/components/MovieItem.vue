<template>
  <div class="movie">

    <div class="movie-col-left">
      <img :src="movie.Poster">
    </div>

    <div class="movie-col-right">
      <div class="movie-title">
        <h2>{{ movie.Title }}</h2>
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
export default {
  props: [ 'movie', 'sessions', 'day' ],
  methods: {
    formattedSession(val) {
      // define a time format string
      return this.$moment(val).format('h:mm A');
    },
    filteredSessions(sessions) {
      // log each session in DB
      console.log(this.$moment(sessions.time));
      return sessions.filter(session => {
        // check sessions agains the isSame() method to only grab those that are 'today'
        return this.$moment(session.time).isSame(this.day, 'day');
      });
    }
  }
}
</script>