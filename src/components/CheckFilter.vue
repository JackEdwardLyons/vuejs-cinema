<!-- Template -->
<template>
  <div class="check-filter" 
        :class="{ active: checked }" 
        @click="checkFilter">

    <span class="checkbox"></span>
    <span class="check-filter-title">{{ title }}</span>

  </div>
</template>
<!-- JavaScript -->
<script>
export default {
  props: [ 'title', 'category' ],
  methods: {
    checkFilter() {
      this.checked = !this.checked;
      // $emit can take infinite number of args
      this.$emit('check-filter', this.category, this.title, this.checked);
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