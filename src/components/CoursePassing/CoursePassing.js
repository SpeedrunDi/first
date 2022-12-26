import React, { useEffect } from 'react'
import { Route, Switch, useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCourseRequest } from '../../store/actions/coursesActions'
import CourseTitle from '../CourseTitle/CourseTitle'
import LessonPassing from '../LessonPassing/LessonPassing'
import CourseModules from '../CourseModules/CourseModules'
import './CoursePassing.scss'

const CoursePassing = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const history = useHistory()
  const course = useSelector(state => state.courses.course)
  const user = useSelector(state => state.users.user)

  useEffect(() => {
    if (!course) {
      dispatch(fetchCourseRequest(id))
    }

    const checkContentType = () => {
      const content = course.modules[0].data[0]

      history.push(`/course/${id}/${content.type}/${content._id}`)
    }

    if (course) {
      checkContentType()
    }
  }, [dispatch, course, id])
  const accessCheck = course.teachers.find(teacher => teacher === user?._id)

  return (
    <>
      {course && (
        <div className="course-passing">
          <CourseTitle courseId={id} title={course.title} description={course.description} image={course.image} />
          <div className="container">
            <div className="course-passing__bottom">
              <div className="course-edit__left">
                <CourseModules id={id} course={course} accessCheck={accessCheck} />
              </div>
              <div className="course-passing__right">
                <Switch>
                  <Route path="/course/:courseId/lesson/:lessonId" component={LessonPassing} />
                </Switch>
                <div>
                  <button type="button">{'<'}</button>
                  <button type="button">{'>'}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CoursePassing
