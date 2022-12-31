import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchOneDevice } from '../http/deviceAPI'

const Device = () => {
  /*const device = {
    id: 1,
    name: 'Iphone 12 Pro',
    price: 25000,
    rating: 5,
    img: 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png',
  }

  const description = [
    { id: 1, title: 'Оперативная память', description: '5 ГБ' },
    { id: 2, title: 'Камера', description: 'Хорошая' },
    { id: 3, title: 'Процессор', description: 'Быстрый' },
    { id: 4, title: 'Кол-во ядер', description: 'Много' },
    { id: 5, title: 'Аккумулятор', description: 'Емкий' },
  ] */

  
  const [device, setDevice] = useState({ info: [] })
  const { id } = useParams()

  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data))
  }, [])
  return (
    <>
      <div className="flex">
        <div className="basis-1/4 ml-[40px] mt-[40px]">
          <img
            className="min-w-[300px] w-[300px] h-[300px]"
            src={'http://localhost:5000/' + device.img}
          />
        </div>
        <div className="mt-[40px] mr-[100px] flex flex-col items-center basis-1/4">
          <div className="mb-[20px] text-[30px]">{device.name}</div>
          <div className="flex bg-bigstar bg-cover w-[250px] h-[240px] justify-center items-center text-[60px]">
            {device.rating}
          </div>
        </div>
        <div className="mr-[40px] mt-[40px] flex flex-col border-8 rounded-lg justify-around items-center basis-1/3">
          <h1 className="font-semibold text-[30px]">От {device.price} руб.</h1>
          <button className="my-3 mx-1 bg-transparent border-2 hover:bg-teal-600 text-teal-600 font-semibold hover:text-white py-2 px-4 border-teal-600 hover:border-teal-600 rounded-lg">
            Добавить в корзину
          </button>
        </div>
      </div>
      <div className="mt-[40px]">
        <div className="text-[34px] ml-[75px] m-[10px] ">Характеристики:</div>
        {device.info.map((info, index) => (
          <div
            key={info.id}
            className={
              'text-[18px] pl-[75px] py-[10px]' +
              ' ' +
              (index % 2 === 0 ? 'bg-gray-200 text' : 'bg-white')
            }
          >
            {info.title}: {info.description}
          </div>
        ))}
      </div>
    </>
  )
}

export default Device
