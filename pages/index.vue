<script setup lang="ts">
  useSeoMeta({
    title: 'My Amazing Site',
    ogTitle: 'My Amazing Site',
    description: 'This is my amazing site, let me tell you all about it.',
    keywords: 'keywords1, keywords2',
  })
</script>

<template>
  <div>
    <NuxtImg
      class="absolute bottom-[5%] right-[15%] -z-0 w-[66px]"
      src="/mail.png" />
    <NuxtImg
      class="absolute right-[30%] top-[1%] -z-0 w-[132px]"
      src="/keyboard.png" />
    <NuxtImg
      class="absolute left-[118px] top-[40%] -z-0 w-[162px]"
      src="/arrow.png" />
  </div>
  <section
    class="font-pop flex w-full flex-col items-center justify-center bg-c_black text-lg text-white xl:h-[100vh] xl:flex-row">
    <div class="text-[64px] font-bold xl:w-1/2">
      <h1 class="text-center leading-[80px] xl:pl-24 xl:text-start">
        Got a project in <span class="text-c_blue">mind?</span>
      </h1>
      <NuxtImg
        class="ml-[302px] hidden xl:block"
        src="/man.png"
        width="280px" />
    </div>
    <div
      class="font-pop flex w-full flex-col px-3 font-bold xl:w-[600px] xl:px-0">
      <form action="">
        <div class="flex flex-col justify-between xl:flex-row">
          <label class="flex flex-col"
            >Your name<input
              type="text"
              placeholder="Name"
              class="mt-[10px] h-[59px] rounded-2xl bg-c_blackLite py-4 pl-6" /></label
          ><label class="flex flex-col"
            >Your email<input
              type="mail"
              placeholder="Email"
              class="mt-[10px] h-[59px] rounded-2xl bg-c_blackLite py-4 pl-6"
          /></label>
        </div>
        <div>
          <label class="mt-6 flex flex-col"
            >Your Message
            <textarea
              name=""
              id=""
              placeholder="Message"
              class="mt-[10px] h-[280px] rounded-2xl bg-c_blackLite pl-6 pt-4"></textarea>
          </label>
        </div>
        <div class="mb-4 flex justify-center xl:mb-0 xl:block">
          <button
            class="font-pop mt-6 flex h-[47px] w-[232px] items-center justify-center rounded-3xl bg-c_blue font-bold text-white transition hover:bg-c_blackLite active:bg-c_black">
            <span class="text-shadow block">Send Message </span
            ><span class="block w-6"
              ><NuxtImg
                src="/send.png"
                class="translate-y ml-[10px] block w-full"
            /></span>
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<style>
  .text-shadow {
    text-shadow: 0px 4px 4px rgba(00, 00, 00, 0.5);
  }
</style>
