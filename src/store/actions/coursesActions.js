import coursesSlice from '../slices/coursesSlice'

export const {
  fetchCoursesRequest,
  fetchCoursesSuccess,
  fetchCoursesFailure,
  fetchCourseRequest,
  fetchCourseSuccess,
  fetchCourseFailure,
  publishCourseRequest,
  publishCourseSuccess,
  publishCourseFailure,
  fetchUserCoursesRequest,
  fetchUserCoursesSuccess,
  fetchUserCoursesFailure,
  createCourseRequest,
  createCourseSuccess,
  createCourseFailure,
  updateCourseRequest,
  updateCourseSuccess,
  updateCourseFailure,
  editCourseHeaderImageRequest,
  editCourseHeaderImageSuccess,
  editCourseHeaderImageFailure,
  addUsersCourseRequest,
  addUsersCourseSuccess,
  addUsersCourseFailure,
  deleteCourseRequest,
  deleteCourseSuccess,
  deleteCourseFailure,
  visibilityRequest,
  visibilitySuccess,
  visibilityFailure,
  joinTheCourseRequest,
  joinTheCourseSuccess,
  joinTheCourseFailure,
  clearCourse,
} = coursesSlice.actions
