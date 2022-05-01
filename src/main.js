import { createApp, h } from 'vue'

import store from './store'
import router from './router'

import App from './App'

import vClickOutside from 'click-outside-vue3'

const app = createApp({
  render: () => h(App),
})

app.use(store)
app.use(router)
app.use(vClickOutside)

app.mount('#app')
