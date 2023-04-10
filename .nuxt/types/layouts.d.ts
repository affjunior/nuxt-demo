import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/Users/afjunior/Desktop/dir/nuxt-demo/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}