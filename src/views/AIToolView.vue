<template>
  <div class="flex h-full">
    <!-- Tool List Sidebar -->
    <div class="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div class="flex-1 overflow-y-auto">
        <div class="space-y-2 px-4 py-4">
          <!-- 知识库 -->
          <div class="p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
            <div class="flex items-center">
              <div class="w-6 h-6 text-gray-600 mr-3">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span class="text-sm font-medium text-gray-700">知识库</span>
            </div>
          </div>

          <!-- AI问答 -->
          <div class="p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
            <div class="flex items-center">
              <div class="w-6 h-6 text-gray-600 mr-3">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span class="text-sm font-medium text-gray-700">AI问答</span>
            </div>
          </div>

          <!-- 代码生成 -->
          <div class="p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
            <div class="flex items-center">
              <div class="w-6 h-6 text-gray-600 mr-3">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <span class="text-sm font-medium text-gray-700">代码生成</span>
            </div>
          </div>

          <!-- 图像流媒体 -->
          <div class="p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
            <div class="flex items-center">
              <div class="w-6 h-6 text-gray-600 mr-3">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <span class="text-sm font-medium text-gray-700">图像流媒体</span>
            </div>
          </div>

          <!-- 权限管理 -->
          <div class="p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
            <div class="flex items-center">
              <div class="w-6 h-6 text-gray-600 mr-3">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <span class="text-sm font-medium text-gray-700">权限管理</span>
            </div>
          </div>

          <!-- 系统配置 -->
          <div class="p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
            <div class="flex items-center">
              <div class="w-6 h-6 text-gray-600 mr-3">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span class="text-sm font-medium text-gray-700">系统配置</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 bg-gray-50 flex items-center justify-center">
      <div class="text-center">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">选择工具开始使用</h2>
        <p class="text-gray-600">请从左侧选择您需要的工具</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// 组件逻辑
</script> 