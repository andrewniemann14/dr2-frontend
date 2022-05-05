import MiniProfile from './MiniProfile';

export default function MenuDesktop({name, changeName, clearCookie, open}) {
  return (
    <div className={`flex flex-col content-center p-4 bg-neutral-800 text-white shadow-md shadow-black absolute right-0 ${open ? "" : "translate-y-[-150%]"} transition-all`}>
      <MiniProfile name={name} changeName={changeName} clearCookie={clearCookie} />
    </div>
  )
}
