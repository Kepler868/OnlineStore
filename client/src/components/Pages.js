import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '..'

const Pages = observer(() => {
  const { device } = useContext(Context)
  const pageCount = Math.ceil(device.totalCount / device.limit)
  const pages = []

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1)
  }
  return (
    <div className="mt-[20px] ml-[40px] border rounded w-fit divide-x ">
      {pages.map((page) => (
        <button
          key={page}
          className={
            device.page === page
              ? 'w-[50px] h-[50px] bg-teal-600 text-white'
              : 'w-[50px] h-[50px] hover:bg-gray-300'
          }
          onClick={()=> device.setPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  )
})

export default Pages
