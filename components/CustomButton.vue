<template>
  <div>
    <v-btn color="success" @click="sayHello">
      {{ text }}
    </v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'CustomButton',

  props: {
    text: {
      type: String,
      default: '',
    },
  },

  setup() {
    function sayHello(): void {
      console.log('Hello')
    }

    return { sayHello }
  },
})
</script>
