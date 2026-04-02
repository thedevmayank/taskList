import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';

import NotFound from './NotFound.jsx';
import Layout from './Layout.jsx';
import All from './taskWindow/All.jsx';
import Planned from './taskWindow/Planned.jsx';
import Focused from './taskWindow/Focused.jsx';
import Tasks from './taskWindow/Tasks.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index path='/' element={<All />} />
          <Route path='/all' element={<All />} />
          <Route path='/planned' element={<Planned />} />
          <Route path='/focused' element={<Focused />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='*' element={<NotFound />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
