import { createRouter, createWebHashHistory } from 'vue-router'
import DefaultView from '../views/DefaultView.vue'
import CopilotView from '../views/CopilotView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'default',
      component: DefaultView
    },
    {
      path: '/copilot',
      name: 'copilot',
      component: CopilotView
    }
  ]
})

export default router 