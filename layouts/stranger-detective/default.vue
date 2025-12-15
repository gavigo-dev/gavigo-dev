<template>
    <div class="fixed bg-slate-900 w-full h-screen">
        <div
            class="absolute top-0 bg-slate-400 bg-[url('/img/stranger-detective/background.png')] bg-blend-multiply w-full h-svh blur-sm"
        />
        <div class="absolute top-0 w-full h-full z-10 flex justify-center items-center">
            <div
                class="w-full h-full md:max-w-100 min-w-80 bg-slate-300 bg-[url('/img/stranger-detective/background.png')] bg-blend-multiply bg-center bg-cover"
            >
                <div
                    v-if="loading"
                    class="absolute top-0 left-0 text-red-500 w-full h-full flex items-center justify-center text-3xl animate-spin"
                >
                    <i class="pi pi-spinner"></i>
                </div>
                <div class="text-neutral-300 h-svh overflow-y-auto flex flex-col">
                    <div class="grow">
                        <NuxtPage />
                    </div>
                    <div class="flex-0 py-5 flex justify-center">
                        <a href="/">
                            <Image src="/img/logo-wide-light.png" width="150" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
useSeoMeta({
    title: 'Stranger Detective App',
    description: 'App to help playing stranger detective',
    ogTitle: 'Stranger Detective - gavigo.dev',
    ogDescription: 'App to help playing stranger detective',
    ogImage: '/img/stranger-detective/project-cover.png',
    ogUrl: 'https://gavigo-dev.netlify.app/stranger-detective',
    twitterCard: 'summary_large_image'
})

const loading = ref(true)

onMounted(() => {
    loading.value = false
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
