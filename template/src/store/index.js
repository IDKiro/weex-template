/* global Vue */
import Vuex from 'vuex'
import mutations from '@/store/mutations'
import getters from '@/store/getters'

Vue.use(Vuex)

module.exports = new Vuex.Store({
  state: {
  },
  mutations,
  getters
})
