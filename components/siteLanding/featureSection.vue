<template>
    <div class="dark:bg-primary-dark dark:text-gray-100 min-h-screen  px-6 py-10 section-2">


        <PatternBackground :direction="PATTERN_BACKGROUND_DIRECTION.TopRight" :variant="PATTERN_BACKGROUND_VARIANT.Grid"
            class="flex h-[46rem] w-full" :size="'section'">



            <div class="grid grid-cols-7 grid-rows-6 gap-0">
                <div class="col-span-3 row-span-2">
                    <div style="z-index: 2; position: relative;" class="pl-20">
                        <h2 class="text-base/7 font-semibold text-primary">
                            Introducing Ui Blocks</h2>
                        <p
                            class="mx-auto mt-2 font-primary text-4xl dark:text-gray-100 font-semibold  text-gray-950 sm:text-7xl">
                            All Premium<br> Ui Components</p>
                    </div>
                </div>
                <div class="col-span-4 row-span-5 col-start-4">
                    <div style="position: relative;">
                        <div style="position: absolute;left:150px" v-motion :initial="{
                            y: 100,
                            opacity: 0,
                        }" :visible="{
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
                        <div v-motion :initial="{
                            y: 100,
                            opacity: 0,
                        }" :visible="{
    y: 0,
    opacity: 1,
    transition: {
        duration: 300,
        type: 'keyframes',
        ease: 'easeIn',
    },
}" style="position: absolute;left:100px;top:350px">
                            <img src="/assets/images/sec-2-5.jpg" alt=""
                                style="border-radius: 20px;height: 290px;border: 3px solid #ccc;">
                        </div>
                        <div v-motion :initial="{
                            y: 100,
                            opacity: 0,
                        }" :visible="{
    y: 0,
    opacity: 1,
    transition: {
        duration: 300,
        type: 'keyframes',
        ease: 'easeIn',
    },
}" style="position: absolute;left:500px;top:0px;border-radius: 20px;">
                            <BorderBeam :size="100" :duration="6" :delay="0" :border-width="2" />
                            <img src="/assets/images/sec-2-6.jpg" alt=""
                                style="border-radius: 20px;height: 290px;border: 3px solid #333;">
                        </div>
                        <!-- <div style="position: absolute;left:400px;top:380px">
<img src="/assets/images/sec-2-9.jpg" alt="" style="border-radius: 10px;width: 250px;border: 1px solid #333;">
</div> -->
                        <div v-motion :initial="{
                            y: 100,
                            opacity: 0,
                        }" :visible="{
    y: 0,
    opacity: 1,
    transition: {
        duration: 300,
        type: 'keyframes',
        ease: 'easeIn',
    },
}" style="position: absolute;left:420px;top:370px">
                            <img src="/assets/images/sec-2-10.png" alt=""
                                style="border-radius: 20px;width: 270px;border: 3px solid #333;">
                        </div>
                    </div>
                </div>
                <div class="col-span-3 row-span-3 row-start-3">
                    <div style="width: 100%;position: relative;">
                        <div v-motion :initial="{
                            y: 100,
                            opacity: 0,
                        }" :visible="{
    y: 0,
    opacity: 1,
    transition: {
        duration: 300,
        type: 'keyframes',
        ease: 'easeIn',
    },
}" style="position: absolute;top: 25px;border-radius: 60px;">
                            <BorderBeam :size="100" :duration="10" :delay="0" :border-width="3" />
                            <img src="/assets/images/sec-2-1.png" alt=""
                                style="border-radius: 60px;height: 300px;border: 3px solid #444;">
                        </div>
                        <div v-motion :initial="{
                            y: 100,
                            opacity: 0,
                        }" :visible="{
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

                            <img src="/assets/images/sec-2-2.png" alt=""
                                style="border-radius: 30px;height: 130px;border: 2px solid #3f3f3f;">
                        </div>
                        <div v-motion :initial="{
                            y: 100,
                            opacity: 0,
                                    }" :visible="{
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

                            <img src="/assets/images/sec-2-4.png" alt=""
                                style="border-radius: 39px;height: 170px;border: 2px solid #888;">
                        </div>
                    </div>
                </div>
            </div>
        </PatternBackground>

    </div>
</template>

<script setup>
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