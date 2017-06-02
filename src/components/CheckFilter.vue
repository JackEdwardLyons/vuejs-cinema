<!-- CHECK FILTER COMPONENT -->

<!-- Template -->
<template>
  <div class="check-filter" 
        :class="{ active: checked }" 
        @click="checkFilter">

    <span class="checkbox"></span>
    <span class="check-filter-title">{{ genre }}</span>

  </div>
</template>
<!-- JavaScript -->
<script>
export default {
  props: [ 'genre' ],
  methods: {
    checkFilter() {
      this.checked = !this.checked;
      // $emit can take infinite number of args
      this.$emit('check-filter', 'genre', this.genre, this.checked);
    }
  },
  data() {
    return {
      checked: false
    };
  }
}
</script>
<!-- Styles -->
<style>

</style>