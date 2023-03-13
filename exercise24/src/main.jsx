import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createAppStore } from './store/config/storeConfig'
import { Provider } from 'react-redux'

let appStore = createAppStore()

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={appStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)
