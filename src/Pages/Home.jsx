import React from 'react'
import { Banner } from '../Component/Banner'
import { ClentMatter } from '../Component/ClentMatter'
import { Teacher } from '../Component/Teacher'
import { MyClient } from '../Component/MyClient'
import { PopulerCourse } from '../Component/PopulerCourse'
import { Subcripe } from '../Component/Subcripe'
import { Futter } from '../Component/Futter'

export const Home = () => {
  return (
    <>
        <Banner/>
        <ClentMatter/>
        <Teacher/>
        <MyClient/>
        <PopulerCourse/>
        <Subcripe/>
        <Futter/>
    </>
  )
}
