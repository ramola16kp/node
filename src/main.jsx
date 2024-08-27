import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {store} from './redux/store.js'
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom'

import router from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} ></RouterProvider>
    </Provider>
  </React.StrictMode>,
)
