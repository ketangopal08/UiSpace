<template>
    <div>
        <div class="fixed top-4 left-1/2 transform -translate-x-1/2 w-[70%] max-w-6xl z-50 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg shadow-md">
  <div class="px-2 py-2 flex items-center justify-between">
    <!-- Left Menu -->
    <div class="flex items-center space-x-6">
      <img class="ml-4" src="/assets/images/logo-1.png" style="height: 24px;" alt="" srcset="">
      <!-- <span class="dark:text-white font-bold text-sm" style="margin-left: 6px;margin-right: 20px;">UiSpace</span> -->
      
      <a href="#" class="dark:text-white font-normal text-sm">Components</a>
      <a href="#" class="dark:text-white font-normal text-sm">Docs</a>
      <a href="#" class="dark:text-white font-normal text-sm">About</a>
    </div>

    
    <!-- Right Menu -->
    <div class="flex items-center space-x-4">
      <a href="#" class=" rounded py-1.5 px-3 text-sm font-normal text-white shadow-sm flex"><div class="flex-initial"> <Github style="transform: translateY(2px);" class="w-4 h-4 mr-1" /></div> Contribute on GitHub</a>
      <a href="#" class="rounded-md bg-primary py-1.5 px-3 text-sm font-semibold text-white shadow-sm ">
        <NuxtLink to="/app">Get started</NuxtLink></a>
    </div>
  </div>
</div>
<div class="relative isolate px-6 lg:px-8 dark:bg-primary-dark dark:text-gray-100">
    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>
    <div class="mx-auto  py-10 sm:py-48 lg:py-56 lg:pb-30">
      <div class="hidden sm:mb-8 sm:flex sm:justify-center">
        <div class="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 font-primary dark:text-text-secondary ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          <TextGenerateEffect
        words="Open-Source UI"
      />
       
        </div>
      </div>
      <div class="text-center" >
        <h1 class="text-balance text-5xl font-primary font-semibold tracking-tight dark:text-gray-100 text-gray-900 sm:text-7xl">A Universe of Custom <br>UI Components</h1>
        <p class="mt-8 text-pretty text-lg font-light text-gray-500 dark:text-text-secondary sm:text-xl/1">
          UISpace offers reusable, high-quality UI components built with Vue, Nuxt, and Tailwind CSS.<br> It enables developers to build modern, scalable, and stunning interfaces effortlessly.</p>
        <div class="mt-10 flex items-center justify-center gap-x-6" v-motion
                :initial="{
                  opacity: 0,
                  y: 100,
                }"
                :visibleOnce="{
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: 'spring',
                    delay: 50,
                    damping: 10,
                    stiffness: 100,
                    duration:300
                  },
                }">
          <button class="mt-6 flex items-center space-x-2 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 px-4 py-2 rounded-lg transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.75 13C14 13 14 7.75 14 7.75C14 7.75 14 13 18.25 13C14 13 14 18.25 14 18.25C14 18.25 14 13 9.75 13Z" fill="currentColor"/>
                <path d="M5.75 8C8 8 8 5.75 8 5.75C8 5.75 8 8 10.25 8C8 8 8 10.25 8 10.25C8 10.25 8 8 5.75 8Z" fill="currentColor"/>
                <path d="M7.75 16.25H7.76M18.25 5.75H18.26M18.25 18.25H18.26M14 7.75C14 7.75 14 13 9.75 13C14 13 14 18.25 14 18.25C14 18.25 14 13 18.25 13C14 13 14 7.75 14 7.75ZM8 5.75C8 5.75 8 8 5.75 8C8 8 8 10.25 8 10.25C8 10.25 8 8 10.25 8C8 8 8 5.75 8 5.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Get Started for Free</span>
            </button>
            <!-- <button class="mt-6 flex items-center space-x-2 hover:bg-purple-500/20 text-purple-400 px-4 py-2 rounded-lg transition-colors">
             
              <span>Learn more <span aria-hidden="true">→</span></span>
            </button> -->
        </div>
      </div>
    </div>
    <!-- <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
      <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div> -->
  </div>
    </div>
</template>

<script setup>
import TextGenerateEffect from '../landingUi/TextGenerateEffect.vue';
import { Github } from 'lucide-vue-next';

</script>