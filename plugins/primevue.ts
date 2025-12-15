import PrimeVue from 'primevue/config'
import { defineNuxtPlugin } from '#app'
import Aura from '@primeuix/themes/aura'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {
        theme: {
            preset: Aura,
            options: {
                darkModeSelector: '.dark',
                cssLayer: {
                    name: 'primevue',
                    order: 'theme, base, primevue'
                }
            }
        },
        pt: {
            Toolbar: {
                root: 'flex justify-between items-center',
                start: 'flex-1',
                center: 'flex-none md:flex-1',
                end: 'md:flex-1'
            },
            // Popover: {
            //     content: 'bg-neutral-50 dark:bg-neutral-800 dark:text-neutral-50 shadow-lg rounded'
            // },
            Button: {
                root: (options: any) => {
                    return {
                        class: [
                            `p-2 border-0 rounded hover:cursor-pointer ${options.context.disabled ? 'opacity-30 cursor-not-allowed' : 'hover:opacity-75 dark:hover:opacity-75'}`
                        ]
                    }
                }
            }
        }
    })
})
