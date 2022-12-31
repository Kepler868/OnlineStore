import React, { useState } from 'react'
import cross from '../../assets/cross.png'
import { createType } from '../../http/deviceAPI'

const CreateType = ({ active, setActive }) => {
  const [value, setValue] = useState('')

  const addType = () => {
    createType({ name: value }).then((data) => {
      setValue('')
      setActive(false)
    })
  }

  return (
    <div
      onClick={() => setActive(false)}
      className={
        !active
          ? 'h-full w-full bg-[rgba(0,0,0,0.4)] fixed top-0 left-0 flex justify-center items-center opacity-0 pointer-events-none duration-300'
          : 'opacity-1 pointer-events-all h-full w-full bg-[rgba(0,0,0,0.4)] fixed top-0 left-0 flex justify-center items-center duration-300'
      }
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={
          !active
            ? 'flex  flex-col min-w-[600px] max-w-[800px] p-[10px] rounded-[20px] bg-white scale-50 duration-300'
            : 'flex  flex-col min-w-[600px] max-w-[800px] p-[10px] rounded-[20px] bg-white scale-100 duration-300'
        }
      >
        <div className="flex justify-between items-center">
          <div className="m-[15px] font-semibold text-[24px]">Добавить тип</div>
          <button
            className="m-[15px] w-[15px] h-[15px]"
            onClick={() => setActive(false)}
          >
            <img src={cross} />
          </button>
        </div>
        <hr />
        <div className="flex items-center">
          <input
            className="w-[100%] border rounded-md m-[15px] p-[10px] "
            placeholder="Введите название типа"
            value={value}
            onChange={(e)=> setValue(e.target.value)}
          />
        </div>
        <hr />
        <div className="flex justify-end">
          <button
            onClick={() => setActive(false)}
            className="m-[10px] p-[15px] border rounded-md border-red-500 hover:bg-red-100 text-red-500"
          >
            Закрыть
          </button>
          <button
            onClick={() => addType()}
            className="m-[10px] p-[15px] ml-2 border rounded-md border-teal-600 hover:bg-teal-100 text-teal-600"
          >
            Добавить
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateType
