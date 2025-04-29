<template>
  <div class="flex h-full">
    <!-- Knowledge Base Sidebar -->
    <div class="w-64 bg-white border-r border-gray-200 flex flex-col">
      <!-- Knowledge Base List -->
      <div class="flex-1 overflow-y-auto">
        <div class="space-y-2 px-4 py-4">
          <!-- Knowledge Base Items -->
          <div class="p-3 rounded-lg bg-gray-50 cursor-not-allowed">
            <div class="text-sm font-medium text-gray-700 truncate">Python编程指南</div>
            <div class="text-xs text-gray-500 mt-1">Python基础知识、高级概念和现代开发最佳实践</div>
          </div>
          <div class="p-3 rounded-lg bg-gray-50 cursor-not-allowed">
            <div class="text-sm font-medium text-gray-700 truncate">Vue 3开发文档</div>
            <div class="text-xs text-gray-500 mt-1">Vue 3的完整文档，包括组合式API、组件和状态管理</div>
          </div>
          <div class="p-3 rounded-lg bg-gray-50 cursor-not-allowed">
            <div class="text-sm font-medium text-gray-700 truncate">React最佳实践</div>
            <div class="text-xs text-gray-500 mt-1">React模式、优化技术和架构指南</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Question List Sidebar -->
    <div class="w-64 bg-white border-r border-gray-200 flex flex-col">
      <!-- New Question Button -->
      <div class="p-4">
        <button class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 flex items-center justify-center">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          新建问题
        </button>
      </div>

      <!-- Question List -->
      <div class="flex-1 overflow-y-auto">
        <div class="space-y-2 px-4">
          <!-- Question Items -->
          <div class="p-3 rounded-lg bg-gray-50 cursor-not-allowed">
            <div class="text-sm font-medium text-gray-700 truncate">AI和机器学习有什么区别？</div>
          </div>
          <div class="p-3 rounded-lg bg-gray-50 cursor-not-allowed">
            <div class="text-sm font-medium text-gray-700 truncate">神经网络是如何工作的？</div>
          </div>
          <div class="p-3 rounded-lg bg-gray-50 cursor-not-allowed">
            <div class="text-sm font-medium text-gray-700 truncate">机器学习的主要类型有哪些？</div>
          </div>
          <div class="p-3 rounded-lg bg-gray-50 cursor-not-allowed">
            <div class="text-sm font-medium text-gray-700 truncate">如何评估AI模型的性能？</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <!-- Welcome Message -->
      <div class="flex-1 flex items-center justify-center">
        <div class="text-center max-w-2xl">
          <h1 class="text-3xl font-bold text-gray-800 mb-4">欢迎使用AI问答</h1>
          <p class="text-gray-600 mb-8">您可以提出任何关于人工智能、机器学习及相关技术的问题。</p>
        </div>
      </div>

      <!-- Input Area -->
      <div class="p-4">
        <div class="max-w-3xl mx-auto">
          <div class="flex items-center bg-white rounded-lg border border-gray-200 p-2">
            <input 
              type="text" 
              class="flex-1 outline-none px-4 py-2" 
              placeholder="请输入您关于AI的问题..."
            >
            <button class="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script> 