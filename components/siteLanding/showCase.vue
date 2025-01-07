<template>
    <div>
        <div class=" text-white p-6 rounded-lg shadow-lg" style="overflow: hidden; height: 610px;">
  <!-- Header Section -->
  <h2 class="text-xl font-semibold mb-4 text-center">SDKs</h2>
  <p class="text-gray-400 text-center mb-6">
    Language-specific tools for performing encryption operations and workflows from your code.
  </p>
  <button class="block bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg mx-auto">
    Learn more
  </button>

  <!-- Circular Layers with Icons -->
  <div class="relative mt-12 flex items-center justify-center" style="transform: translateY(350px);">
    <!-- Large Circle -->
    <div class="bx-1 bg-gray-800 rounded-full absolute">
        <BorderBeam
        :size="200"
        :duration="12"
        :delay="0"
        :border-width="2"
      />
    </div>
    <!-- Medium Circle -->
    <div class="bx-2 w-48 h-48 bg-gray-700 rounded-full absolute">
        <BorderBeam
        :size="200"
        :duration="13"
        :delay="0"
        :border-width="2"
      />
    </div>
    <!-- Small Circle -->
    <div class="bx-3 w-32 h-32 bg-gray-600 rounded-full absolute">
        <BorderBeam
        :size="300"
        :duration="11"
        :delay="0"
        :border-width="2"
      />
    </div>

    <!-- Icons -->
    <!-- Top Icon -->

  </div>
</div>
    </div>
</template>

<script setup>
import BorderBeam from '~/components/landingUi/BorderBeam.vue'
</script>

<style scoped>

.bx-1 {
    width: 550px;
    height: 550px;
    transform: translateY(93px);
    background: #0f1521;
}

.bx-2 {
    height: 430px;
    width: 430px;
    transform: translateY(93px);
    background: #151b28;
}

.bx-3 {
    height: 300px;
    width: 300px;
    transform: translateY(93px);
    background: #1f2533;
}

</style>