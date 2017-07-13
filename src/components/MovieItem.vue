<template>
  <div class="movie">
    <router-link :to="{ name: 'movie', params: { id: movie.imdbID } }">
      <div class="movie-col-left">
        <img :src="movie.Poster">
      </div>
    </router-link>

    <div class="movie-col-right">
      <div class="movie-title">
        <router-link :to="{ name: 'movie', params: { id: movie.imdbID } }">
          <h2>{{ movie.Title }}</h2>
        </router-link>
        <span class="movie-rating">{{ movie.Rated }}</span>
      </div>
      <!-- Movie Session Times SLOT || Movie Detail SLOT -->
      <slot></slot>
    </div>

  </div>
</template>
<script>
export default {
  props: [ 'movie' ]
}
</script>