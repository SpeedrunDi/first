import React, { useEffect } from 'react'
import { Route, Switch, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import { ProtectedRoute } from '../../utils/utils'
import { clearCourse, fetchCourseRequest, updateCourseRequest } from '../../store/actions/coursesActions'
import Header2 from '../../components/Header2/Header2'
import CourseBanner from '../../components/CourseBanner/CourseBanner'
import CourseHomepage from './CourseHomepage/CourseHomepage'
import CourseSettings from './CourseSettings/CourseSettings'
import CourseEdit from './CourseEdit/CourseEdit'
import CoursePassing from '../../components/CoursePassing/CoursePassing'
import Footer from '../../components/Footer/Footer'
import './Course.scss'

const Course = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const user = useSelector(state => state.users.user)
  const course = useSelector(state => state.courses.course)

  useEffect(() => {
    if (id) {
      dispatch(fetchCourseRequest(id))
    }

    return () => {
      dispatch(clearCourse())
    }
  }, [dispatch, id, user])

  const teacherCheck = course?.teachers.includes(user?._id)

  const courseCheck = course?.users.findIndex(u => u._id === user?._id) + 1

  const handleSave = courseData => {
    dispatch(updateCourseRequest({ courseData, id }))
  }

  return (
    <>
      <Header2 />
      {course && (
        <div className="course">
          <CourseBanner course={course} handleSave={handleSave} teacherCheck={teacherCheck} />
          <div className="course__bottom">
            <Switch>
              <Route
                path="/course/:id"
                exact
                render={() => <CourseHomepage teacherCheck={teacherCheck} courseCheck={courseCheck} />}
              />
              <ProtectedRoute
                isAllowed={(Cookies.get('jwt') || user?.token) && teacherCheck}
                redirectTo={`/course/${id}`}
                path="/course/:id/settings"
                exact
                component={CourseSettings}
              />
              <ProtectedRoute
                isAllowed={(Cookies.get('jwt') || user?.token) && teacherCheck}
                redirectTo={`/course/${id}`}
                path="/course/:id/edit"
                render={() => <CourseEdit teacherCheck={teacherCheck} />}
              />
              <ProtectedRoute
                isAllowed={(Cookies.get('jwt') || user?.token) && courseCheck}
                redirectTo={`/course/${id}`}
                path="/course/:id/pass"
                render={() => <CoursePassing courseCheck={courseCheck} />}
              />
            </Switch>
          </div>
        </div>
      )}
      <Footer />
    </>
  )
}

export default Course
