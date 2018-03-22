import {createApp} from '../src/app'

const {app, router, store} = createApp()
router.onReady(() => {
  if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
  }
  app.$mount('#app')
})