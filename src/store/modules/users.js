import axios from 'axios'

const actions = {
  async requestUsers({ commit }) {
    console.log('In reqUsers')
    await axios('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      console.log('Posts: ', response)
      commit('updateUsers', response.data)
    })
  },

}

const mutations = {
  updateUsers(state, users) {
    state.users = users
  },
}

const state = {
  users: [],
  limit: 3,
}

const getters = {
  allUsers(state) {
    return state.users
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
