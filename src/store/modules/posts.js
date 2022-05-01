import axios from 'axios'

const actions = {
  async increaseRandom({ commit }) {
    await axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
    .then(response => {
      console.log('Response from server: ', response)
      commit('increaseCounter', response.data)
    })
    // fetch("https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new")
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('Response from server: ', response)
    //     commit('increaseCounter', data)})
  },
  decreaseRandom({ commit }) {
    axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
    .then(response => {
      console.log('Response from server: ', response)
      commit('decreaseCounter', response.data)
    })
  },
  async requestPosts({ commit }) {
    console.log('In reqPosts')
    await axios('https://jsonplaceholder.typicode.com/posts?_limit=3')
    .then(response => {
      console.log('Posts: ', response)
      commit('updatePosts', response.data)
    })
  },

}

const mutations = {
  increaseCounter(state, randomNumber) {
    state.counter += randomNumber
  },
  decreaseCounter(state, randomNumber) {
    state.counter -= randomNumber
  },
  updatePosts(state, posts) {
    state.posts = posts
  },
}

const state = {
  posts: [],
  counter: 0,
}

const getters = {
  allPosts(state) {
    return state.posts
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
