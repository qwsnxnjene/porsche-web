import React from 'react'

export const MenuItem = ({ text = '', add }) => {
  return (
    <div className='flex w-full space-x-4'>
        <span className='text-medium-gray hover:text-almost-black cursor-pointer'><a href={add}>{text}</a></span>
    </div>
  )
}
