<template>
  <div id="day-select">
    <ul class="days">
      <li :class="{ day: true, active: isActive(day) }" 
          v-for="day in days"
          @click="selectDay(day)"
      >
        {{ formatDay( day ) }}
      </li>
      <li class="day-selector">
        <span class="dec" @click="changeDay(-1)"></span>
        <span class="inc" @click="changeDay(+1)"></span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: [ 'selected' ],
    data() {
      return {
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
      },
      selectDay(day) {
        this.$bus.$emit('set-day', day);
      },
      changeDay(change) {
        // moment.js .add() method
        let newDay = this.$moment(this.selected).add(change, 'days');
        // ensure date can't exceed what is available in API
        if (this.days.find(day === newDay.isSame(day, 'day'))) {
          this.selectDay(newDay);
        }

      }
    }
  }
</script>
<style>
.day-selector {
  top: -10px;
  position:relative;
}
</style>