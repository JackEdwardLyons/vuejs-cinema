import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// The initial state of the store is defined by the state object.
const state = {
  count: 0
}

export default new Vuex.Store({
  state
})