import {
  requestProjects,
  postProject,
  deleteProject,
  archiveProject,
} from '../api/project.api'

const state = {
  projects: [],
  newProject: {},
}

const getters = {
  getProjects(state) {
    // console.log("get from state:",state.projects)
    return state.projects
  },
}

const mutations = {
  updateProjects(state, projects) {
    projects.forEach(project => {
      state.projects.push(project)
    })
  },
  UPDATE_NEW_PROJECTS(state, project) {
    state.newProject = project
    state.projects.unshift(project)
  },
  DELETE_PROJECT(state, id) {
    for (let i = 0; i < state.projects.length; i++) {
      if (state.projects[i].id === id) {
        state.projects.splice(i, 1)
      }
    }
    // state.projects = state.projects.filter(item => item.id !== id)
  },
  ARCHIVE_PROJECT(state, { id, payload }) {
    console.log(id)
    console.log(payload)

    state.projects = state.projects.map(project => {
      const { projectId } = project
      return projectId === id
      ? { ...project, status: payload.status }
      : project
    })
    // state.projects.push([])
    // state.projects.pop()
  },
}

const actions = {
  async requestProjects({ commit }) {
    console.log('In reqProjects')
    try {
      const { data } = await requestProjects()
      console.log('Response projects: ', data)

      commit('updateProjects', data)
    } catch (err) {
      throw err
    }
  },

  async postProject({ commit }) {
    console.log('In postProject')
    try {
      const { data } = await postProject()
      console.log('Response post: ', data)

      commit('UPDATE_NEW_PROJECTS', data.project)
      // requestProjects()
    } catch (err) {
      throw err
    }
  },

  async deleteProject({ commit }, id) {
    console.log('In deleteProject')
    try {
      const { data } = await deleteProject(id)
      console.log('Response delete: ', data)
      commit('DELETE_PROJECT', id)
    } catch (err) {
      throw err
    }
  },

  async archiveProject({ commit }, { id, payload }) {
    console.log('In archiveProject')
    console.log(id)
    console.log(payload)
    try {
      const { data } = await archiveProject(id, payload)
      console.log('Response archive: ', data)
      commit('ARCHIVE_PROJECT', { id, payload })
    } catch (err) {
      throw err
    }
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
