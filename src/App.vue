<script setup>
import { ref } from 'vue'
import { House } from '@element-plus/icons-vue'
import DefaultView from './views/DefaultView.vue'
import CopilotView from './views/CopilotView.vue'
import AIToolView from './views/AIToolView.vue'

const currentView = ref('default')

const views = {
  default: DefaultView,
  copilot: CopilotView,
  aitool: AIToolView
}

const handleClick = (view) => {
  currentView.value = view
}
</script>

<template>
  <div class="h-screen w-screen flex overflow-hidden">
    <!-- Sidebar -->
    <div class="w-64 h-full bg-white border-r border-gray-200">
      <div class="p-4">
        <!-- Logo Area -->
        <div class="flex items-center mb-8">
          <el-icon class="text-xl text-gray-700 mr-2"><House /></el-icon>
          <span class="text-lg font-semibold text-gray-800">SpiritAI</span>
        </div>
        
        <!-- Navigation Menu -->
        <div class="space-y-2">
          <!-- Copilot -->
          <div class="flex items-center p-3 rounded-lg cursor-pointer hover:bg-gray-50" @click="handleClick('copilot')">
            <div class="w-6 h-6 text-gray-600 mr-3">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span class="text-sm font-medium text-gray-700">Copilot</span>
          </div>
          
          <!-- AITool -->
          <div class="flex items-center p-3 rounded-lg cursor-pointer hover:bg-gray-50" @click="handleClick('aitool')">
            <div class="w-6 h-6 text-gray-600 mr-3">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span class="text-sm font-medium text-gray-700">AI工具</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 bg-gray-50">
      <component :is="views[currentView]" />
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  height: 100%;
}

.el-menu {
  @apply border-none;
}
</style>
