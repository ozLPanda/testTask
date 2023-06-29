import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'

//Заменить индекс строки
String.prototype.replaceAt = function (index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

createApp(App).mount('#app')

