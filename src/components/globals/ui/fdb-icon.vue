<template>
  <component :is="iconComponent" v-bind="$attrs" />
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue';

interface Props {
  icon: string;
}

const props = defineProps<Props>();

const fallbackComponent = {
  template: `<span>Icono no disponible</span>`
};

const iconComponent = computed(() =>
  defineAsyncComponent({
    loader: () => import(`@/assets/icons/fdb-${props.icon}.vue`),
    errorComponent: fallbackComponent,
    onError(_error, retry, fail, attempts) {
      if (attempts <= 3) {
        retry();
      } else {
        fail();
      }
    },
  })
);
</script>