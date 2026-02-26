<script setup lang="ts">
import ClientForm from '@/components/features/client/ui/ClientForm.vue'
import Dashboard from '@/components/features/dashboard/ui/Dashboard.vue'
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <ClientForm />
      </v-col>

      <v-col cols="6">
        <Dashboard />
      </v-col>
    </v-row>
  </v-container>
</template>
