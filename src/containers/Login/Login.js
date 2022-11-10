import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import FormComponent from '../../components/UI/Form/FormComponent/FormComponent'
import { loginUserRequest } from '../../store/actions/usersActions'
import { inputChangeHandler, submitFormHandler } from '../../components/UI/Form/Handlers/Handlers'

const Login = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  return (
    <>
      <FormComponent
        typeForm="Войти"
        submit={e => submitFormHandler(e, dispatch(loginUserRequest({ ...user })))}
        onChange={e => inputChangeHandler(e, setUser)}
        inputName={['email', 'password']}
        placeholderName={['Электронная почта', 'Пароль']}
        inputType={['text', 'password']}
      />
    </>
  )
}

export default Login
