<template>
  <div class="p-6 bg-gray-50 min-h-full">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="mb-6">
        <h1 class="text-xl font-semibold text-gray-800">知识库</h1>
      </div>

      <!-- Knowledge Base List -->
      <div class="space-y-4">
        <!-- Python Programming Guide -->
        <div class="bg-white rounded-lg border border-gray-200">
          <div class="p-4">
            <div class="flex justify-between items-center">
              <div>
                <h2 class="text-base font-medium text-gray-800">Python编程指南</h2>
                <p class="text-sm text-gray-600 mt-1">Python基础知识、高级概念和现代开发最佳实践</p>
              </div>
              <div class="flex items-center space-x-4">
                <span class="text-sm text-gray-500">张三</span>
                <span class="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">可编辑</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Vue 3 Development Docs -->
        <div class="bg-white rounded-lg border border-gray-200">
          <div class="p-4">
            <div class="flex justify-between items-center">
              <div>
                <h2 class="text-base font-medium text-gray-800">Vue 3开发文档</h2>
                <p class="text-sm text-gray-600 mt-1">Vue 3的完整文档，包括组合式API、组件和状态管理</p>
              </div>
              <div class="flex items-center space-x-4">
                <span class="text-sm text-gray-500">李四</span>
                <span class="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">只读</span>
              </div>
            </div>
          </div>
        </div>

        <!-- React Best Practices -->
        <div class="bg-white rounded-lg border border-gray-200">
          <div class="p-4">
            <div class="flex justify-between items-center">
              <div>
                <h2 class="text-base font-medium text-gray-800">React最佳实践</h2>
                <p class="text-sm text-gray-600 mt-1">React模式、优化技术和架构指南</p>
              </div>
              <div class="flex items-center space-x-4">
                <span class="text-sm text-gray-500">王五</span>
                <span class="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">管理员</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script> 