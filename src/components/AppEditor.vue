<script setup lang="ts">
import { useImageStore } from '@/stores/image'
import useReader from '@/composables/use-reader'
import useCanvas from '@/composables/use-canvas'

const filters = ['oceanic', 'vintage', 'rosetint']

const store = useImageStore()
const { canvasEl, loadImage, drawOriginalImage, filterImage } = useCanvas()
const { reader } = useReader(store.image.file, () => {
  if (!reader.result) return

  const dataURL = reader.result.toString()
  loadImage(dataURL)
})

store.$subscribe((mutation, state) => {
  drawOriginalImage()
  filterImage(state.image.filter)
})
</script>

<template>
  <div class="my-8">
    <canvas ref="canvasEl" width="448" height="448"> </canvas>
    <div class="text-white text-xl mt-4">
      <div class="flex justify-center gap-4">
        <button
          v-for="(filter, index) in filters"
          :key="index"
          type="button"
          class="py-4 w-full"
          :class="{
            'bg-pink-600': store.image.filter !== filter,
            'bg-green-600': store.image.filter === filter
          }"
          @click="store.image.filter = store.image.filter === filter ? '' : filter"
        >
          {{ filter }}
        </button>
      </div>
      <a class="bg-indigo-700 py-4 block w-full mt-2 text-center"> Download </a>
    </div>
  </div>
</template>
