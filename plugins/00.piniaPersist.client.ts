import type { PiniaPluginContext } from 'pinia'

export default defineNuxtPlugin(() => {
    return {
        provide: {
            piniaPersist: (context: PiniaPluginContext) => {
                const { store } = context
                const key = `store-${store.$id}`

                // carregar do localStorage
                const stored = localStorage.getItem(key)
                if (stored) {
                    store.$patch(JSON.parse(stored))
                }

                // sincronizar sempre que mudar
                store.$subscribe((_, state) => {
                    localStorage.setItem(key, JSON.stringify(state))
                })
            }
        }
    }
})
