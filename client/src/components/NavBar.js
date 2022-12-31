import React, { useContext } from 'react'
import { Context } from '../index'
import { NavLink } from 'react-router-dom'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'

const NavBar = observer(() => {

  const { user } = useContext(Context)
  const navigate = useNavigate()

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
  }
  return (
    <div>
      <div className="flex justify-between bg-teal-600 items-center">
        <NavLink to={SHOP_ROUTE} className="ml-20 text-white">
          Online Device Shop
        </NavLink>
        {(user.isAuth) ? (
          <div>
            <button
              onClick={() => navigate(ADMIN_ROUTE)}
              className="my-3 mx-2 bg-transparent border hover:bg-white text-white font-semibold hover:text-teal-700 py-2 px-4 border-white hover:border-white rounded-lg"
            >
              Админ панель
            </button>
            <button
              onClick={() => logOut()}
              className="my-3 ml-1 mr-20 bg-transparent border hover:bg-white text-white font-semibold hover:text-teal-700 py-2 px-4 border-white hover:border-white rounded-lg"
            >
              Выйти
            </button>
          </div>
        ) : (
          <button onClick={() => navigate(LOGIN_ROUTE)} className="my-3 ml-1 mr-4 bg-transparent border hover:bg-white text-white font-semibold hover:text-teal-700 py-2 px-4 border-white hover:border-white rounded-lg">
            Авторизация
          </button>
        )}
      </div>
    </div>
  )
})

export default NavBar
