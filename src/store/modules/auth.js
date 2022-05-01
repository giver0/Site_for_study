/* eslint-disable no-unused-vars */
import axios from 'axios'
import Cookies from 'js-cookie'
import { ROUTE_SIGN_IN } from '@/router/constants'
// import { useRouter } from 'vue-router'

import router from '@/router'

import {
  signIn,
  signUp,
} from '../api/auth.api'

const state = {
  token: Cookies.get('user-token') || null,
  user: {
    email: '',
    firstName: '',
    lastName: '',
    id: null,
  },
}

const getters = {
  isAuthenticated: (state, getters) => Boolean(getters.getToken),
  getToken: _ => state.token,
  getUser: (state, getters) => {
    return {
      id: Number(getters.getUserId),
      email: getters.getUserEmail,
      firstName: getters.getUserFirstName,
      lastName: getters.getUserLastName,
      createdAt: getters.getUserCreatedAt,
    }
  },
}

const mutations = {
  SIGN_IN_SUCCESS(state, { accessToken, user }) {
    Cookies.set('user-token', accessToken)
    state.token = accessToken
    state.user = user
  },

  SIGN_UP_SUCCESS(state, data) {

  },

  LOGOUT(state) {
    console.log('logout')
    Cookies.remove('user-token')
    state = Object.assign(state, {})
    delete axios.defaults.headers.common['Authorization']
    state.token = null
    router.push(ROUTE_SIGN_IN)
  },
}

const actions = {
  async signIn({ commit }, payload) {
    try {
      const { data } = await signIn(payload)
      console.log(data)
      commit('SIGN_IN_SUCCESS', data)
    } catch (err) {
      throw err
    }
  },

  async signUp({ commit }, payload) {
    try {
      const { data } = await signUp(payload)
      commit('SIGN_UP_SUCCESS', { })
      return data
    } catch (err) {
      throw err
    }
  },

  logout({ commit }) {
    commit('LOGOUT')
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
