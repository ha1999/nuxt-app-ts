<script setup lang="ts">
useServerSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

// reactive title 
// const data = useFetch(() => $fetch('/api/example'))
// useServerSeoMeta({
//   ogTitle: () => `${data.value?.title} - My Site`,
//   description: () => data.value?.description,
//   ogDescription: () => data.value?.description,
// })

</script>
<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/users">Users</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/posts">Posts</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
    </ul>
  </nav>
  <NuxtPage />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}
</style>
