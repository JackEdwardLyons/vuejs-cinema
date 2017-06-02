<!-- MOVIE FILTER COMPONENT -->

<!-- Template -->
<template>
  <div id="movie-filter">
    <h3>Filter Results</h3>
    <div class="filter-group">
      <check-filter v-for="(genre, key) in genres" 
                    :genre="genre" 
                    @check-filter="checkFilter"
                    :key="key">
      </check-filter>
    </div>
  </div>
</template>
<!-- JavaScript -->
<script>
import CheckFilter from './CheckFilter.vue';
import genres from "../util/genres.js";


export default {
  data() {
    return {
      genres
    }
  },
  methods: {
    checkFilter(category, genre, checked) {
      // pass the args up the chain to the root instance
      this.$emit('check-filter', category, genre, checked);
    }
  },
  // This component only exists within the movie-filter
  components: {
    CheckFilter
  }
}
</script>
<!-- Styles -->
<style>

</style>