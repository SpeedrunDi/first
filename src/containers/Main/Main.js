import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import About from '../../components/About/About'
import Promo from '../../components/Promo/Promo'
import CoursesCatalog from '../../components/CoursesCatalog/CoursesCatalog'
import LendingTeacherBlock from '../../components/LendingTeacherBlock/LendingTeacherBlock'
import Partners from '../../components/Partners/Partners'
import ReviewsBlock from '../../components/ReviewsBlock/ReviewsBlock'
import './Main.scss'

const Main = () => (
  <div className="main">
    <Header />
    <Promo />
    <CoursesCatalog />
    <About />
    <div className="container">
      <LendingTeacherBlock />
    </div>
    <Partners />
    <div className="container">
      <ReviewsBlock />
    </div>
    <Footer />
  </div>
)

export default Main
