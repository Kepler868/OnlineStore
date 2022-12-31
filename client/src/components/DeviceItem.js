import React from 'react'
import star from '../assets/star.svg'
import { useNavigate } from 'react-router-dom'
import { DEVICE_ROUTE } from '../utils/consts'
import { observer } from 'mobx-react-lite'

const DeviceItem = observer(({ device }) => {
  const navigate = useNavigate()
  console.log(device)
  return (
    <div>
      <div
        onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}
        className="w-[150px] mx-[40px] my-[20px] cursor-pointer "
      >
        <img className="object-contain w-[150px] h-[150px]" src={"http://localhost:5000/" + device.img} />
        <div className="pt-px flex justify-between">
          <div className="pl-2 text-gray-500">{device.brandName}</div>
          <div className="flex items-center">
            <div>{device.rating}</div>
            <img className="px-px w-[18px] h-[18px]" src={star} />
          </div>
        </div>
        <div className="pl-2 pt-2">{device.name}</div>
      </div>
    </div>
  )
})

export default DeviceItem
