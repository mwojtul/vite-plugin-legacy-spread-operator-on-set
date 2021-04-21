import { createApp } from 'vue'
import App from './App.vue'

const uniqueValues = [...new Set([1, 1, 2, 3])]
console.log(uniqueValues)

createApp(App).mount('#app')
