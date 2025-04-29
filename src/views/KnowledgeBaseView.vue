<template>
  <div class="p-6 bg-gray-50 min-h-full">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="mb-6">
        <h1 class="text-xl font-semibold text-gray-800">Knowledge Base</h1>
      </div>

      <!-- Knowledge Base List -->
      <div class="space-y-4">
        <!-- Python Programming Guide -->
        <div class="bg-white rounded-lg border border-gray-200">
          <div class="p-4">
            <div class="flex justify-between items-center">
              <div>
                <h2 class="text-base font-medium text-gray-800">Python Programming Guide</h2>
                <p class="text-sm text-gray-600 mt-1">Python fundamentals, advanced concepts, and modern development best practices</p>
              </div>
              <div class="flex items-center space-x-4">
                <span class="text-sm text-gray-500">John Doe</span>
                <span class="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Editable</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Vue 3 Development Docs -->
        <div class="bg-white rounded-lg border border-gray-200">
          <div class="p-4">
            <div class="flex justify-between items-center">
              <div>
                <h2 class="text-base font-medium text-gray-800">Vue 3 Development Docs</h2>
                <p class="text-sm text-gray-600 mt-1">Complete documentation for Vue 3, including Composition API, components, and state management</p>
              </div>
              <div class="flex items-center space-x-4">
                <span class="text-sm text-gray-500">Alice Smith</span>
                <span class="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Read Only</span>
              </div>
            </div>
          </div>
        </div>

        <!-- React Best Practices -->
        <div class="bg-white rounded-lg border border-gray-200">
          <div class="p-4">
            <div class="flex justify-between items-center">
              <div>
                <h2 class="text-base font-medium text-gray-800">React Best Practices</h2>
                <p class="text-sm text-gray-600 mt-1">React patterns, optimization techniques, and architectural guidelines</p>
              </div>
              <div class="flex items-center space-x-4">
                <span class="text-sm text-gray-500">Robert Brown</span>
                <span class="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Admin</span>
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