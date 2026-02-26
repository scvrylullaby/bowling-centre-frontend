<script setup lang="ts">
import type { ClientRequest } from '../model/client.model'
import { ref } from 'vue'
import { CreateClient } from '../api/create-client.api'

const form = ref<ClientRequest>({
  play_time: 20,
  timeout: 10
})

async function submit() {
  await CreateClient(form.value)
}
</script>

<template>
  <div class="flex flex-col">
    <v-text-field
      v-model="form.play_time"
      label="Игровое время"
      type="number"
    />

    <v-text-field v-model="form.timeout" label="Время ожидания" type="number" />

    <v-btn color="primary" @click="submit"> Создать клиента </v-btn>
  </div>
</template>
