<template>
  <div>
    <div class="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl z-50 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg shadow-md">
  <div class="px-2 py-2 flex items-center justify-between">
    <!-- Left Menu -->
    <div class="flex items-center space-x-6">
      <img class="ml-2" src="/assets/images/logo-1.png" style="height: 24px;" alt="" srcset="">
      <span class="dark:text-white font-bold text-sm" style="margin-left: 6px;">UiSpace</span>
      
      <a href="#" class="dark:text-white font-medium text-sm">How it works</a>
      <a href="#" class="dark:text-white font-medium text-sm">Features</a>
      <a href="#" class="dark:text-white font-medium text-sm">Pricing</a>
      <a href="#" class="dark:text-white font-medium text-sm">Integrations</a>
      <a href="#" class="dark:text-white font-medium text-sm">Resources</a>
    </div>

    <!-- Right Menu -->
    <div class="flex items-center space-x-4">
      <a href="#" class="rounded-md bg-primary py-1.5 px-3 text-sm font-semibold text-white shadow-sm ">Get started</a>
    </div>
  </div>
</div>
<div class="relative isolate px-6 lg:px-8 dark:bg-primary-dark dark:text-gray-100">
    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>
    <div class="mx-auto  py-10 sm:py-48 lg:py-56">
      <div class="hidden sm:mb-8 sm:flex sm:justify-center">
        <div class="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 dark:text-gray-100 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          <RadiantText
            class="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
            :duration="5"
          >
            <span class="text-md font-medium">Design Faster, Build Smarter.</span>
          </RadiantText>
        </div>
      </div>
      <div class="text-center">
        <h1 class="text-balance text-5xl font-primary font-semibold tracking-tight dark:text-gray-100 text-gray-900 sm:text-7xl">A Universe of Custom <br>UI Components</h1>
        <p class="mt-8 text-pretty text-lg font-light text-gray-500 dark:text-gray-100 sm:text-xl/8">
          UISpace offers reusable, high-quality UI components built with Vue, Nuxt, and Tailwind CSS.<br> It enables developers to build modern, scalable, and stunning interfaces effortlessly.</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <button class="mt-6 flex items-center space-x-2 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 px-4 py-2 rounded-lg transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.75 13C14 13 14 7.75 14 7.75C14 7.75 14 13 18.25 13C14 13 14 18.25 14 18.25C14 18.25 14 13 9.75 13Z" fill="currentColor"/>
                <path d="M5.75 8C8 8 8 5.75 8 5.75C8 5.75 8 8 10.25 8C8 8 8 10.25 8 10.25C8 10.25 8 8 5.75 8Z" fill="currentColor"/>
                <path d="M7.75 16.25H7.76M18.25 5.75H18.26M18.25 18.25H18.26M14 7.75C14 7.75 14 13 9.75 13C14 13 14 18.25 14 18.25C14 18.25 14 13 18.25 13C14 13 14 7.75 14 7.75ZM8 5.75C8 5.75 8 8 5.75 8C8 8 8 10.25 8 10.25C8 10.25 8 8 10.25 8C8 8 8 5.75 8 5.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Getting started</span>
            </button>
            <!-- <button class="mt-6 flex items-center space-x-2 hover:bg-purple-500/20 text-purple-400 px-4 py-2 rounded-lg transition-colors">
             
              <span>Learn more <span aria-hidden="true">→</span></span>
            </button> -->
        </div>
      </div>
    </div>
    <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
      <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>
  </div>


  <div class="dark:bg-primary-dark dark:text-gray-100 min-h-screen flex flex-col items-center px-6 py-10">
    <header class="text-center mb-16">
      <h1 class="text-4xl font-bold">
        More enjoyable <span class="text-purple-500">with your team</span>
      </h1>
      <p class="mt-4 text-gray-400">
        Seamless integration and features to enhance team collaboration.
      </p>
    </header>



    <!-- Grid Layout -->
    <div class="relative w-full max-w-6xl h-[700px] grid place-items-center">
      <!-- Central Icon -->
      <div class="absolute " style="width: 100%; height: 1000px;top: 20px;">
       
    <div
    class="relative flex h-[750px] w-full flex-col items-center justify-center overflow-hidden rounded-lg lg:w-full md:w-full"
  >
    <p
      class="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white"
    >
      Ripple
    </p>
    <Ripple
      circle-class="border-[hsl(var(--primary))] bg-[#0000]/25 dark:bg-[#fff]/25 rounded-full"
    />
  </div>
      </div>

      <!-- Top Left -->
      <div class="absolute top-10 left-10 flex flex-col items-center gap-2">
        <div class="bg-purple-500 p-4 rounded-full shadow-lg">
          <i class="fas fa-layer-group text-xl"></i>
        </div>
        <h3 class="text-lg font-semibold text-center">All inside one app</h3>
        <p class="text-gray-400 text-sm text-center">
          Seamless connection with Loom, Google Meet, and Zoom in one app.
        </p>
      </div>

      <!-- Bottom Left -->
      <div class="absolute bottom-10 left-10 flex flex-col items-center gap-2">
        <div class="bg-purple-500 p-4 rounded-full shadow-lg">
          <i class="fas fa-gamepad text-xl"></i>
        </div>
        <h3 class="text-lg font-semibold text-center">Gamification</h3>
        <p class="text-gray-400 text-sm text-center">
          Make tasks fun with points, achievements, and leveling up.
        </p>
      </div>

      <!-- Top Right -->
      <div class="absolute top-10 right-10 flex flex-col items-center gap-2">
        <div class="bg-purple-500 p-4 rounded-full shadow-lg">
          <i class="fas fa-tasks text-xl"></i>
        </div>
        <h3 class="text-lg font-semibold text-center">Project Tracker</h3>
        <p class="text-gray-400 text-sm text-center">
          Stay organized with an intuitive tracking feature.
        </p>
      </div>

      <!-- Bottom Right -->
      <div class="absolute bottom-10 right-10 flex flex-col items-center gap-2">
        <div class="bg-purple-500 p-4 rounded-full shadow-lg">
          <i class="fas fa-th text-xl"></i>
        </div>
        <h3 class="text-lg font-semibold text-center">Widgets</h3>
        <p class="text-gray-400 text-sm text-center">
          Customize your app with user-friendly widgets for easy access.
        </p>
      </div>
    </div>

    <!-- Statistics Section -->
    <div class="mt-16 flex gap-16 text-center">
      <div>
        <h3 class="text-3xl font-bold">40.89k</h3>
        <p class="text-gray-400">Teams</p>
      </div>
      <div>
        <h3 class="text-3xl font-bold">21.47k</h3>
        <p class="text-gray-400">Start-up</p>
      </div>
      <div>
        <h3 class="text-3xl font-bold">19.71k</h3>
        <p class="text-gray-400">Company</p>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import RadiantText from '~/components/landingUi/RadiantText.vue'
import Ripple from '~/components/landingUi/Ripple.vue';
</script>

<style>

</style>