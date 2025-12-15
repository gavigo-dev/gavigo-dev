import { defineStore } from 'pinia'

const STEPS = {
    HOME: 0,
    PLAYER_SELECTION: 1
}

export const useStrangerDetectiveStepperStore = defineStore('strangerDetectiveStepperStore', {
    state: () => ({
        step: 0
    }),
    actions: {
        setStep(val) {
            this.step = val
        },
        nextStep() {
            this.step++
        },
        prevStep() {
            this.step--
        }
    },
    getters: {
        getSteps: () => STEPS,
        getStepsArray: () => Object.keys(STEPS)
    },
    $persistOptions: true
})
