import { createApp } from 'vue'
import App from './App.vue'
import KeyCloakService from './security/KeycloakService'

const renderApp = () => {
  createApp(App).mount('#app')
}

KeyCloakService.CallLogin(renderApp)
