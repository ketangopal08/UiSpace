<template>
  <div>
  
      <heroSection></heroSection>

      <div class="dark:bg-primary-dark dark:text-gray-100 min-h-screen  px-6 py-10 section-2">


          <PatternBackground
              :direction="PATTERN_BACKGROUND_DIRECTION.TopRight"
              :variant="PATTERN_BACKGROUND_VARIANT.Grid"
              class="flex h-[46rem] w-full"
              :size="'section'"
            >


           
            <div class="grid grid-cols-7 grid-rows-6 gap-0">
    <div class="col-span-3 row-span-2">
      <div style="z-index: 2; position: relative;" class="pl-20">
        <h2 class="text-base/7 font-semibold text-primary">
           Introducing Ui Blocks</h2>
        <p class="mx-auto mt-2 font-primary text-4xl dark:text-gray-100 font-semibold  text-gray-950 sm:text-7xl">All Premium<br> Ui Components</p>
      </div>
    </div>
    <div class="col-span-4 row-span-5 col-start-4">
      <div style="position: relative;">
        <div style="position: absolute;left:150px" v-motion
  :initial="{
    y: 100,
    opacity: 0,
  }"
  :visible="{
    y: 0,
    opacity: 1,
    transition: {
      duration: 300,
      type: 'keyframes',
      ease: 'easeIn',
    },
  }">
          <img src="/assets/images/sec-2-3.png" alt="" style="border-radius: 40px;height: 250px;">
        </div>
        <div v-motion
  :initial="{
    y: 100,
    opacity: 0,
  }"
  :visible="{
    y: 0,
    opacity: 1,
    transition: {
      duration: 300,
      type: 'keyframes',
      ease: 'easeIn',
    },
  }" style="position: absolute;left:100px;top:350px">
          <img src="/assets/images/sec-2-5.jpg" alt="" style="border-radius: 20px;height: 290px;border: 3px solid #ccc;">
        </div>
        <div v-motion
  :initial="{
    y: 100,
    opacity: 0,
  }"
  :visible="{
    y: 0,
    opacity: 1,
    transition: {
      duration: 300,
      type: 'keyframes',
      ease: 'easeIn',
    },
  }" style="position: absolute;left:500px;top:0px;border-radius: 20px;">
          <BorderBeam
        :size="100"
        :duration="6"
        :delay="0"
        :border-width="2"
      />
          <img src="/assets/images/sec-2-6.jpg" alt="" style="border-radius: 20px;height: 290px;border: 3px solid #333;">
        </div>
        <!-- <div style="position: absolute;left:400px;top:380px">
          <img src="/assets/images/sec-2-9.jpg" alt="" style="border-radius: 10px;width: 250px;border: 1px solid #333;">
        </div> -->
        <div v-motion
  :initial="{
    y: 100,
    opacity: 0,
  }"
  :visible="{
    y: 0,
    opacity: 1,
    transition: {
      duration: 300,
      type: 'keyframes',
      ease: 'easeIn',
    },
  }" style="position: absolute;left:420px;top:370px">
          <img src="/assets/images/sec-2-10.png" alt="" style="border-radius: 20px;width: 270px;border: 3px solid #333;">
        </div>
      </div>
    </div>
    <div class="col-span-3 row-span-3 row-start-3">
      <div style="width: 100%;position: relative;">
        <div v-motion
  :initial="{
    y: 100,
    opacity: 0,
  }"
  :visible="{
    y: 0,
    opacity: 1,
    transition: {
      duration: 300,
      type: 'keyframes',
      ease: 'easeIn',
    },
  }" style="position: absolute;top: 25px;border-radius: 60px;">
          <BorderBeam
        :size="100"
        :duration="10"
        :delay="0"
        :border-width="3"
      />
          <img src="/assets/images/sec-2-1.png" alt="" style="border-radius: 60px;height: 300px;border: 3px solid #444;">
        </div>
        <div v-motion
  :initial="{
    y: 100,
    opacity: 0,
  }"
  :visible="{
    y: 0,
    opacity: 1,
    transition: {
      duration: 300,
      type: 'keyframes',
      ease: 'easeIn',
    },
  }" style="position: absolute;
             top: -6px;
    right: -50px;">
    
          <img src="/assets/images/sec-2-2.png" alt="" style="border-radius: 30px;height: 130px;border: 2px solid #3f3f3f;">
        </div>
        <div v-motion
  :initial="{
    y: 100,
    opacity: 0,
  }"
  :visible="{
    y: 0,
    opacity: 1,
    transition: {
      duration: 300,
      type: 'keyframes',
      ease: 'easeIn',
    },
  }" style="position: absolute;
  right: 20px;
    top: 179px;">
    
          <img src="/assets/images/sec-2-4.png" alt="" style="border-radius: 39px;height: 170px;border: 2px solid #888;">
        </div>
      </div>
    </div>
</div>
          </PatternBackground>
    
        </div>


  <div class="dark:bg-primary-dark dark:text-gray-100 min-h-screen flex flex-col items-center px-6 py-10">

    <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
    <h2 class="text-center text-base/7 font-semibold text-primary">Build Better</h2>
    <p class="mx-auto mt-2  text-balance text-center text-4xl dark:text-gray-100 font-semibold tracking-tight text-gray-950 sm:text-5xl">Faster with UiSpace Features</p>
    <div class="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
      <div class="relative lg:row-span-2">
        <div class="absolute inset-px rounded-lg bg-white dark:bg-secondary-dark lg:rounded-l-[2rem]"></div>
        <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
          <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
            <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-gray-100">Mobile friendly</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center dark:text-gray-100">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</p>
          </div>
          <div class="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
            <div class="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
              <img class="size-full object-cover object-top" src="https://tailwindui.com/plus/img/component-images/bento-03-mobile-friendly.png" alt="">
            </div>
          </div>
        </div>
        <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
      </div>
      <div class="relative max-lg:row-start-1">
        <div class="absolute inset-px rounded-lg bg-white dark:bg-secondary-dark max-lg:rounded-t-[2rem]"></div>
        <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
          <div class="px-8 pt-8 sm:px-10 sm:pt-10">
            <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Performance</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.</p>
          </div>
          <div class="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
            <img class="w-full max-lg:max-w-xs" src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png" alt="">
          </div>
        </div>
        <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
      </div>
      <div class="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
        <div class="absolute inset-px rounded-lg bg-white dark:bg-secondary-dark"></div>
        <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
          <div class="px-8 pt-8 sm:px-10 sm:pt-10">
            <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Security</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.</p>
          </div>
          <div class="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
            <img class="h-[min(152px,40cqw)] object-cover" src="https://tailwindui.com/plus/img/component-images/bento-03-security.png" alt="">
          </div>
        </div>
        <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
      </div>
      <div class="relative lg:row-span-2">
        <div class="absolute inset-px rounded-lg bg-white dark:bg-secondary-dark max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
        <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">


          <showCase>  </showCase>
          
        </div>
        <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
      </div>
    </div>
  </div>

  </div>
  </div>
</template>

<script setup>
import showCase from '~/components/siteLanding/showCase.vue'
import heroSection from '~/components/siteLanding/heroSection.vue';
import PatternBackground from '~/components/landingUi/PatternBackground/PatternBackground.vue';
import {
  PATTERN_BACKGROUND_DIRECTION,
  PATTERN_BACKGROUND_VARIANT,
} from "~/components/landingUi/PatternBackground/";
import BorderBeam from '~/components/landingUi/BorderBeam.vue'
</script>

<style>
.section-2 .pattern-background-border {
  background-image: linear-gradient(to right, #1b162e 1px, transparent 1px), linear-gradient(to bottom, #1b162e 1px, transparent 1px);
}
.section-2 .pattern-background-color {
  background-color: #02080e;
}
</style>