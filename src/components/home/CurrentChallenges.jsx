import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro'

import { ClassStringLong } from '../ClassString'
import { CountryStringShort } from '../CountryString'
import CurrentAccordionOuter from './CurrentAccordionOuter'

export default function CurrentChallenges({challenges, name}) {
  const [expanded, setExpanded] = useState();

  return (
    <>
      <h3 className='text-2xl text-center select-none text-cyan-600 mb-4'>Today's challenges</h3>
      {challenges.map(c => {
        return(
          <div key={`${c.id}`} className="border-[1px]">
            <CurrentAccordionOuter vehicleClass={c.vehicle_class} stage={c.stage}>
              <div className='flex p-2 w-fit m-auto cursor-pointer' onClick={() => setExpanded(!expanded)}>
                <span className="w-20 text-xl font-kalam">{ClassStringLong(c.vehicle_class)}</span>
                <span className='flex w-16 text-sm'>
                  <img src={require(`../../img/flags/${c.country}.png`)} alt={`${c.country} flag`} className='h-4 w-8' />
                  <span className='ml-1'>{CountryStringShort(c.country)}</span>
                </span>
                <span className="w-64">{c.stage}</span>
                <FontAwesomeIcon icon={solid('chevron-down')} onClick={() => console.log('click')} className='cursor-pointer hover:text-red-600 ml-2 text-md' />
              </div>
            </CurrentAccordionOuter>
          </div>
        )
      })}
    </>
  )
}