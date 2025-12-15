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
                    <a class="hover:text-indigo-500" href="#sobre"> Sobre </a>
                    <a class="hover:text-indigo-500" href="#projetos"> Projetos </a>
                    <a class="hover:text-indigo-500" href="#contato"> Contato </a>
                </div>
            </template>

            <template #end>
                <div class="hidden md:flex gap-1 justify-end w-full">
                    <Button class="text-xl">
                        <a href="https://github.com/gavigo-dev" target="_blank">
                            <i class="pi pi-github" />
                        </a>
                    </Button>

                    <ToggleDarkMode />
                </div>

                <div class="md:hidden">
                    <Button icon="pi pi-bars" class="text-xl" @click="openMenu" />

                    <Popover ref="menuPop">
                        <div class="p-5 w-40">
                            <div class="flex flex-col gap-3 text-lg text-center">
                                <a class="hover:text-indigo-500" href="#sobre"> Sobre </a>
                                <a class="hover:text-indigo-500" href="#projetos"> Projetos </a>
                                <a class="hover:text-indigo-500" href="#contato"> Contato </a>
                            </div>

                            <div class="mt-5 flex gap-1 justify-center w-full">
                                <Button class="text-2xl">
                                    <a href="https://github.com/gavigo-dev" target="_blank">
                                        <i class="pi pi-github" />
                                    </a>
                                </Button>

                                <ToggleDarkMode />
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
                    <span class="text-indigo-500">Experiências digitais</span>
                </h2>
                <Button
                    class="mt-10 text-lg font-medium bg-indigo-500 text-indigo-50 rounded-full px-10"
                >
                    <a href="#projetos"> Veja meus projetos </a>
                </Button>
            </div>
        </div>

        <div id="sobre" class="p-10 bg-indigo-500 text-indigo-50">
            <h3 class="mb-10 font-bold text-4xl md:text-center">Sobre mim</h3>
            <div class="flex md:w-5/12 md:mx-auto items-center md:flex-col-reverse md:gap-3">
                <div class="w-auto pr-3 text-left md:text-center md:px-3 md:ml-3">
                    <p>
                        Desenvolvedor, designer, artista... Apaixonado por criar interfaces
                        modernas, rápidas e bem pensadas. Cada projeto é feito com propósito e
                        atenção aos detalhes.
                    </p>
                    <br />
                    <Button class="bg-indigo-50 rounded-full text-indigo-700 px-8">
                        <a
                            href="https://www.linkedin.com/in/gabriel-victor-gomes-b1abb9221"
                            target="_blank"
                        >
                            Veja meu currículo
                            <span class="text-sm ml-2">
                                <i class="pi pi-external-link"></i>
                            </span>
                        </a>
                    </Button>
                </div>
                <div class="w-170 md:w-120 rounded-lg overflow-hidden">
                    <Avatar
                        image="/img/eu.jpg"
                        shape="circle"
                        class="bg-bottom mx-auto w-35 h-35 overflow-hidden rounded-full"
                    />
                </div>
            </div>
        </div>

        <div id="projetos" class="p-10">
            <h3 class="mb-10 font-bold text-4xl md:text-center">Meus Projetos</h3>
            <div class="grid grid-cols-2 gap-4 md:w-9/12 mx-auto md:flex justify-center flex-wrap">
                <div
                    v-for="(project, i) in PROJECTS"
                    :key="i"
                    class="relative h-30 md:h-50 w-full max-w-70 font-bold hover:cursor-pointer rounded overflow-hidden"
                    @click="displayProject($event, project)"
                >
                    <div
                        class="absolute w-full h-full bg-center bg-contain bg-neutral-300 dark:bg-neutral-700"
                        :style="`background-image: url(${project.cover})`"
                    />
                    <div
                        class="absolute z-10 top-0 w-full h-full md:opacity-0 md:hover:opacity-100"
                    >
                        <div
                            class="absolute bottom-0 p-2 pt-10 md:pt-10 w-full bg-linear-to-b from-neutral-50/0 to-neutral-950 text-neutral-50 text-center"
                        >
                            {{ project.name }}
                        </div>
                    </div>
                </div>

                <Popover
                    ref="projectPop"
                    :pt="{
                        root: 'border border-indigo-500 rounded my-2',
                        transition: 'p-anchored-overlay'
                    }"
                >
                    <div class="p-5 w-80">
                        <h5 class="text-lg font-bold">{{ selectedProject.name }}</h5>
                        <p class="my-3">{{ selectedProject.description }}</p>
                        <div class="flex gap-3">
                            <Button
                                class="flex-1 border"
                                :disabled="!selectedProject.behance"
                                @click="openLink(selectedProject.behance)"
                            >
                                <i class="fab fa-behance"></i>
                                - Projeto
                                <i class="pi pi-external-link"></i>
                            </Button>
                            <Button
                                class="flex-1 bg-indigo-500 text-indigo-50"
                                label="Preview"
                                @click="navigateTo(selectedProject.preview)"
                            />
                        </div>
                    </div>
                </Popover>
            </div>
        </div>

        <div id="contato" class="p-10 my-10 text-center">
            <h3 class="mb-10 font-bold text-3xl text-center">Vamos criar algo incrível juntos?</h3>

            <Button class="text-lg font-medium bg-indigo-500 text-indigo-50 rounded-full px-10">
                <a
                    href="https://wa.me/5581987906718"
                    target="_blank"
                    class="inline-flex items-center"
                >
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
                    <a href="https://github.com/gavigo-dev" target="_blank">
                        <i class="pi pi-github"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/gabriel-victor-gomes-b1abb9221/"
                        target="_blank"
                    >
                        <i class="pi pi-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.behance.net/gavigo-dev" target="_blank">
                        <i class="fa-brands fa-behance"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/gavigo.dev/" target="_blank">
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
import { PROJECTS } from '~/data/constants/projects'

const menuPop = ref()
const openMenu = (event) => {
    menuPop.value.toggle(event)
}

const projectPop = ref()
const selectedProject = ref()
const displayProject = (event, project) => {
    projectPop.value.hide()

    if (selectedProject.value?.id === project.id) {
        selectedProject.value = null
    } else {
        selectedProject.value = project

        nextTick(() => {
            projectPop.value.show(event)
        })
    }
}

const openLink = (link) => {
    window.open(link, '_blank')
}
</script>
