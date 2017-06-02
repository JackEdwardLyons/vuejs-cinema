import Vue from "vue";
import "./style.scss";
// Components
import MovieList from './components/MovieList.vue';
import MovieFilter from './components/MovieFilter.vue';
// ajax
import VueResource from 'vue-resource';
Vue.use(VueResource);

new Vue({
	el: "#app",
  data: {
    genre:  [],
    time:   [],
    movies: []
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
    })
  }
});
