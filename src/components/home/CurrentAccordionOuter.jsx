import { useState } from 'react'

import CurrentAccordionInner from './CurrentAccordionInner'

export default function CurrentAccordionOuter(props) {
  const [expand, setExpand] = useState(false);

  return (
    <div onClick={() => setExpand(!expand)}>
      {props.children}
      {expand && <CurrentAccordionInner vehicleClass={props.vehicleClass} stage={props.stage} />}
    </div>
  )
}
