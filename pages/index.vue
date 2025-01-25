<template>
  <div>
  
      <heroSection></heroSection>

      <featureSection></featureSection>     


  <div class="dark:bg-primary-dark dark:text-gray-100 min-h-screen px-6 py-20 what-is-sec">

    <div class="mx-auto ">
    <h2 class="text-center text-base/7 font-semibold text-primary">Build Better</h2>
    <p class="mx-auto mt-2  text-balance text-center text-4xl dark:text-gray-100 font-semibold tracking-tight text-gray-950 sm:text-5xl">What is UiSpace?</p>
   
    <p class="mt-8 text-pretty text-lg text-center font-light text-gray-500 dark:text-text-secondary sm:text-xl/1">
      UiSpace is an open-source platform offering a curated library of customizable, developer-friendly<br> UI components. Built with modern technologies like Vue, Nuxt, and TailwindCSS,<br> UiSpace helps you speed up development without sacrificing design quality.</p>
      
  </div>


  <div class="max-w-6xl mx-auto px-4 py-12">
    <div class="grid grid-cols-3 gap-6">
          <div class="h-96 border border-border-dark rounded-[30px] overflow-hidden">
            <PatternBackground :direction="PATTERN_BACKGROUND_DIRECTION.TopRight" :variant="PATTERN_BACKGROUND_VARIANT.Grid"
            class="w-full h-96" :size="'section'">
            <div class="pa-20" >

        <div class="flex items-center justify-center h-96">
          <div class="text-center">
            <div class="flex items-center justify-center">
              <Rocket class="h-14 w-14 text-primary mb-8" strokeWidth={2} />
             
            </div>
            <div>
              <h3 class="text-lg font-normal font-primary text-gray-100">Lightweight and fast</h3>
              <p class="text-sm  dark:text-text-secondary mt-3">Optimized for performance, <br>ensuring your apps run seamlessly.</p>
            </div>
          </div>
          
        </div>

            </div>

            </PatternBackground>  
          </div>
          <div class="h-96 border border-border-dark rounded-[30px] overflow-hidden">
            <PatternBackground :direction="PATTERN_BACKGROUND_DIRECTION.TopRight" :variant="PATTERN_BACKGROUND_VARIANT.Grid"
            class="w-full h-96" :size="'section'">
            <div class="flex items-center justify-center h-96" >
              <div class="text-center">
                <div class="flex items-center justify-center mb-8">
               <svg width="60px" height="60px" viewBox="0 0 15 15" fill="#fff" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 3C5.63333 3 4.46667 4 4 5.99999C4.7 4.99999 5.51667 4.625 6.45 4.87499C6.98252 5.01763 7.36314 5.43155 7.78443 5.88974C8.47074 6.63613 9.26506 7.49999 11 7.49999C12.8667 7.49999 14.0333 6.49999 14.5 4.5C13.8 5.49999 12.9833 5.87499 12.05 5.62499C11.5175 5.48235 11.1369 5.06844 10.7156 4.61025C10.0293 3.86386 9.23494 3 7.5 3ZM4 7.49999C2.13333 7.49999 0.966667 8.49998 0.5 10.5C1.2 9.49998 2.01667 9.12498 2.95 9.37498C3.48252 9.51762 3.86314 9.93154 4.28443 10.3897C4.97074 11.1361 5.76506 12 7.5 12C9.36667 12 10.5333 11 11 8.99998C10.3 9.99998 9.48333 10.375 8.55 10.125C8.01748 9.98234 7.63686 9.56843 7.21557 9.11023C6.52926 8.36385 5.73494 7.49999 4 7.49999Z" stroke="#000000" stroke-linejoin="round"/>
          </svg>
          <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.1143 2H15L12 6.9L9.42857 2H0L12 23L24 2H19.1143ZM3 3.75H5.91429L12 14.6L18.0857 3.75H21L12 19.5L3 3.75Z" fill="#fff"/>
          </svg>
            <svg width="60px" height="60px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>file_type_nuxt</title><path d="M10.648,25.734a1.465,1.465,0,0,1-.157-.942H3.847L13.716,7.417l4.159,7.41,1.308-.976L15.076,6.467A1.752,1.752,0,0,0,13.7,5.56a1.531,1.531,0,0,0-1.343.924l-10,17.593a1.729,1.729,0,0,0-.087,1.656,1.526,1.526,0,0,0,1.456.706H12.1a1.523,1.523,0,0,1-1.456-.7Z" style="fill:#fff"/><path d="M29.636,24.112,21.589,9.823a1.692,1.692,0,0,0-1.351-.907,1.489,1.489,0,0,0-1.308.907l-1.064,1.7v3.3l2.371-4.071,7.951,14.071H25.163a1.377,1.377,0,0,1-.122.837l-.026.052a1.729,1.729,0,0,1-1.456.732h4.734a1.72,1.72,0,0,0,1.456-.732,1.548,1.548,0,0,0-.122-1.6Z" style="fill:#ccc"/><path d="M25.233,25.7l.026-.052.07-.139a1.278,1.278,0,0,0,.061-.7,2.11,2.11,0,0,0-.27-.724l-6.286-10.9-.95-1.656h-.017l-.959,1.648-6.277,10.9a2.18,2.18,0,0,0-.244.715,1.438,1.438,0,0,0,.148.942,1.563,1.563,0,0,0,1.482.7H23.725a1.79,1.79,0,0,0,1.508-.741ZM17.866,14.836,23.62,24.8H12.112Z" style="fill:#ccc"/></svg>
</div>
<div>
  <h3 class="text-lg font-normal font-primary text-gray-100">TailwindCSS & Vue.js Ready</h3>
  <p class="text-sm  dark:text-text-secondary mt-3">Built with Vue, Nuxt, and TailwindCSS,<br> ensuring modern and scalable UI components.</p>
</div>
</div>
</div>
            </PatternBackground>  
          </div>
          
          <div class="h-96 border border-border-dark rounded-[30px] overflow-hidden">
            <PatternBackground :direction="PATTERN_BACKGROUND_DIRECTION.TopRight" :variant="PATTERN_BACKGROUND_VARIANT.Grid"
            class="w-full h-96" :size="'section'">
            <div class="flex items-center justify-center h-96">
          <div class="text-center">
            <div class="flex items-center justify-center">
              <Sparkles class="h-14 w-14 text-secondary mb-8" strokeWidth={2} />
             
            </div>
            <div>
              <h3 class="text-lg font-normal font-primary text-gray-100">Open Source & Community-Driven</h3>
              <p class="text-sm  dark:text-text-secondary mt-3">Collaborate globally on open-source <br>innovation.</p>
            </div>
          </div>
          
        </div> 
            </PatternBackground>  
          </div>
      </div>
</div>
  
 

  </div>

  <div>
  <div class="mx-auto">
    <div class="relative isolate overflow-hidden bg-primary-dark px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
      <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stop-color="#7775D6" />
            <stop offset="1" stop-color="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <div class="mx-auto lg:py-20 lg:text-center">
        <h2 class="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">Get Started with UiSpace Today.</h2>
        <p class="mt-4 text-pretty text-lg/8 text-gray-300">Join thousands of developers building better interfaces with UiSpace’s open-source components.</p>
        <div class="mt-10 flex items-center justify-center gap-x-6  text-center">
          <a href="#" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Browse Components Now</a>
          <a href="#" class=" rounded py-1.5 text-sm font-normal text-white shadow-sm flex">Contribute on GitHub <div class="flex-initial"> <Github style="transform: translateY(2px);" class="w-4 h-4 ml-2" /></div></a>
        </div>
      </div>
    </div>
  </div>
</div>

  <footer class="bg-black text-gray-400">
  <div class="container mx-auto px-6 py-12 max-w-6xl">
    <!-- Top Section -->
    <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
      <!-- Logo and Newsletter -->
      <div>
        <h2 class="text-white text-2xl font-bold mb-4">UiSpace</h2>
        <p class="mb-4">Subscribe to our developer newsletter</p>
        <p class="text-sm mb-4">
          Get tips, technical guides, and best practices. Twice a month. Right in your inbox.
        </p>
   
      </div>

      <!-- Product -->
      <div>
        
      </div>

      <!-- Platform -->
      <div>
        <h3 class="text-white font-semibold mb-3">Platform</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-white">Developer API</a></li>
          <li><a href="#" class="hover:text-white">Partners</a></li>
        
        </ul>
      </div>

      <!-- Support -->
      <div>
        <h3 class="text-white font-semibold mb-3">Support</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-white">Docs</a></li>
          <li><a href="#" class="hover:text-white">Community Forum</a></li>
          <li><a href="#" class="hover:text-white">Professional Services</a></li>
         
        </ul>
      </div>

      <!-- Company -->
      <div>
        <h3 class="text-white font-semibold mb-3">Company</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-white">About</a></li>
          <li><a href="#" class="hover:text-white">Customer stories</a></li>
          <li><a href="#" class="hover:text-white">Blog</a></li>
        
        </ul>
      </div>
    </div>

    <!-- Divider -->

    <!-- Bottom Section -->
    <div class="flex  flex-col md:flex-row justify-between items-center text-sm text-gray-500 mt-5">
      <p>© 2025 UiSpace. Proudly Open Source.</p>
    
      <div class="flex space-x-4 mt-4 md:mt-0">
        <a href="#" class="hover:text-white"><i class="fab fa-linkedin"></i></a>
        <a href="#" class="hover:text-white"><i class="fab fa-youtube"></i></a>
        <a href="#" class="hover:text-white"><i class="fab fa-x-twitter"></i></a>
        <a href="#" class="hover:text-white"><i class="fab fa-tiktok"></i></a>
        <a href="#" class="hover:text-white"><i class="fab fa-github"></i></a>
      </div>
    </div>
  </div>
</footer>

  </div>
</template>

<script setup>
import showCase from '~/components/siteLanding/showCase.vue'
import heroSection from '~/components/siteLanding/heroSection.vue';
import featureSection from '~/components/siteLanding/featureSection.vue';
import { Rocket } from 'lucide-vue-next';
import { Sparkles } from 'lucide-vue-next';
import PatternBackground from '~/components/landingUi/PatternBackground/PatternBackground.vue';
import {
  PATTERN_BACKGROUND_DIRECTION,
  PATTERN_BACKGROUND_VARIANT,
} from "~/components/landingUi/PatternBackground/";
import BorderBeam from '~/components/landingUi/BorderBeam.vue'
import { Github } from 'lucide-vue-next';

useHead({
  title: 'UiSpace - Custom UI Components',
  
})
</script>


<style>
.what-is-sec .pattern-background-border {
  background-image: linear-gradient(to right, #181621 1px, transparent 1px), linear-gradient(to bottom, #181621 1px, transparent 1px);
}
.what-is-sec .pattern-background-color {
  background-color: #02080e;
}
</style>