import Vue from "vue";
import "./style.scss";
// Components
import MovieList from './components/MovieList.vue';
import MovieFilter from './components/MovieFilter.vue';
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
    bus,// the event bus
    day: moment() // current day
  },
  methods: {
    checkFilter(category, genre, checked) {
      // filter movies based on payload received from filter buttons
      if (checked) {
        // if checked, the movie genre is added to the genre data array
        this[category].push(genre);
      } else {
        let index = this[category].indexOf(genre);
        if (index > -1) {
          this[category].splice(index, 1);
        }
      }
    }
  },
	components: {
    MovieList,
		MovieFilter
  },
  created() {
    this.$http.get('/api').then(response => {
      this.movies = response.data;  // .map(movie => movie.movie['Title'])
      console.log(this.movies);
    });
    this.$bus.$on('check-filter', this.checkFilter);
  }
});
