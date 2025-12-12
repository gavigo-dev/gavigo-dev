import tailwindcss from '@tailwindcss/vite'
import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    app: {
        head: {
            titleTemplate: '%s - gavigo.dev',
            title: 'Gavigo Utils',
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
                }
            ]
        }
    },
    dir: {
        app: '.'
    },
    css: ['~/assets/css/tailwind.css', '~/assets/css/primeicons.css'],
    vite: {
        plugins: [
            tailwindcss(),
            Components({
                resolvers: [PrimeVueResolver()]
            })
        ]
    }
})
