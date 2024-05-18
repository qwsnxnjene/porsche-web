import React from 'react'
import { MenuItem } from '../menu-item'

export const NavMenu = ({items = [] }) => {
  return (
    <div className='flex flex-col px-4 py-2 bg-almost-white drop-shadow rounded-lg absolute top-10 right-0 w-32 space-y z-30'>
        {items.map(({text, add}) => <MenuItem key={text} text={text} add ={add}/>)}
    </div>
  )
}
