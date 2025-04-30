<template>
  <div class="flex h-full">
    <!-- Chat History Sidebar -->
    <div class="w-64 bg-white border-r border-gray-200 flex flex-col">
      <!-- Project List -->
      <div class="flex-1 overflow-y-auto">
        <div class="space-y-2 px-4 py-4">
          <!-- 一般对话 -->
          <div class="space-y-1">
            <div class="flex items-center justify-between px-2 pl-3 py-1">
              <div 
                @click="selectProject('general')" 
                class="text-sm text-gray-700 font-bold truncate max-w-[180px] cursor-pointer hover:text-gray-900"
              >一般对话</div>
              <button @click="toggleCollapse('general')" class="text-gray-500 hover:text-gray-700 flex-shrink-0">
                <svg class="w-4 h-4 transform transition-transform" :class="{ 'rotate-180': !isCollapsed.general }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div class="space-y-1" v-if="!isCollapsed.general">
              <div class="p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                <div class="text-sm text-gray-600 truncate">写一段python代码</div>
              </div>
              <div class="p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                <div class="text-sm text-gray-600 truncate">北京必去景点</div>
              </div>
              <div class="p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                <div class="text-sm text-gray-600 truncate">vscode和jetbrain系列IDE优劣</div>
              </div>
            </div>
          </div>

          <!-- 公司agent收费方案 -->
          <div class="space-y-1">
            <div class="flex items-center justify-between px-2 pl-3 py-1">
              <div 
                @click="selectProject('company')" 
                class="text-sm text-gray-700 font-bold truncate max-w-[180px] cursor-pointer hover:text-gray-900"
              >公司agent收费方案</div>
              <button @click="toggleCollapse('company')" class="text-gray-500 hover:text-gray-700 flex-shrink-0">
                <svg class="w-4 h-4 transform transition-transform" :class="{ 'rotate-180': !isCollapsed.company }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div class="space-y-1" v-if="!isCollapsed.company">
              <div class="p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                <div class="text-sm text-gray-600 truncate">订阅制收费方案</div>
              </div>
            </div>
          </div>

          <!-- 番茄土豆炖牛腩配菜方案 -->
          <div class="space-y-1">
            <div class="flex items-center justify-between px-2 pl-3 py-1">
              <div 
                @click="selectProject('recipe')" 
                class="text-sm text-gray-700 font-bold truncate max-w-[180px] cursor-pointer hover:text-gray-900"
              >番茄土豆炖牛腩配菜方案</div>
              <button @click="toggleCollapse('recipe')" class="text-gray-500 hover:text-gray-700 flex-shrink-0">
                <svg class="w-4 h-4 transform transition-transform" :class="{ 'rotate-180': !isCollapsed.recipe }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div class="space-y-1" v-if="!isCollapsed.recipe">
              <div class="p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                <div class="text-sm text-gray-600 truncate">牛肉的选择</div>
              </div>
              <div class="p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                <div class="text-sm text-gray-600 truncate">番茄的用量</div>
              </div>
              <div class="p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                <div class="text-sm text-gray-600 truncate">把土豆炖化的方法</div>
              </div>
              <div class="p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                <div class="text-sm text-gray-600 truncate">香料种类</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <template v-if="selectedProject">
        <ProjectDetailView 
          :project-title="projectTitles[selectedProject]"
          :project-description="projectDescriptions[selectedProject]"
        />
      </template>
      <template v-else>
        <!-- Welcome Message -->
        <div class="flex-1 flex items-center justify-center">
          <div class="text-center max-w-2xl">
            <h1 class="text-3xl font-bold text-gray-800 mb-4">欢迎使用Copilot</h1>
            <p class="text-gray-600 mb-8">我是您的AI助手，可以帮助您解答问题、生成代码、分析数据等。</p>
          </div>
        </div>

        <!-- Input Area -->
        <div class="p-4">
          <div class="max-w-3xl mx-auto">
            <div class="flex items-center bg-white rounded-lg border border-gray-200 p-2">
              <input 
                type="text" 
                class="flex-1 outline-none px-4 py-2" 
                placeholder="请输入您的问题..."
              >
              <button class="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProjectDetailView from './ProjectDetailView.vue'

const isCollapsed = ref({
  general: false,
  company: false,
  recipe: false
})

const selectedProject = ref(null)

const projectTitles = {
  general: '一般对话',
  company: '公司agent收费方案',
  recipe: '番茄土豆炖牛腩配菜方案'
}

const projectDescriptions = {
  general: '这是一个用于一般性对话的项目，可以讨论各种话题。',
  company: '这个项目包含了公司agent的收费方案讨论和文档。',
  recipe: '这个项目包含了番茄土豆炖牛腩的详细配方和制作方法。'
}

const selectProject = (type) => {
  selectedProject.value = type
}

const toggleCollapse = (type) => {
  isCollapsed.value[type] = !isCollapsed.value[type]
}
</script> 