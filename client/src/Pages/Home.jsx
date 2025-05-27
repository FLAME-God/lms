import React from 'react'
import Hero from '../sections/Hero'
import Achevements from '../sections/Achevements'
import Category from '../sections/Category'
import CourseSection from '../sections/CourseSection'
import Instructors from '../sections/Instructors'
import Testnomial from '../sections/Testnomial'
import Banner from '../sections/Banner'

function Home() {
  return (
    <>
    <Hero/>
    <Achevements/>
    <Category/>
    <CourseSection/>
    <Instructors/>
    <Testnomial/>
    <Banner/>
    </>
  )
}

export default Home