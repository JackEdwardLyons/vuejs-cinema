<!-- MOVIE FILTER COMPONENT -->

<!-- Template -->
<template>
  <div id="movie-filter">
    <h3>Filter Results</h3>
    <div class="filter-group">
    <!-- Filter Time of Day -->
    <h3>By time of day</h3>
      <check-filter v-for="(time, key) in times" 
                    :title="time"
                    category="time"
                    :key="key">
      </check-filter>
      <!-- Filter Genre -->
      <h3>By genre</h3>
      <check-filter v-for="(genre, key) in genres" 
                    :title="genre" 
                    category="genre"
                    :key="key">
      </check-filter>
    </div>
  </div>
</template>
<!-- JavaScript -->
<script>
import CheckFilter from './CheckFilter.vue';
import genres      from "../util/genres.js";
import times       from "../util/times.js";

export default {
  data() {
    return {
      genres,
      times
    }
  },
  // This component only exists within the movie-filter
  components: {
    CheckFilter
  }
}
</script>
