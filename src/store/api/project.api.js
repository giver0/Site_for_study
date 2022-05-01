import backendApiClient from './backend-api-client'

const ENDPOINTS = {
  PROJECTS: `/group/2/project`,
}

export const requestProjects = () => (
  backendApiClient.get(ENDPOINTS.PROJECTS)
)

export const postProject = () => (
  backendApiClient.post(ENDPOINTS.PROJECTS)
)

export const deleteProject = (id) => {
  console.log('api', id)
  const PROJECT_BY_ID = `${ENDPOINTS.PROJECTS}/${id}`
  console.log(PROJECT_BY_ID)
  return backendApiClient.delete(PROJECT_BY_ID)
}

export const archiveProject = (id, payload) => {
  console.log('api', id)
  const PROJECT_BY_ID = `${ENDPOINTS.PROJECTS}/${id}`
  console.log(PROJECT_BY_ID)
  return backendApiClient.patch(PROJECT_BY_ID, payload)
}
