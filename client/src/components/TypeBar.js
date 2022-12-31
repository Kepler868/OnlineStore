import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '..'

const TypeBar = observer(() => {
  const { device } = useContext(Context)

  return (
    <div className="flex flex-col m-[40px] mr-0  border min-w-[300px] rounded justify-start divide-y h-[100%]">
      {device.types.map((type) => (
        <button
          key={type.id}
          onClick={() => device.setSelectedType(type)}
          className={
            type.id === device.selectedType.id
              ? 'text-left items-start p-[20px]  bg-teal-600 border-teal-600 text-white'
              : 'text-left items-start p-[20px]'
          }
        >
          {type.name}
        </button>
      ))}
    </div>
  )
})

export default TypeBar
