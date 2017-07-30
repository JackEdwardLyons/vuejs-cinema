import Vue from "vue";
import "./style.scss";

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

// Import Check filter and set day logic
import { checkFilter, setDay } from './util/bus';

// Create an event bus to store emitted values from children
const bus = new Vue();
Object.defineProperty(Vue.prototype, '$bus', {
  get() { return this.$root.bus }
})

// Vue-router 
import VueRouter from 'vue-router';
import routes    from './util/routes';

Vue.use(VueRouter);
const router = new VueRouter({ routes })

// import Tooltop into Vue
import Tooltip from './util/tooltip';
Vue.use(Tooltip);

// Vue instance
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
  created() {
    this.$http.get('/api').then(response => {
      this.movies = response.data;  // .map(movie => movie.movie['Title'])
    });
    
    this.$bus.$on('check-filter', checkFilter.bind(this)); // import Check Filter logic with .bind()
    this.$bus.$on('set-day', setDay.bind(this)); // change set day on click of Day Select
  },
  // destructured object property referring to the Vue router const above.
  router
});