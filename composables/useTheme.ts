import { reactive, ref } from 'vue'

export function useTheme() {
    const darkMode = ref(false)

    function toggleDarkMode() {
        document.documentElement.classList.toggle('dark')
        darkMode.value = !darkMode.value
    }

    return reactive({
        darkMode,
        toggleDarkMode
    })
}
