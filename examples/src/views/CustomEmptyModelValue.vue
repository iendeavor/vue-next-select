<template>
  <pre>modelValue: {{ JSON.stringify(techStack) }}</pre>

  <vue-select v-model="techStack" :options="options" label-by="framework" value-by="language" :empty-model-value="''" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import VueSelect from 'vue-next-select'

export default defineComponent({
  components: { VueSelect },
  setup() {
    const techStack = ref('')

    const options = [
      { language: 'JavaScript', framework: 'Express' },
      { language: 'Python', framework: 'Django' },
      { language: 'PHP', framework: 'Laravel' },
    ]

    return {
      techStack,
      options,
    }
  },
})
</script>
