import MiniProfile from './MiniProfile';

export default function MenuDesktop({name, changeName, clearCookie, open}) {
  return (
    <div className={`flex flex-col content-center p-4 bg-neutral-800 text-white shadow-md shadow-black fixed right-0 top-12 z-10 ${open ? "" : "translate-y-[-150%]"} transition-all`}>
      <MiniProfile name={name} changeName={changeName} clearCookie={clearCookie} />
    </div>
  )
}
