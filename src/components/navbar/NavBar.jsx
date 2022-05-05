import {useEffect, useState} from 'react'
import NavBarDesktop from './NavBarDesktop';
import NavBarMobile from './NavBarMobile';

export default function NavBar() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 480;

  // useEffect(() => {
  //   window.addEventListener("resize", () => setWidth(window.innerWidth));
  // }, [])

  const [hasCookie, setHasCookie] = useState(localStorage.getItem('playerName'))
  const [name, setName] = useState();
  useEffect(() => {
    console.log('Home state name: ', name);
    hasCookie && setName(localStorage.getItem('playerName'));
  }, [name])

  function changeName(inputName) {
    localStorage.setItem('playerName', inputName)
    setName(inputName);
  }

  function clearCookie() {
    localStorage.removeItem('playerName');
    setName();
    setHasCookie(null);
  }

  return (
    width < breakpoint ? // MOBILE VERSION
    <NavBarMobile name={name} changeName={changeName} clearCookie={clearCookie} />

    : // DESKTOP VERSION
    <NavBarDesktop name={name} changeName={changeName} clearCookie={clearCookie} />
  )
}
