<template>
  <div class="flex flex-col h-full">
    <!-- Project Header -->
    <div class="p-6 border-b border-gray-200">
      <h1 class="text-2xl font-bold text-gray-800 mb-2">{{ projectTitle }}</h1>
      <p class="text-gray-600">{{ projectDescription }}</p>
    </div>

    <!-- Main Content -->
    <div class="flex-1 overflow-y-auto p-6">
      <!-- Prompt Input Area -->
      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700 mb-2">提示词</label>
        <textarea
          class="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="请输入提示词..."
          v-model="prompt"
        ></textarea>
      </div>

      <!-- File List -->
      <div class="mb-6">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-semibold text-gray-800">文件列表</h2>
          <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            上传文件
          </button>
        </div>
        <div class="space-y-2">
          <div class="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-500 transition-colors">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span class="text-gray-700">项目文档.pdf</span>
              </div>
              <span class="text-sm text-gray-500">2.4 MB</span>
            </div>
          </div>
          <div class="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-500 transition-colors">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span class="text-gray-700">需求规格说明书.docx</span>
              </div>
              <span class="text-sm text-gray-500">1.8 MB</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Input Area -->
    <div class="p-4 border-t border-gray-200">
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
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  projectTitle: {
    type: String,
    required: true
  },
  projectDescription: {
    type: String,
    required: true
  }
})

const prompt = ref('')
</script> 