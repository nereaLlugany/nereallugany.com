import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import './i18n'

// Create a simple loading component
const Loading = () => (
  <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
    Loading...
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </HashRouter>
  </React.StrictMode>,
)