import { useState } from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro'
// https://fontawesome.com/docs/web/use-with/react/style

export default function NameChanger({name, changeName, clearName}) {
  const [inputName, setInputName] = useState(name);

  function handleTyping(e) {
    setInputName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    changeName(inputName);
  }

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input type="text" name="" id="" defaultValue={name} onChange={handleTyping} className='w-24 h-8 bg-neutral-800 focus:bg-neutral-500 focus:text-black border-neutral-900 border-[1px]' />
      <button type="submit" value="set" className='hover:text-red-600 w-8'><FontAwesomeIcon icon={solid('check')} size='lg' /></button>
      <Link to="/identify" className='hover:text-red-600 w-8 pt-1'><FontAwesomeIcon icon={solid('magnifying-glass')} size='' /></Link>
    </form>
  )
}
