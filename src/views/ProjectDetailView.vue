<template>
  <div class="flex-1 flex flex-col">
    <!-- Project Header -->
    <div class="p-6 border-b border-gray-200">
      <h1 class="text-2xl font-bold text-gray-800">{{ projectTitle }}</h1>
      <p class="text-gray-600 mt-2">{{ projectDescription }}</p>
    </div>

    <!-- File List -->
    <div class="flex-1 overflow-y-auto p-6">
      <div class="max-w-3xl mx-auto">
        <!-- File List Header -->
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-semibold text-gray-800">文件列表</h2>
          <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            上传文件
          </button>
        </div>

        <!-- File List -->
        <div class="space-y-2">
          <div class="bg-white rounded-lg border border-gray-200 p-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div>
                  <div class="text-sm font-medium text-gray-800">项目文档.pdf</div>
                  <div class="text-xs text-gray-500">2.5 MB · 2023-04-15</div>
                </div>
              </div>
              <button class="text-gray-400 hover:text-gray-600">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>

          <div class="bg-white rounded-lg border border-gray-200 p-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div>
                  <div class="text-sm font-medium text-gray-800">会议记录.docx</div>
                  <div class="text-xs text-gray-500">1.2 MB · 2023-04-10</div>
                </div>
              </div>
              <button class="text-gray-400 hover:text-gray-600">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
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
defineProps({
  projectTitle: {
    type: String,
    required: true
  },
  projectDescription: {
    type: String,
    required: true
  }
})
</script> 