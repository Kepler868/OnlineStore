import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '..'

const BrandBar = observer(() => {
  const { device } = useContext(Context)

  return (
    <div className='ml-[40px]'>
      {device.brands.map((brand) => (
        <button
          key={brand.id}
          onClick={() => device.setSelectedBrand(brand)}
          className={
            brand.id === device.selectedBrand.id
              ? 'my-[20px] mx-[10px] mt-[40px] cursor-pointer p-[15px] rounded-md border bg-teal-600 text-white border-teal-600'
              : 'my-[20px] mx-[10px] mt-[40px] cursor-pointer p-[15px] rounded-md border'
          }
        >
          {brand.name}
        </button>
      ))}
    </div>
  )
})

export default BrandBar
