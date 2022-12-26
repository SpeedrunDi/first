import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import catalogOfCourseData from './catalogOfCourseData'
import CourseCard from '../../components/CourseCard/CourseCard'
import Footer from '../../components/Footer/Footer'
import burgerIcon from '../../assets/icons/BurgerIcon.png'
import filterIcon from '../../assets/icons/FilterIcon.png'
import searchIcon from '../../assets/icons/SearchIcon.png'
import './CatalogOfCourse.scss'
import ModalOfCategory from '../../components/Modals/ModalOfCategory/ModalOfCategory'

const coursePerPage = 5

const CatalogOfCourse = () => {
  const [next, setNext] = useState(coursePerPage)
  const [toggle, setToggle] = useState(false)
  const [toggleFilter, setToggleFilter] = useState(false)
  const [search, setSearch] = useState('')
  const [array, setArray] = useState(catalogOfCourseData)
  const [category, setCategory] = useState('all')
  const handleMoreImage = () => {
    setNext(next + coursePerPage)
  }

  catalogOfCourseData.filter(course => course.title.toLowerCase().includes(search.toLowerCase()))

  const selectedCategory = valueCategory => {
    setCategory(valueCategory)
  }

  return (
    <>
      <Header />
      <section className="container">
        <div className="courses-section">
          <div className="courses-section__block">
            <h2 className="courses-section__title">Каталог курсов</h2>
            <div className="icons-block">
              {toggle ? (
                <input
                  type="text"
                  placeholder="Поиск..."
                  className="icon-value"
                  onChange={e => setSearch(e.target.value)}
                />
              ) : null}
              <div className="icons-item" onClick={() => setToggle(toggleInput => !toggleInput)}>
                <img src={searchIcon} alt="searchIcon" />
              </div>
              <div className="icons-item filter-icon-item">
                <img src={filterIcon} alt="filterIcon" />
              </div>
              <div className="icons-item" onClick={() => setToggleFilter(toggleFil => !toggleFil)}>
                <img src={burgerIcon} alt="burgerIcon" />
              </div>
              {toggleFilter && <ModalOfCategory selectedCategory={selectedCategory} />}
            </div>
          </div>
          <div className="courses-section__cards">
            {category === 'all'
              ? array
                  ?.slice(0, next)
                  ?.map(item => <CourseCard key={item.id} title={item.title} date={item.date} price={item.price} />)
              : array
                  .filter(el => el.category === category)
                  .map(item => <CourseCard key={item.id} title={item.title} date={item.date} price={item.price} />)}
          </div>
          {next < array?.length && (
            <button type="button" className="course-btn" onClick={handleMoreImage}>
              Посмотреть все курсы
            </button>
          )}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default CatalogOfCourse
