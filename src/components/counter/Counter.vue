<script setup lang="ts">
  import { useCounterStore } from '@/components/counter/counterStore'

  const counterStore = useCounterStore()

  const increment = () => {
    counterStore.increment()
  }

  const count = computed(() => counterStore.count)
</script>

<template>
  <v-card class="mx-auto" max-width="448" variant="outlined">
    <v-card-title>Counter</v-card-title>
    <v-card-text>{{ count }}</v-card-text>
    <v-card-actions>
      <v-btn @click="increment">+</v-btn>
    </v-card-actions>
  </v-card>
</template>
