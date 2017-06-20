import Vue from "vue";
import "./style.scss";
// components
import Overview from './components/Overview.vue';
// ajax
import VueResource from 'vue-resource';
Vue.use(VueResource);
// moment.js 
import moment from 'moment-timezone';
moment.tz.setDefault('UTC');
// add property to existing object
// use $ to indicate it is a public API method
Object.defineProperty(Vue.prototype, '$moment', { 
  // every component has access to $root of the app
  get() { return this.$root.moment } 
});
// Create an event bus to store emitted values from children
import { checkFilter } from './util/bus';
const bus = new Vue();
Object.defineProperty(Vue.prototype, '$bus', {
  get() { return this.$root.bus }
})

new Vue({
	el: "#app",
  data: {
    genre:  [],
    time:   [],
    movies: [],
    moment,
    bus, // the event bus
    day: moment() // current day
  },
  components: { Overview },
  created() {
    this.$http.get('/api').then(response => {
      this.movies = response.data;  // .map(movie => movie.movie['Title'])
      console.log(this.movies);
    });
    this.$bus.$on('check-filter', checkFilter.bind(this));
  }
});
