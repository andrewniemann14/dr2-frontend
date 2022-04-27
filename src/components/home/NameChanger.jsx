import { useState } from "react"

export default function NameChanger({name, changeName}) {
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
      <input type="text" name="" id="" defaultValue={name} onChange={handleTyping} className='text-black w-24' />
      <input type="submit" value="set" />
  </form>
  )
}
