import { reactive } from 'vue'
import { defineStore } from 'pinia'

interface ImageState {
  file: File | null
  filter: string
}

export const useImageStore = defineStore('image', () => {
  const image = reactive<ImageState>({
    file: null,
    filter: ''
  })

  function upload(e: DragEvent) {
    if (!e.dataTransfer) return
    const tempFile = e.dataTransfer.files[0]

    if (!tempFile.type.match('image.*')) return

    image.file = tempFile
  }

  return { image, upload }
})
