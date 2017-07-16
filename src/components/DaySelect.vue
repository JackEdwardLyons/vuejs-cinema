<template>
  <div id="day-select">
    <ul class="days">
      <li :class="{ day: true, active: isActive(day) }" v-for="day in days" @click="selected = day">
        {{ formatDay( day ) }}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        selected: this.$moment(),
        days: [ 0, 1, 2, 3, 4, 5, 6 ].map(day => this.$moment().add(day, 'days'))
      }
    },
    methods: {
      formatDay(day) {
        if (day.isSame(this.$moment(), 'day')) {
          return 'Today'
        } else {
          return day.format('ddd DD/MM'); // Mon 01/02, Tue 02/02, Wed 03/02
        }
      }, 
      isActive(day) {
        return day.isSame(this.selected, 'day'); // is the selected day same as today?
      }
    }
  }
</script>