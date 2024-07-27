<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import { Dialog, DialogPanel } from '@headlessui/vue';
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
  const runtimeConfig = useRuntimeConfig();

  // fetch header details from Config object
  const storyblokApi = useStoryblokApi();
  const { data } = await storyblokApi.get('cdn/stories/config', {
    version: runtimeConfig.public.VERSION,
    resolve_links: 'url',
  });
  
  // Define header menu as a ref
  const headerMenu = ref(null);
  headerMenu.value = data.story.content.header_menu;

  // CTA stands for Call To Action button
  const CTA = data.story.content?.cta;

  // Open or close mobile menu
  const mobileMenuOpen = ref(false);

  // Handle scroll
  const isScrolled = ref(false);
  const isMobile = ref(null);

  // Add scroll event listener
  onMounted(() => {
    checkMobile();
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', checkMobile);
  })

  // Remove scroll event listener on component unmount
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', checkMobile);
  })

  // media query for mobile devices
  const checkMobile = () => {
    isMobile.value = window.matchMedia("(max-width: 768px)").matches;
  };

  // Handle scroll event
  const handleScroll = () => {
    const scrollPosition = window.scrollY
    isScrolled.value = scrollPosition > 0
  };

  // Sets the favicon for the site
  const favicon = data.story.content.favicon?.filename || null;
  useHead({
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: favicon
      }
    ]  
  })

</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 transition duration-500" 
    :class="!isScrolled ? 'bg-transparent text-white': 'bg-white text-gray-800 dark:bg-primary dark:text-white dark:border-b dark:border-white'">
    <nav class="flex items-center justify-between px-6" aria-label="Global">
      <div class="flex-1">
        <NuxtLink to="/" class="-m-1.5 p-1.5" style="max-width: 90%;">
          <span class="sr-only">Logo</span>
          <img 
            class="w-auto transition duration-300 dark:hidden"
            :style="{ height: isMobile ? '50px' : '80px' }"
            :class="{'dark-brighten' : !isScrolled}"
            src="/logos/black-no-bg.svg" alt="Nav Logo" 
          />
          <img 
            class="w-auto transition duration-300 hidden dark:flex"
            :style="{ height: isMobile ? '50px' : '80px' }"
            :class="{'dark-brighten' : !isScrolled}"
            src="/logos/color-no-bg.svg" alt="Nav Logo" 
          />
        </NuxtLink>
      </div>
      <div class="flex ">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 dark:text-white " 
          @click="mobileMenuOpen = true" :class="[isScrolled ? 'text-gray-700' : 'text-white']">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-8 w-8" aria-hidden="true" />
        </button>
      </div>
    </nav>
    <Dialog as="div" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-50" />
      <DialogPanel 
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-primary text-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="-m-1.5 p-1.5" @click="mobileMenuOpen = false">
            <span class="sr-only">Logo</span>
            <img 
              class="h-[50px] sm:h-[80px]" 
              src="/logos/color-no-bg.svg" 
              alt="Mobile Nav Logo" 
            />
          </NuxtLink>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-white hover:text-secondary" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-12 w-12" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <nav class="space-y-2 py-6 w-full flex flex-col justify-evenly items-center text-3xl" style="height: 70vh;">
              <AppLink v-for="link in headerMenu" :key="link.name" :to="link.url" @click="mobileMenuOpen = false" 
                class="-mx-3 rounded-lg px-4 py-5 font-semibold leading-7 block hover:text-secondary duration-500 font-heading hover:scale-110"
                >
                {{ link.text }}
              </AppLink>
              <StoryblokComponent
                class="text-3xl w-auto"
                style="padding: 20px;"
                v-for="blok in CTA"
                :key="blok._uid"
                :blok="blok"
                @click="mobileMenuOpen = false"
              />
            </nav>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<style scoped>
/* removes all color from logo and sets it to be pure white at top of the screen */
.hide-logo{
  display: hidden;
}
@media (prefers-color-scheme: dark) {
  .hide-logo{
    display: block;
  }
}
</style>