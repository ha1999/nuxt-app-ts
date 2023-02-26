<script setup lang="ts">
const { pending, data: posts } = useLazyFetch('/api/count')
watch(posts, (newPosts) => {
    // Because posts starts out null, you will not have access
    // to its contents immediately, but you can watch it.
})
</script>

<template>
    <h1>Posts Page</h1>
    <div v-if="pending">
        Loading ...
    </div>
    <div v-else>
        <div v-for="post in posts">
            <!-- do something -->
        </div>
    </div>
</template>