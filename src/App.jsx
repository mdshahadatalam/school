import './App.css'
import { Banner } from './Component/Banner';
import { ClentMatter } from './Component/ClentMatter';
import { Navbar } from './Component/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Teacher } from './Component/Teacher';
import { MyClient } from './Component/MyClient';
import { PopulerCourse } from './Component/PopulerCourse';
import { Subcripe } from './Component/Subcripe';
import { Futter } from './Component/Futter';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import { RootLayout } from './RootLayout/RootLayout';
import { Home } from './Pages/Home';
import { Community } from './Pages/Community';



function App() {

  useEffect( ()=>{
    Aos.init();
  })

  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
           <Route  element={<RootLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/community" element={<Community/>}/>
        {/* <Route path="/contact" element={<Contact/>}/> */}
        {/* <Route path="/service" element={<Service/>}/> */}
      </Route>
      </Route>
      
    )
  )

  return (
      <>
         <RouterProvider router={route} />
      </>
       
  )
}

export default App
