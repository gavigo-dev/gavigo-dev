<template>
    <ClientOnly>
        <div v-if="store.step !== 0" class="m-2">
            <Button icon="pi pi-arrow-left" label="Voltar" @click="store.prevStep()" />
        </div>
        <component :is="step" @submit="onSubmit" />
    </ClientOnly>
</template>
<script setup>
import { useStrangerDetectiveStepperStore } from '~/store/stranger-detective/stepper'

import Home from '~/components/stranger-detective/steps/Home.vue'
import PlayerSelection from '~/components/stranger-detective/steps/PlayerSelection.vue'

definePageMeta({
    layout: 'stranger-detective-default'
})

const stepsComponents = {
    0: Home,
    1: PlayerSelection
}

const store = useStrangerDetectiveStepperStore()
const step = computed(() => stepsComponents[store.step])

function onSubmit() {
    switch (store.curentStep) {
        default:
            const allow = store.step < store.getStepsArray?.length - 1

            if (allow) store.nextStep()
            break
    }
}
</script>
