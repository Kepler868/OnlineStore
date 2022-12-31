import { set } from 'mobx'
import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Context } from '.'
import AppRouter from './components/AppRouter'
import NavBar from './components/NavBar'
import { check } from './http/userAPI'

const App = observer(() => {
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(()=> {
      check().then((data) => {
        user.setUser(true)
        user.setIsAuth(true)
      }).finally(()=> setLoading(false))
    }, 500)                // Имитация запроса на сервер
    
  }, [])
  if (loading) {
    return (
        <div className="mx-[50%] animate-spin flex items-center justify-center rounded-full w-14 h-14 bg-gradient-to-tr from-teal-600 to-teal-100">
          <div className="h-9 w-9 rounded-full bg-white"></div>
        </div>
    )
  }
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </>
  )
})

export default App
