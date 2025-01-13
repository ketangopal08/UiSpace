<template>
 <div class="flex h-screen">
  <!-- Sidebar -->
  <aside class="w-64 bg-gray-800 text-white flex flex-col">
    <div class="p-4 text-xl font-bold border-b border-gray-700">Dashboard</div>
    <nav class="flex-1 p-4 space-y-2">
      <a href="#" class="block py-2 px-4 rounded hover:bg-gray-700">Home</a>
      <a href="#" class="block py-2 px-4 rounded hover:bg-gray-700">Profile</a>
      <a href="#" class="block py-2 px-4 rounded hover:bg-gray-700">Settings</a>
    </nav>
    <div class="p-4 border-t border-gray-700">Logout</div>
  </aside>

  <!-- Main Content -->
  <div class="flex-1 flex flex-col">
    <!-- Header -->
    <header class="bg-gray-100 border-b border-gray-300 p-4">
      <h1 class="text-lg font-semibold">Welcome Back!</h1>
    </header>

    <!-- Main Area -->
    <main class="flex-1 p-6 bg-gray-50">
      <div class="rounded bg-white p-4 shadow">
        <nuxt-child />
      </div>
    </main>
  </div>
</div>

</template>

<script setup>
import Sidebar from '~/components/ui/sidebar/Sidebar.vue';
</script>

<style>

</style>