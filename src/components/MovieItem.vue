<template>
  <div class="movie">
    {{ movie.movie.Title }}
  </div>
</template>

<script>
export default {
  props: [ 'movie' ]
}
</script>