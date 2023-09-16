<script setup>
import img1 from "../assets/ThermostatDesign.png";
import figma from "../assets/figma-svgrepo-com.svg";
import Adobe from "../assets/adobe-xd-svgrepo-com.svg";
import img2 from "../assets/TaskerDesign.png";
</script>

<!-- <template>
  <h1 class="font-bold text-md md:text-[2rem]">Latest Project</h1>
  <div
    class="grid grid-cols-1 max-w-sm w-full lg:max-w-full content-center lg:grid-cols-2 gap-3"
  >
    <div
      class="h-40 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
      style="background-image: url('../assets/ThermostatDesign.png')"
      title="Thermostat replica"
    >
      <img
        :src="img1"
        :alt="Thermodesign"
        md:width="320"
        height="180"
        class="transition hover:scale-105 hover:shadow-lg rounded-sm"
      />
      <h2 class="text-lg font-thin mt-1">
        Thermostat UI Apk <br />
        Tool used:
        <span class="font-bold text-sm">Figma</span>
      </h2>
    </div>

    <div class="h-[100px]">
      <img :src="img2" :alt="TaskerDesign" md:width="280" class="rounded-sm" />
      <h2 class="text-lg font-thin mt-1">
        Fentend Mobile Apk <br />
        Tool used: <span class="font-bold text-sm">Figma, adobe XD</span>
      </h2>
    </div>
  </div>
</template> -->

<template>
  <h1 class="font-bold text-white mt-10 text-md lg:text-[1.7rem] mb-4">Latest Project</h1>
  <div
    class="grid grid-cols-1 md:grid-cols-2 gap-4 "
  >
  <div class="max-w-sm md:max-h-80 lg:max-h-64 bg-transparent border border-gray-200 rounded-lg shadow dark:bd-gray-800 dark:border-gray-700 transition hover:scale-105 hover:shadow-lg">
    <a href="">
      <img
        :src="img1"
        :alt="Thermodesign"
        md:width="320"
        height="180"
        class="rounded-t-lg "
      />
    </a>
    <div class="p-5">
      <h5 class="mb-2 text-lg font-light tracking-tight green">
        Thermostat UI Design
      </h5>
      <div class="flex">
        <span>
          <img :src="figma" width="16" height="16" />
        </span>
        <span>
          <img :src="Adobe" width="20" height="20" class="ml-2"/>
        </span>
      </div>
    </div>
  </div>

  <div class="max-w-sm bg-transparent border border-gray-200 rounded-lg shadow dark:bd-gray-800 dark:border-gray-700 transition hover:scale-105 hover:shadow-lg">
    <a href="">
      <img
        :src="img2"
        :alt="TaskerDesign"
        md:width="320"
        height="180"
        class="rounded-t-lg"
      />
    </a>
    <div class="p-5">
      <h5 class="mb-2 text-lg font-light tracking-tight green">
        Fentend UI Design
      </h5>
      <div class="flex">
        <span>
          <img :src="figma" width="16" height="16" />
        </span>
        <span>
          <img :src="Adobe" width="20" height="20" class="ml-2"/>
        </span>
      </div>
    </div>
  </div>
  </div>
</template>
