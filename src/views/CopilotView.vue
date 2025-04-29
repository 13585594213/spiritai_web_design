<template>
  <div class="flex h-full">
    <!-- Chat History Sidebar -->
    <div class="w-64 bg-white border-r border-gray-200 flex flex-col">
      <!-- New Chat Button -->
      <div class="p-4">
        <button class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 flex items-center justify-center">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          New Chat
        </button>
      </div>

      <!-- Chat History List -->
      <div class="flex-1 overflow-y-auto">
        <div class="space-y-2 px-4">
          <!-- Chat History Items -->
          <div class="p-3 rounded-lg bg-gray-50 cursor-not-allowed">
            <div class="text-sm font-medium text-gray-700 truncate">How to optimize Python code performance?</div>
          </div>
          <div class="p-3 rounded-lg bg-gray-50 cursor-not-allowed">
            <div class="text-sm font-medium text-gray-700 truncate">Best practices for Vue 3 component communication</div>
          </div>
          <div class="p-3 rounded-lg bg-gray-50 cursor-not-allowed">
            <div class="text-sm font-medium text-gray-700 truncate">React vs Vue comparison analysis</div>
          </div>
          <div class="p-3 rounded-lg bg-gray-50 cursor-not-allowed">
            <div class="text-sm font-medium text-gray-700 truncate">How to implement a simple chatbot?</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <!-- Welcome Message -->
      <div class="flex-1 flex items-center justify-center">
        <div class="text-center max-w-2xl">
          <h1 class="text-3xl font-bold text-gray-800 mb-4">Welcome to Copilot</h1>
          <p class="text-gray-600 mb-8">I'm your AI assistant, here to help you with questions, code generation, data analysis, and more.</p>
        </div>
      </div>

      <!-- Input Area -->
      <div class="p-4">
        <div class="max-w-3xl mx-auto">
          <div class="flex items-center bg-white rounded-lg border border-gray-200 p-2">
            <input 
              type="text" 
              class="flex-1 outline-none px-4 py-2" 
              placeholder="Enter your question..."
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