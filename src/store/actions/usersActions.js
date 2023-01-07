import usersSlice from '../slices/usersSlices'

export const {
  getAllUsersRequest,
  getAllUsersSuccess,
  getAllUsersFailure,
  registrationRequest,
  registrationSuccess,
  registrationFailure,
  logoutUser,
  loginUserRequest,
  loginUserSuccess,
  loginUserFailure,
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserFailure,
  banUnbanRequest,
  banUnbanSuccess,
  banUnbanFailure,
  facebookLoginRequest,
  facebookLoginSuccess,
  facebookLoginFailure,
  googleLoginRequest,
  googleLoginSuccess,
  googleLoginFailure,
  vkLoginRequest,
  vkLoginSuccess,
  vkLoginFailure,
  verifyUserRequest,
  verifyUserSuccess,
  verifyUserFailure,
  forgotPasswordRequest,
  forgotPasswordSuccess,
  forgotPasswordFailure,
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordFailure,
  editRequest,
  editSuccess,
  editFailure,
  passwordRequest,
  passwordSuccess,
  passwordFailure,
} = usersSlice.actions
