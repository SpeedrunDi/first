import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { checkUserTaskRequest, getAllUsersRequest } from '../../../../store/actions/usersActions'
import { addUsersCourseRequest, fetchCourseRequest } from '../../../../store/actions/coursesActions'
import Modal from '../../../../components/UI/Modal2/Modal'
import MainButton from '../../../../components/UI/MainButton/MainButton'
import Card from '../../../../components/UI/Cards/Card/Card'
import './CourseSettingsRight.scss'
import CourseUserModal from '../../../../components/Modals/CourseUserModal/CourseUserModal'
import { apiUrl } from '../../../../config'

const CourseSettingsRight = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const users = useSelector(state => state.users.users)
  const course = useSelector(state => state.courses.course)
  const items = []
  const [open, setOpen] = useState(false)
  const [userOpen, setUserOpen] = useState(false)
  const [role, setRole] = useState('users')
  const [showMore, setShowMore] = useState({
    status: false,
    id: '',
  })
  const [isChecked, setIsChecked] = useState(false)
  const [participant, setParticipant] = useState(null)
  const [userModal, setUserModal] = useState(null)

  useEffect(() => {
    dispatch(getAllUsersRequest())
  }, [dispatch])

  const ChangeSearchItem = item => {
    setParticipant(item)
  }

  const handleOnChange = e => {
    setIsChecked(!isChecked)
    setRole(e)
  }

  const addParticipantInCourse = async () => {
    await dispatch(addUsersCourseRequest({ idCourse: id, idUser: participant.id, role }))
    await dispatch(fetchCourseRequest(id))
    setOpen(false)
  }
  const onShowMoreBtn = userId => {
    if (userId === showMore.id) {
      setShowMore({
        status: false,
        id: '',
      })
    } else if (showMore.id !== '') {
      setShowMore({
        status: showMore.status,
        id: userId,
      })
    } else {
      setShowMore({
        status: !showMore.status,
        id: userId,
      })
    }
  }

  const onCheckBtn = async (userId, taskId, value) => {
    await dispatch(checkUserTaskRequest({ userId, taskId, courseId: course._id, value }))
  }

  if (users) {
    users.map(user => items.push({ id: user._id, name: user.email }))
  }

  return (
    <>
      <div className="block-right">
        <div className="container">
          <div className="block-right__top-block">
            <span className="block-right__top-block__title">Все ученики курса</span>
            <div className="block-right__top-block__btn">
              <MainButton
                className="GreenButton block-right__top-block__btn"
                type="button"
                onClick={() => setOpen(true)}
                text="+ Пригласить ученика"
              />
            </div>
          </div>
          <div className="block-right__name-block">
            <div className="block-right__name-block__top">
              <span className="block-right__name-block__top__title">Имя ученика</span>
              <span className="block-right__name-block__top__title">Задания учеников</span>
              <span className="block-right__name-block__top__title">Одобрение задания</span>
            </div>
            {course.pendingTasks.length !== 0 &&
              course.pendingTasks.map(user => (
                <div key={user._id} className="block-right__name-block__top">
                  <span
                    className="block-right__name-block__top__name"
                    onClick={async () => {
                      // await dispatch(getUserRequest(user.email))
                      await setUserModal(user.user)
                      setUserOpen(true)
                    }}
                  >
                    {user.user.username}
                  </span>
                  <div className="block-right__name-block__center">
                    <p className="block-right__name-block__center__text">Задание </p>
                    <MainButton
                      className="block-right__name-block__center__button WhiteButton"
                      type="button"
                      onClick={() => onShowMoreBtn(user.user._id)}
                      text={
                        <>
                          <i>
                            <svg
                              width="16"
                              height="10"
                              viewBox="0 0 16 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.1733 1.38686L7.99997 6.56019L2.82664 1.38686C2.30664 0.866856 1.46664 0.866856 0.946641 1.38686C0.426641 1.90686 0.426641 2.74686 0.946641 3.26686L7.06664 9.38686C7.58664 9.90686 8.42664 9.90686 8.94664 9.38686L15.0666 3.26686C15.5866 2.74686 15.5866 1.90686 15.0666 1.38686C14.5466 0.880189 13.6933 0.866856 13.1733 1.38686Z"
                                fill="#828282"
                              />
                            </svg>
                          </i>
                        </>
                      }
                    />
                  </div>
                  <div className="block-right__name-block__top__buttons">
                    <div>
                      <button
                        className="block-right__name-block__top__buttons TransparentButton"
                        onClick={() => onCheckBtn(user.user._id, user.task._id, true)}
                      >
                        <i className="block-right__name-block__top__buttons--allow">
                          <svg
                            className="block-right__name-block__top__buttons--allow--icon"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM8.748 17.148L4.44 12.84C3.972 12.372 3.972 11.616 4.44 11.148C4.908 10.68 5.664 10.68 6.132 11.148L9.6 14.604L17.856 6.348C18.324 5.88 19.08 5.88 19.548 6.348C20.016 6.816 20.016 7.572 19.548 8.04L10.44 17.148C9.984 17.616 9.216 17.616 8.748 17.148Z"
                              fill="#828282"
                            />
                          </svg>
                        </i>
                      </button>
                    </div>
                    <div>
                      <button
                        className="block-right__name-block__top__buttons TransparentButton"
                        onClick={() => onCheckBtn(user.user._id, user.task._id, false)}
                      >
                        <i className="block-right__name-block__top__buttons--reject">
                          <svg
                            className="block-right__name-block__top__buttons--reject--icon"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 0C5.364 0 0 5.364 0 12C0 18.636 5.364 24 12 24C18.636 24 24 18.636 24 12C24 5.364 18.636 0 12 0ZM17.16 17.16C16.692 17.628 15.936 17.628 15.468 17.16L12 13.692L8.532 17.16C8.064 17.628 7.308 17.628 6.84 17.16C6.372 16.692 6.372 15.936 6.84 15.468L10.308 12L6.84 8.532C6.372 8.064 6.372 7.308 6.84 6.84C7.308 6.372 8.064 6.372 8.532 6.84L12 10.308L15.468 6.84C15.936 6.372 16.692 6.372 17.16 6.84C17.628 7.308 17.628 8.064 17.16 8.532L13.692 12L17.16 15.468C17.616 15.924 17.616 16.692 17.16 17.16Z"
                              fill="#828282"
                            />
                          </svg>
                        </i>
                      </button>
                    </div>
                  </div>
                  {showMore.status && showMore.id === user.user._id && (
                    <div className="block-right__name-block__top__tasks">
                      <p className="block-right__name-block__top__tasks__text">
                        {user.task.title}:
                        <a
                          href={`${apiUrl}/uploads/${user.file}`}
                          className="block-right__name-block__top__tasks__text__link"
                          target="_blank"
                          download
                          rel="noreferrer"
                        >
                          {`${user.file}`}
                        </a>
                      </p>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
      {userOpen ? <CourseUserModal setOpen={setUserOpen} user={userModal} /> : null}
      {open ? (
        <Modal setOpen={setOpen}>
          <Card>
            <ReactSearchAutocomplete className="inputModal" items={items} onSelect={ChangeSearchItem} />
            <input
              type="checkbox"
              name="student"
              value="student"
              onChange={() => handleOnChange('users')}
              checked={!isChecked}
            />
            Студент
            <input
              type="checkbox"
              name="teacher"
              value="teacher"
              onChange={() => handleOnChange('teachers')}
              checked={isChecked}
            />
            Учитель
            <MainButton className="GreenButton" type="button" text="+ Пригласить" onClick={addParticipantInCourse} />
          </Card>
        </Modal>
      ) : null}
    </>
  )
}

export default CourseSettingsRight
