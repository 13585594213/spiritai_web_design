<template>
  <div class="flex h-full">
    <!-- Knowledge Base Sidebar -->
    <div class="w-64 bg-white border-r border-gray-200 flex flex-col">
      <!-- Knowledge Base List -->
      <div class="flex-1 overflow-y-auto">
        <div class="space-y-2 px-4 py-4">
          <!-- Knowledge Base Items -->
          <div class="p-3 rounded-lg bg-gray-50 cursor-not-allowed">
            <div class="text-sm font-medium text-gray-700 truncate">Python Programming Guide</div>
            <div class="text-xs text-gray-500 mt-1">Python fundamentals, advanced concepts, and modern development best practices</div>
          </div>
          <div class="p-3 rounded-lg bg-gray-50 cursor-not-allowed">
            <div class="text-sm font-medium text-gray-700 truncate">Vue 3 Development Docs</div>
            <div class="text-xs text-gray-500 mt-1">Complete documentation for Vue 3, including Composition API, components, and state management</div>
          </div>
          <div class="p-3 rounded-lg bg-gray-50 cursor-not-allowed">
            <div class="text-sm font-medium text-gray-700 truncate">React Best Practices</div>
            <div class="text-xs text-gray-500 mt-1">React patterns, optimization techniques, and architectural guidelines</div>
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
          New Question
        </button>
      </div>

      <!-- Question List -->
      <div class="flex-1 overflow-y-auto">
        <div class="space-y-2 px-4">
          <!-- Question Items -->
          <div class="p-3 rounded-lg bg-gray-50 cursor-not-allowed">
            <div class="text-sm font-medium text-gray-700 truncate">What is the difference between AI and ML?</div>
          </div>
          <div class="p-3 rounded-lg bg-gray-50 cursor-not-allowed">
            <div class="text-sm font-medium text-gray-700 truncate">How does neural network work?</div>
          </div>
          <div class="p-3 rounded-lg bg-gray-50 cursor-not-allowed">
            <div class="text-sm font-medium text-gray-700 truncate">What are the main types of machine learning?</div>
          </div>
          <div class="p-3 rounded-lg bg-gray-50 cursor-not-allowed">
            <div class="text-sm font-medium text-gray-700 truncate">How to evaluate AI model performance?</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <!-- Welcome Message -->
      <div class="flex-1 flex items-center justify-center">
        <div class="text-center max-w-2xl">
          <h1 class="text-3xl font-bold text-gray-800 mb-4">Welcome to AI QA</h1>
          <p class="text-gray-600 mb-8">Ask any questions about artificial intelligence, machine learning, and related technologies.</p>
        </div>
      </div>

      <!-- Input Area -->
      <div class="p-4">
        <div class="max-w-3xl mx-auto">
          <div class="flex items-center bg-white rounded-lg border border-gray-200 p-2">
            <input 
              type="text" 
              class="flex-1 outline-none px-4 py-2" 
              placeholder="Ask your question about AI..."
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