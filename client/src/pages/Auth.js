import { observer } from 'mobx-react-lite'
import React, { useContext, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Context } from '..'
import { login, registration } from '../http/userAPI'

import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'

const Auth = observer(() => {
  const navigate = useNavigate()
  const {user} = useContext(Context)
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    try {
      let data
      if (isLogin) {
        data = await login(email, password)
      } else {
        data = await registration(email, password)
      }
        user.setUser(user)
        user.setIsAuth(true)
        navigate(SHOP_ROUTE)
      } catch(e) {
        alert(e.response.data.message)
      }}
  

  return (
    <div className="flex justify-center items-center mt-[200px]">
      <div className="py-4 px-10 rounded-lg bg-teal-600 w-[600px] flex flex-col">
        <p className="font-semibold text-white text-xl self-center">
          {isLogin ? 'Авторизация' : 'Регистрация'}
        </p>
        <form className=" w-125 flex flex-col">
          <input
            className="pr-80 py-2 pl-2 m-3 mb-1 rounded-md outline-teal-800"
            placeholder="Введите ваш email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            className="pr-80 py-2 pl-2 m-3 rounded-md outline-teal-800"
            placeholder="Введите ваш пароль..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          ></input>
        </form>
        <div className="flex justify-between items-center">
          {isLogin ? (
            <div className="flex justify-between">
              <p className="ml-4 mr-1">Нет аккаунта?</p>{' '}
              <NavLink className="hover:text-blue-800" to={REGISTRATION_ROUTE}>
                Регистрация
              </NavLink>
            </div>
          ) : (
            <div className="flex justify-between">
              <p className="ml-4 mx-1">Уже зарегестрированы?</p>{' '}
              <NavLink className="hover:text-blue-800" to={LOGIN_ROUTE}>
                Вход
              </NavLink>
            </div>
          )}
          <button onClick={()=> click()}className="mr-[12px] my-4 py-2 px-4 bg-transparent border hover:bg-white text-white font-semibold hover:text-teal-700 border-white hover:border-white rounded-lg">
            {isLogin ? 'Войти' : 'Зарегестрироваться'}
          </button>
        </div>
      </div>
    </div>
  )
})

export default Auth
