<script setup lang="ts">
const count = ref(1)
const { data } = await useFetch(() => `/api/hello/${count.value}`, { params: { token: 123 } })
const route = useRoute()
definePageMeta({
    validate: async (router) => {
        return /^\d+$/.test(router.params.id as string)
    }
})
useHead({
  title: 'Posts detail',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { children: 'console.log(\'Hello world\')' } ]
})
</script>
<template>
    <div>
        Post's ID: {{ route.params.id }}
    </div>
    <div>
      Fetch result:
      <pre class="text-left"><code>{{ data }}</code></pre>
      <button @click="count++">
        +
      </button>
    </div>
</template>