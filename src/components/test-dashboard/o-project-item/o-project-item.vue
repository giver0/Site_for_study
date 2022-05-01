<template>
  <div class="o-project-item">
    <div :class="oProjectItemMenu">
      <div class="project-item__actions">
        <div
          class="a-dots-button"
          @click="openMenu"
        >
          <svg
            version="1.1"
            viewBox="0 0 15 3"
            :class="dotsClass"
            
            at-a-icon=""
          >
            <circle
              pid="0"
              cx="1.5"
              cy="1.5"
              r="1.5"
              fill="#222528"
            />
            <circle
              pid="1"
              cx="7.5"
              cy="1.5"
              r="1.5"
              fill="#222528"
            />
            <circle
              pid="2"
              cx="13.5"
              cy="1.5"
              r="1.5"
              fill="#222528"
            />
          </svg>
        </div>
        <div
          v-if="isMenuShow"
          v-click-outside="hideMenu"
          class="menu project-item__menu"
        >
          <ul class="dropdown">
            <li
              class="dropdown__item"
              @click="handleArchiveProject"
            >
              Archive
            </li>
            <!---->
            <li
              class="dropdown__item"
              @click="handleDeleteProject"
            >
              Delete
            </li>
          </ul>
        </div>
      </div>
      <div class="project-item__content">
        <div class="project-item__thumbnail">
          <div class="project-item__name">
            {{ project.title }}
          </div>
          <div>
            <!-- <button @click="devOut">
              dev

            </button> -->
          </div>
          <div class="project-item__date project-item__date--lighter">
            Last update {{ lastUpdateString }}
          </div>
        </div>
        <div class="project-item__footer">
          <div class="project-item__date">
            Created  {{ createdDateString }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import vClickOutside from 'click-outside-vue3'
import { ref, toRefs, onMounted, computed } from 'vue'
import useProjects from '@/store/use/useProjects'

export default {
  name: 'OProjectItem',
     
  directives: {
    clickOutside: vClickOutside.directive,
  },
  props: {
    project: {
      type: Object,
      // required: true,
    },
    index: {
      type: Number,
      // required: true,
    },
  },
  setup(props, { emit }) {
    const project = ref({
      title: '',
    })
    const {
      requestProjects,
      postProject,
      projects,
      store,
      deleteProject,
      archiveProject,
    } = useProjects()
    
    const isMenuShow = ref(false)
    const oProjectItemMenu = ref('')
    const dotsClass = ref('project-item__dots')
    const createdDateString = ref('')
    const lastUpdateString = ref('')

    onMounted(() => {
      // console.log(props)
      setTimeAgo()
      // popupItem = this.el
    })

    function devOut() {
      console.log('Hello')
      console.log(props)
    }

    function openMenu() {
      isMenuShow.value = true
      oProjectItemMenu.value = 'project-item__menu--opened'
      dotsClass.value = 'project-item__dots--lighter'
    }

    function hideMenu() {
      console.log('Click outside')
      oProjectItemMenu.value = ''
      isMenuShow.value = false
      dotsClass.value = 'project-item__dots'
    }

    function setTimeAgo() {
      TimeAgo.addLocale(en)
      const timeAgo = new TimeAgo('en-US')
      createdDateString.value = timeAgo.format(new Date(props.project.createdAt), 'round')
      lastUpdateString.value = timeAgo.format(new Date(props.project.updatedAt), 'round')
    }

    function handleDeleteProject() {
      console.log('inHandleDelete')
      hideMenu()
      console.log(props.project.id)
      deleteProject(props.project.id)
      // requestProjects()
    }

    async function handleArchiveProject() {
      console.log('Archive project')
      hideMenu()
      await archiveProject(
        props.project.id,
        { status: 'draft' },
      )
      console.log('projects', projects)
    }

    return {
      openMenu,
      isMenuShow,
      dotsClass,
      oProjectItemMenu,
      hideMenu,
      devOut,
      createdDateString,
      lastUpdateString,
      handleDeleteProject,
      handleArchiveProject,
    }
  },
}

</script>

<style scoped>
  @import 'o-project-item';
</style>

