<template>
  <div class="p-4">
    <div class="max-w-4xl mx-auto">
      <!-- Welcome Message -->
      <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h1 class="text-2xl font-bold text-gray-800 mb-4">欢迎使用SpiritAI</h1>
        <p class="text-gray-600">这是一个基于Vue 3 + Vite + Tailwind CSS + Element Plus的现代网页原型。请从左侧选择您想要交互的AI助手。</p>
      </div>

      <!-- Feature Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white rounded-lg shadow-sm p-4">
          <h2 class="text-lg font-semibold text-gray-800 mb-2">Copilot</h2>
          <p class="text-gray-600 text-sm">与AI助手进行自然对话，获取专业建议和帮助。</p>
        </div>
        <div class="bg-white rounded-lg shadow-sm p-4">
          <h2 class="text-lg font-semibold text-gray-800 mb-2">数据分析</h2>
          <p class="text-gray-600 text-sm">使用AI进行数据分析和可视化，获得深入洞察。</p>
        </div>
        <div class="bg-white rounded-lg shadow-sm p-4">
          <h2 class="text-lg font-semibold text-gray-800 mb-2">代码生成</h2>
          <p class="text-gray-600 text-sm">通过自然语言描述生成代码，提高开发效率。</p>
        </div>
        <div class="bg-white rounded-lg shadow-sm p-4">
          <h2 class="text-lg font-semibold text-gray-800 mb-2">文档处理</h2>
          <p class="text-gray-600 text-sm">智能处理和分析文档，提取关键信息。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script> 