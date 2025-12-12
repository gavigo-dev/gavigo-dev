import { useRoute, useRouter } from '#app'

export function useAppNavigator() {
    const router = useRouter()
    const route = useRoute()

    function inferAppPrefix(): string | null {
        const segments = route.path.split('/').filter(Boolean)
        if (!segments.length) return null

        const candidate = segments[0]
        const hasPrefix = router
            .getRoutes()
            .some(
                (r) =>
                    r.path === `/${candidate}` ||
                    r.path.startsWith(`/${candidate}/`)
            )
        return hasPrefix ? candidate || null : null
    }

    /**
     * Navega para uma página dentro do mesmo app atual.
     * @param target - string curta como 'home-cadastro' (mapeia para /{app}/home/cadastro)
     * @param opts.params - params para rotas dinâmicas
     * @param opts.app - forçar app (ex: 'app2')
     */
    async function navigateToApp(
        target: string,
        opts?: { params?: Record<string, any>; app?: string }
    ) {
        const app = opts?.app ?? inferAppPrefix()
        const routes = router.getRoutes()

        const asPath = target.replace(/-/g, '/')

        const candidate = routes.find((r) => {
            const matchesApp =
                !app || r.path === `/${app}` || r.path.startsWith(`/${app}/`)

            const pathMatches =
                r.path.endsWith(`/${asPath}`) || r.path === `/${asPath}`

            const name = r.name?.toString?.() ?? ''
            const nameMatches = name.endsWith(target) || name.endsWith(asPath)

            return matchesApp && (pathMatches || nameMatches)
        })

        if (candidate) {
            try {
                if (candidate.name) {
                    return await router.push({
                        name: candidate.name as any,
                        params: opts?.params
                    })
                } else {
                    return await router.push({
                        path: candidate.path
                    })
                }
            } catch (e) {
                return await router.push(`/${app}/${asPath}`)
            }
        }

        if (app) {
            const fallback = `/${app}/${asPath}`.replace(/\/+/g, '/')
            return router.push(fallback)
        }

        if (target.startsWith('/')) return router.push(target)

        console.warn(
            `[useAppNavigator] rota não encontrada para target="${target}" (app=${app})`
        )
        throw new Error(`Rota não encontrada para "${target}"`)
    }

    return { navigateToApp, inferAppPrefix }
}
