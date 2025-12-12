import PrimeVue from 'primevue/config'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {
        unstyled: true,
        theme: {
            options: {
                darkModeSelector: '.dark'
            }
        },
        pt: {
            Toolbar: {
                root: 'flex justify-between items-center',
                start: 'flex-1',
                center: 'flex-none md:flex-1',
                end: 'md:flex-1'
            },
            Button: {
                root: 'p-2 rounded hover:cursor-pointer hover:opacity-75 dark:hover:opacity-75'
            }
        }
    })
})
