<template>
    <div class="pt-5 md:pt-0">
        <h1 class="hidden">Gavigo.dev</h1>

        <Toolbar class="p-5">
            <template #start>
                <div class="">
                    <a href="#">
                        <Image
                            class="block w-9/12 max-w-65"
                            src="/img/logo-wide.png"
                            alt="logo-wide"
                        />
                    </a>
                </div>
            </template>

            <template #center>
                <div class="hidden md:flex gap-8 justify-center">
                    <a class="hover:text-indigo-400" href="#sobre"> Sobre </a>
                    <a class="hover:text-indigo-400" href="#projetos"> Projetos </a>
                    <a class="hover:text-indigo-400" href="#contato"> Contato </a>
                </div>
            </template>

            <template #end>
                <div class="hidden md:flex gap-1 justify-end w-full">
                    <Button class="text-xl">
                        <a href="https://github.com/gavigo-dev" target="_blank">
                            <i class="pi pi-github" />
                        </a>
                    </Button>

                    <Button
                        :icon="icon"
                        aria-label="Toggle Dark Mode"
                        class="text-xl"
                        @click="theme.toggleDarkMode"
                    />
                </div>

                <div class="md:hidden">
                    <Button icon="pi pi-bars" class="text-xl" @click="openMenu" />

                    <Popover ref="menuPop">
                        <div
                            class="p-5 bg-neutral-50 dark:bg-neutral-800 dark:text-neutral-50 w-40 shadow-md rounded"
                        >
                            <div class="flex flex-col gap-3 text-lg text-center">
                                <a class="hover:text-indigo-400" href="#sobre"> Sobre </a>
                                <a class="hover:text-indigo-400" href="#projetos"> Projetos </a>
                                <a class="hover:text-indigo-400" href="#contato"> Contato </a>
                            </div>

                            <div class="mt-5 flex gap-1 justify-center w-full">
                                <Button class="text-2xl">
                                    <a href="https://github.com/gavigo-dev" target="_blank">
                                        <i class="pi pi-github" />
                                    </a>
                                </Button>

                                <Button
                                    :icon="icon"
                                    aria-label="Toggle Dark Mode"
                                    class="text-2xl"
                                    @click="theme.toggleDarkMode"
                                />
                            </div>
                        </div>
                    </Popover>
                </div>
            </template>
        </Toolbar>

        <div class="px-5 h-120 md:h-100 pt-20">
            <div class="md:text-center">
                <h2 class="text-5xl font-black">
                    <span>Transformando<br />Ideias em</span>
                    <br />
                    <span class="text-indigo-400">Experiências digitais</span>
                </h2>
                <Button
                    class="mt-10 text-lg font-medium bg-indigo-400 text-indigo-50 rounded-full px-10"
                >
                    <a href="#projetos"> Veja meus projetos </a>
                </Button>
            </div>
        </div>

        <div id="sobre" class="p-10 bg-indigo-400 text-indigo-50">
            <h3 class="mb-10 font-bold text-4xl md:text-center">Sobre mim</h3>
            <div class="flex md:w-5/12 md:mx-auto">
                <div class="w-100 md:w-70 md:h-40 rounded-lg overflow-hidden">
                    <Image src="/img/eu.jpg" class="aspect-square" />
                </div>
                <div class="w-auto px-3 text-center md:text-left md:ml-3">
                    <p>
                        Desenvolvedor apaixonado por criar interfaces modernas, rápidas e bem
                        pensadas. Cada projeto é feito com propósito e atenção aos detalhes.
                    </p>
                    <br />
                    <Button class="bg-indigo-50 rounded-full text-indigo-700 px-8">
                        Veja meu currículo
                        <span class="text-sm ml-2">
                            <i class="pi pi-external-link"></i>
                        </span>
                    </Button>
                </div>
            </div>
        </div>

        <div id="projetos" class="p-10">
            <h3 class="mb-10 font-bold text-4xl md:text-center">Meus Projetos</h3>
            <div class="grid grid-cols-2 gap-4 md:w-7/12 mx-auto">
                <div v-for="i in 5" class="relative h-30 font-bold hover:cursor-pointer">
                    <div class="absolute w-full h-full animate-pulse bg-neutral-200"></div>
                    <div class="absolute top-0 w-full h-full md:opacity-0 md:hover:opacity-100">
                        <div
                            class="absolute bottom-0 p-2 md:pt-10 w-full bg-linear-to-b from-0% to-neutral-900/50 text-neutral-50"
                        >
                            Projeto {{ i }}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="contato" class="p-10 my-10 text-center">
            <h3 class="mb-10 font-bold text-3xl text-center">Vamos criar algo incrível juntos?</h3>

            <Button class="text-lg font-medium bg-indigo-400 text-indigo-50 rounded-full px-10">
                <a href="#" class="inline-flex items-center">
                    Fale comigo
                    <span class="ml-2">
                        <i class="pi pi-whatsapp"></i>
                    </span>
                </a>
            </Button>
        </div>

        <div class="p-10 text-center">
            <ul class="flex mb-4 justify-center gap-3 text-2xl">
                <li>
                    <a href="#" target="_blank">
                        <i class="pi pi-github"></i>
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                        <i class="pi pi-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                        <i class="fa-brands fa-behance"></i>
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                        <i class="pi pi-instagram"></i>
                    </a>
                </li>
            </ul>
            <p class="mb-4"><strong>gav.dev@gmail.com</strong></p>
            <p>© 2025 Gabriel Victor Gomes</p>
        </div>
    </div>
</template>

<script setup>
const theme = useTheme()
const icon = computed(() => `pi pi-${theme.darkMode ? 'moon' : 'sun'}`)

const menuPop = ref()
const openMenu = (event) => {
    menuPop.value.toggle(event)
}
</script>
