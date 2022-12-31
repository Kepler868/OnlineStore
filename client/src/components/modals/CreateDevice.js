import React, { useContext, useEffect, useState } from 'react'
import DropDown from '../modals/DropDown.js'
import cross from '../../assets/cross.png'
import { Context } from '../../index.js'
import { createDevice, fetchBrands, fetchTypes } from '../../http/deviceAPI.js'
import { observer } from 'mobx-react-lite'

const CreateDevice = observer(({ active, setActive }) => {
  const { device } = useContext(Context)
  const [dropDownType, setDropDownType] = useState(false)
  const [dropDownBrand, setDropDownBrand] = useState(false)
  const [info, setInfo] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [file, setFile] = useState(null)
  const [brandName, setBrandName] = useState('')

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data))
    fetchBrands().then((data) => device.setBrands(data))
  }, [])

  const selectFile = (e) => {
    setFile(e.target.files[0])
  }

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }])
  }

  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number))
  }

  const selectType = (type) => {
    device.setSelectedType(type)
  }

  const selectBrand = (element) => {
    device.setSelectedBrand(element)
    setBrandName(element.name)
  }

  const changeInfo = (key, value, number) => {
    setInfo(info.map((i) => (i.number === number ? { ...i, [key]: value } : i)))
  }

  const addDevice = () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', `${price}`)
    formData.append('img', file)
    formData.append('brandId', device.selectedBrand.id)
    formData.append('typeId', device.selectedType.id)
    formData.append('info', JSON.stringify(info))
    formData.append('brandName', brandName)
    createDevice(formData).then((data) => {
      setActive(false)
      setBrandName('')
      setFile(null)
      setPrice(0)
      setName('')
      setInfo([])
    })
  }
  return (
    <div
      onClick={() => setActive(false)}
      className={
        !active
          ? 'overflow-scroll h-full w-full bg-[rgba(0,0,0,0.4)] fixed top-0 left-0 flex justify-center items-center opacity-0 pointer-events-none duration-300'
          : 'overflow-scroll opacity-1 pointer-events-all h-full w-full bg-[rgba(0,0,0,0.4)] fixed top-0 left-0 flex justify-center items-center duration-300'
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
          <div className="m-[15px] font-semibold text-[24px]">
            Добавить устройство
          </div>
          <button
            className="m-[15px] w-[15px] h-[15px]"
            onClick={() => setActive(false)}
          >
            <img src={cross} />
          </button>
        </div>
        <hr />
        <DropDown
          active={dropDownType}
          setActive={setDropDownType}
          deviceOption={device.types}
          setOtherActive={setDropDownBrand}
          setSelectedOption={selectType}
        >
          Выберите тип
        </DropDown>
        <DropDown
          active={dropDownBrand}
          setActive={setDropDownBrand}
          deviceOption={device.brands}
          setOtherActive={setDropDownType}
          setSelectedOption={selectBrand}
        >
          Выберите бренд
        </DropDown>
        <div className="flex items-center">
          <input
            className="w-[100%] border rounded-md m-[10px] p-[10px] mb-0"
            placeholder="Введите название устройства"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex items-center">
          <input
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-[100%] border rounded-md m-[10px] p-[10px] "
            placeholder="Введите стоимость устройства"
          />
        </div>
        <div className="flex items-center">
          <input
            onChange={(e) => selectFile(e)}
            type="file"
            className="w-[100%]  rounded-md  p-[10px] "
          />
        </div>
        <button
          className="bg-teal-600 text-white px-6 h-10 rounded max-w-[300px] m-[10px] "
          onClick={() => addInfo()}
        >
          Добавить новое свойство
        </button>
        <div>
          {info.map((i) => (
            <div className="flex flex-row" key={i.number}>
              <input
                className="w-[100%] border rounded-md m-[10px] p-[10px] "
                placeholder="Название"
                value={i.title}
                onChange={(e) => changeInfo('title', e.target.value, i.number)}
              />
              <input
                className="w-[100%] border rounded-md m-[10px] p-[10px] "
                placeholder="Описание"
                value={i.description}
                onChange={(e) =>
                  changeInfo('description', e.target.value, i.number)
                }
              />
              <button
                onClick={() => removeInfo(i.number)}
                className="m-[10px] p-[15px] border rounded-md border-red-500 hover:bg-red-100 text-red-500"
              >
                Удалить
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => setActive(false)}
            className="m-[10px] p-[15px] border rounded-md border-red-500 hover:bg-red-100 text-red-500"
          >
            Закрыть
          </button>
          <button
            onClick={() => addDevice()}
            className="m-[10px] p-[15px] ml-2 border rounded-md border-teal-600 hover:bg-teal-100 text-teal-600"
          >
            Добавить
          </button>
        </div>
      </div>
    </div>
  )
})

export default CreateDevice
