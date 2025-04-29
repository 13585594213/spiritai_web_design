<template>
  <div class="flex h-full">
    <!-- AI Tools Sidebar -->
    <div class="w-64 bg-white border-r border-gray-200 flex flex-col">
      <!-- Tool List -->
      <div class="flex-1 overflow-y-auto">
        <div class="space-y-2 px-4 py-4">
          <!-- Text to Speech -->
          <div class="flex items-center p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
            <div class="w-6 h-6 text-gray-600 mr-3">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <div>
              <div class="text-sm font-medium text-gray-700">文字转语音</div>
              <div class="text-xs text-gray-500">将文字转换为自然语音</div>
            </div>
          </div>

          <!-- Voice Changer -->
          <div class="flex items-center p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
            <div class="w-6 h-6 text-gray-600 mr-3">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            </div>
            <div>
              <div class="text-sm font-medium text-gray-700">变声器</div>
              <div class="text-xs text-gray-500">将声音转换为不同风格</div>
            </div>
          </div>

          <!-- Voice Separator -->
          <div class="flex items-center p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
            <div class="w-6 h-6 text-gray-600 mr-3">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <div>
              <div class="text-sm font-medium text-gray-700">人声分离</div>
              <div class="text-xs text-gray-500">从音频中提取人声</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 bg-gray-50 flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-2xl font-semibold text-gray-800 mb-2">欢迎使用AI音频工具</h1>
        <p class="text-gray-600">请从左侧边栏选择一个工具</p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script> 