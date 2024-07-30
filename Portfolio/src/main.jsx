import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import Resume from './dist/Resume.jsx'
import Home from './dist/Home.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Contact from './dist/Contact.jsx'
import Projects from './dist/Projects.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="resume" element={<Resume />} />
      <Route path="contact" element={<Contact />} />
      <Route path="projects" element={<Projects />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
);