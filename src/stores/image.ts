import { reactive } from 'vue'
import { defineStore } from 'pinia'

interface ImageState {
  file: File | null
  filter: string
}

export const useCounterStore = defineStore('image', () => {
  const image = reactive<ImageState>({
    file: null,
    filter: ''
  })

  return { image }
})
