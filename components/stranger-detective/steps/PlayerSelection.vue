<template>
    <div class="p-4">
        <h1 class="text-lg mb-3">Selecione os jogadores</h1>

        <div class="flex flex-wrap gap-2">
            <div v-for="player in PLAYERS" :key="player.id">
                <Button @click="selectPlayer(player)">
                    <Avatar
                        :image="player.thumb"
                        class="w-20 h-20"
                        :class="
                            players.map((p) => p.id).includes(player.id) &&
                            `outline-3 border-2 border-transparent rounded-full`
                        "
                        :style="`outline-color: ${player.color}`"
                    />
                </Button>
            </div>
        </div>

        <h1 class="text-lg my-3">Selecione as cartas</h1>
    </div>
</template>

<script setup>
import { PLAYERS } from '~/data/stranger-detective/constants'

const players = ref([])

function selectPlayer(player) {
    const existent = players.value.findIndex((p) => p.id === player.id)
    if (existent >= 0) {
        players.value = [...players.value.slice(0, existent), ...players.value.slice(existent + 1)]
    } else {
        players.value = [...players.value, player]
    }
}

watch(players, (value) => {
    console.log(JSON.parse(JSON.stringify(value)))
})
</script>
