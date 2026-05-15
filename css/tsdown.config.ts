import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: 'src/*.css',
  css: {
    splitting: true,
  },
})