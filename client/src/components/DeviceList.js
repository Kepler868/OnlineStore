import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '..'
import DeviceItem from './DeviceItem'

const DeviceList = observer(() => {
  const { device } = useContext(Context)
  return (
    <div className='flex flex-wrap'>
      {device.devices.map((device) => (
        <DeviceItem className='basis-1/4' key={device.id} device={device} />
      ))}
    </div>
  )
})

export default DeviceList
