import React, { useState, useContext } from 'react'
import {observer} from "mobx-react-lite";



const DropDown = observer(({
  active,
  setActive,
  children,
  deviceOption,
  setOtherActive,
  setSelectedOption
}) => {

  const [value, setValue] = useState('')

  function switchActive() {
    setActive(!active)
    setOtherActive(false)
  }
  function deviceChoose(option) {
    setValue(option.name)
    switchActive()
    setSelectedOption(option)
  }

  return (
    <div className="mx-4 mb-0 mt-4">
      <button
        onClick={() => switchActive()}
        className="bg-teal-600 text-white px-6 h-10 rounded min-w-[200px]"
      >
        {value || children}
      </button>
      {active && (
        <nav
          
          tabIndex="0"
          className=" border-2 bg-white  border-teal-700 rounded w-60 absolute"
        >
          {deviceOption.map((element) => (
            <a
              key={element.id}
              href="#"
              value={element.name}
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={()=> deviceChoose(element)}
            >
              {element.name}
            </a>
          ))}
        </nav>
      )}
    </div>
  )
})

export default DropDown
