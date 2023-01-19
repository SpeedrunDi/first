import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import About from '../../components/About/About'
import TeachersBlock from '../../components/TeachersBlock/TeachersBlock'
import Promo from '../../components/Promo/Promo'
import CoursesCatalog from '../../components/CoursesCatalog/CoursesCatalog'
import Partners from '../../components/Partners/Partners'
import ReviewsBlock from '../../components/ReviewsBlock/ReviewsBlock'
import { teachers } from '../../data/teachers'
import './Main.scss'

const Main = () => (
  <div className="main">
    <Header />
    <Promo />
    <CoursesCatalog />
    <About />

    <div className="container">
      <TeachersBlock
        title="Преподаватели — <span>практикующие эксперты</span>"
        subtitle="Доверьте свое обучение специалистам"
        teachers={teachers}
      />
    </div>
    <Partners />
    <ReviewsBlock />
    <Footer />
  </div>
)

export default Main
