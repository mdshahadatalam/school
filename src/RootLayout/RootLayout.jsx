import React from 'react'
import { Navbar } from '../Component/Navbar'
import { Outlet } from 'react-router'

export const RootLayout = () => {
  return (
       <>
         <Navbar/>
         <Outlet/>
       </>
  )
}
