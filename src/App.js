import React from 'react'
import Cookies from 'js-cookie'
import { Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Main from './containers/Main/Main'
import Registration from './containers/Registration/Registration'
import Login from './containers/Login/Login'
import { ProtectedRoute } from './utils/utils'
import CookieProvider from './components/UI/CookieProvider/CookieProvider'
import Course from './containers/Course/Course'
import MyProfile from './containers/MyProfile/MyProfile'
import VerifyPage from './containers/VerifyPage/VerifyPage'
import ForgotPasswordPage from './containers/ForgotPasswordPage/ForgotPasswordPage'
import ResetPasswordPage from './containers/ResetPasswordPage/ResetPasswordPage'
import AdminPanel from './containers/AdminPanel/AdminPanel'
import './scss/style.scss'

const App = () => {
  const user = useSelector(state => state.users.user)
  return (
    <CookieProvider>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />
        <ProtectedRoute
          isAllowed={Cookies.get('jwt') || user?.token}
          redirectTo="/login"
          path="/user"
          component={MyProfile}
        />
        <ProtectedRoute
          isAllowed={Cookies.get('jwt') || user?.token}
          redirectTo="/login"
          path="/course/:id"
          component={Course}
        />
        <ProtectedRoute
          isAllowed={(Cookies.get('jwt') || user?.token) && user?.role === 'admin'}
          redirectTo="/login"
          path="/admin_panel"
          component={AdminPanel}
        />
        <Route path="/confirm/:confirmationCode" component={VerifyPage} />
        <Route path="/forgot" component={ForgotPasswordPage} />
        <Route path="/reset/:hash" component={ResetPasswordPage} />
      </Switch>
    </CookieProvider>
  )
}

export default App
