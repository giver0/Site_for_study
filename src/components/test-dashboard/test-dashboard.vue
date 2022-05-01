<template>
  <div>
    <HeaderLine />
    <div class="main">
      <div class="app-sidebar">
        <div class="dashboard-aside">
          <div
            :class="{ 'dashboard-aside__item':true, 'dashboard-aside__item--active':isFilterProjects}"
            @click="filterProjects"
          >
            Projects
          </div>
          <div
            :class="{ 'dashboard-aside__item':true, 'dashboard-aside__item--active':isFilterArchived}"
            @click="filterArchived"
          >
            Archived Projects
          </div>
          <!---->
        </div>
      </div>
      <div class="app-content">
        <div class="dashboard">
          <div class="projects-list">
            <div
              class="create-project-tile"
              @click="createProject"
            >
              + New Project
            </div>
            <!-- <div class="create-project-tile" @click="handleProject">
              getProjects
            </div>   -->
            <div
              v-for="(project, index) in filteredProjects"
              :key="project.id"
            >
              <OProjectItem
                :project="project"
                :index="index"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderLine from '../header-line'
import OProjectItem from './o-project-item'
import { onMounted, computed, watch, ref } from 'vue'
import useProjects from '../../store/use/useProjects'
import { useRouter, useRoute } from 'vue-router'

import { ROUTE_DASHBOARD } from '@/router/constants'

export default {
  name: 'TestDashboard',
  components: {
    HeaderLine,
    OProjectItem,
  },
  setup() {
    const {
      requestProjects,
      postProject,
      projects,
      store,
    } = useProjects()

    const router = useRouter()
    const route = useRoute()

    const PROJECT_NORMAL = 'none'
    const PROJECT_ARCHIVED = 'draft'

    router.push({ query: { status: PROJECT_NORMAL } })
    console.log('Route: ', route)
    console.log('Route Query: ', route.query)

    const filteredProjects = computed(() => {
      console.log('In filter computed', projects)

      const routeStatus = route.query.status || PROJECT_NORMAL
      return projects.filter(project => project.status === routeStatus)
    })

    const isFilterProjects = ref(true)
    const isFilterArchived = ref(false)

    onMounted(() => {
      console.log('inMount vue3')
      console.log('Before requests')
      requestProjects()
      console.log(store)
      console.log('Store', store.state.projects.projects)
      console.log(projects)
      console.log('Filter project: ', filteredProjects.value)
    })

    async function createProject() {
      console.log('beforePost')
      await postProject()
      // projects()
      // console.log(getProjects())
      requestProjects()
      // console.log(getProjects())
    }

    function filterArchived() {
      router.push({ query: { status: PROJECT_ARCHIVED } })
      isFilterArchived.value = true
      isFilterProjects.value = false
    }

    function filterProjects() {
      router.push({ query: { status: PROJECT_NORMAL } })
      isFilterArchived.value = false
      isFilterProjects.value = true
    }

    function handleProject() {
      // const some = getProjects()
      console.log(some)
    }

    function sayHello() {
      console.log('Hello')
    }
      
    // function getProjects: computed(()=> getProjects()),

    watch(() => store.state.projects.projects, (currentValue, oldValue) => {
      // console.log('inWatch')
      // console.log('Curent:', currentValue)
      // console.log('Old:', oldValue)
    })

    return {
      createProject,
      handleProject,
      sayHello,
      requestProjects,
      filteredProjects,
      projects,
      filterArchived,
      filterProjects,
      isFilterProjects,
      isFilterArchived,
    }
  },
  
}
</script>

<style scoped>
  @import "test-dashboard";
</style>
