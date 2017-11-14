import Vue from 'vue'
// moment.js 
import moment from 'moment-timezone';
moment.tz.setDefault('UTC');
// Ajax
import VueResource from 'vue-resource';
Vue.use(VueResource);
// Vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// The initial state of the store is defined by the state object.
export default new Vuex.Store({
  state: {
    day: moment(), // the initial date value
    movies: []
  },
  mutations: {
    setDay(state, day) {
      state.day = day;
    },
    setMovies(state, movies) {
      state.movies = movies;
    }
  },
  actions: {
    // getMovies({ commit }) {
    //   Vue.$http.get('/api').then(response => {
    //     commit('setMovies', response.data);
    //   });
    // }
  }
})