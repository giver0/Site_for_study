import { useStore } from 'vuex'

const MODULE_NAME = 'projects'

const useProjects = () => {
  const store = useStore()
  
  const requestProjects = () => store.dispatch(`${MODULE_NAME}/requestProjects`)
  const postProject = () => store.dispatch(`${MODULE_NAME}/postProject`)
  const deleteProject = (id) => store.dispatch(`${MODULE_NAME}/deleteProject`, id)
  const archiveProject = (id, payload) => {
    console.log(payload)
    store.dispatch(`${MODULE_NAME}/archiveProject`, { id, payload })
  }
  const projects = store.getters[`${MODULE_NAME}/getProjects`]

  return {
    requestProjects,
    postProject,
    projects,
    store,
    deleteProject,
    archiveProject,
  }
}

export default useProjects
