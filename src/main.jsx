import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
   <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
   </AuthProvider>
)
