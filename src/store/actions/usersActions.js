import usersSlice from '../slices/usersSlices'

export const {
  registrationRequest,
  registrationSuccess,
  registrationFailure,
  logoutUser,
  loginUserRequest,
  loginUserSuccess,
  loginUserFailure,
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
} = usersSlice.actions
