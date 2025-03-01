<template>
  <div class="max-w-3xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-4">Getting Started</h1>
    
    <section class="mb-6">
      <h2 class="text-2xl font-semibold mb-2">Installation</h2>
      <p class="mb-2">To install UiSpace in a Vue 3 & Nuxt 3 project using Tailwind CSS, use one of the following commands:</p>
      <pre class="bg-gray-800 text-white p-4 rounded-md"><code>npm install uispace</code></pre>
      <pre class="bg-gray-800 text-white p-4 rounded-md mt-2"><code>yarn add uispace</code></pre>
    </section>

    <section class="mb-6">
      <h2 class="text-2xl font-semibold mb-2">Project Structure</h2>
      <p class="mb-2">Recommended structure for integrating UiSpace in a Nuxt 3 project:</p>
      <pre class="bg-gray-800 text-white p-4 rounded-md">
        <code>
/my-nuxt-project
│── /components
│   ├── /UiSpace
│   │   ├── Button.vue
│   │   ├── Card.vue
│   │   ├── Modal.vue
│── /pages
│── /assets
│── /styles
│── /utils
│── /plugins
│── app.vue
│── nuxt.config.ts
│── package.json
        </code>
      </pre>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-2">Settings</h2>
      <h3 class="text-xl font-semibold mb-1">Tailwind CSS Configuration</h3>
      <p class="mb-2">Modify <code>tailwind.config.js</code> to customize UiSpace styles:</p>
      <pre class="bg-gray-800 text-white p-4 rounded-md">
        <code>
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        secondary: '#9333EA',
      },
    },
  },
  plugins: [],
}
        </code>
      </pre>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
pre {
  overflow-x: auto;
}
</style>
