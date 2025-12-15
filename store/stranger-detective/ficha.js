import { defineStore } from 'pinia'
import { getAllKeys } from '~/data/stranger-detective/constants'

export const useStrangerDetectiveFichaStore = defineStore('strangerDetectiveFichaStore', {
    state: () => ({
        tableState: getAllKeys(),
        notes: ''
    }),
    $persistOptions: true
})
