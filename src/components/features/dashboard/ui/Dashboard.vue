<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ws } from '@/api/ws'

const message = ref('')

onMounted(() => {
  ws.onmessage = event => {
    message.value = event.data
  }
})
</script>

<template>
  <v-card>
    <v-card-title>Данные ws</v-card-title>

    <v-text>
      {{ message }}
    </v-text>
  </v-card>
</template>
