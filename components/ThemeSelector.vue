<script setup lang="ts">
import { capitalize } from "~/composables/useString";

defineProps({
  isText: {
    type: Boolean,
    default: false,
  },
});

const themes = ["system", "light", "dark"];
</script>

<template>
  <USelectMenu v-model="$colorMode.preference" :options="themes" class="cursor-pointer">
    <template #label>
      <div class="flex items-center gap-2">
        <UIcon name="i-mingcute-light-line" v-if="$colorMode.value === 'light'" />
        <UIcon name="i-circum-dark" v-else-if="$colorMode.value === 'dark'" />
        <span class="text-xs font-semibold" v-if="isText">{{ capitalize($colorMode.preference) }}</span>
      </div>
    </template>
    <template #option="{ option }">
      <div class="flex items-center gap-2 cursor-pointer">
        <UIcon name="i-mingcute-light-line" v-if="option === 'light'" />
        <UIcon name="i-circum-dark" v-else-if="option === 'dark'" />
        <UIcon name="i-material-symbols-computer-outline" v-else />
        <span class="text-xs font-semibold" v-if="isText">{{ capitalize(option) }}</span>
      </div>
    </template>
  </USelectMenu>
</template>
