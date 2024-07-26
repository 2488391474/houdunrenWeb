import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router,{setupRouter} from '@/router'
import setuPlugins from '@/plugins/index'

async function bootstrap(){
    const app = createApp(App)
    setupRouter(app)
    setuPlugins(app)
    await router.isReady()
    app.mount('#app')
}


bootstrap()
