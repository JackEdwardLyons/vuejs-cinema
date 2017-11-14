<template>
  <div id="overview">
      <day-select :selected="day"></day-select>
      <div class="main"> 
          <movie-list :genre="genre" :time="time" :movies="movies" :day="day"></movie-list>
          <movie-filter></movie-filter>
      </div>
  </div>
</template>

<script>
// Components
import DaySelect   from './DaySelect.vue'
import MovieList   from './MovieList.vue';
import MovieFilter from './MovieFilter.vue';

export default {
  props: [ 'genre', 'time', 'movies' ],
  components: {
    MovieList,
    MovieFilter,
    DaySelect
  },
  computed: {
    day() {
      return this.$store.state.day
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Maven+Pro');
* {
  font-family: 'Maven Pro', sans-serif;
}
p, li, td, tr {
  font-size: 1.1em;
}
</style>