import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/afjunior/Desktop/dir/nuxt-demo/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}