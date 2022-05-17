import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro'

export default function StatusLight() {

  return (
    <div className="lg:absolute m-1 md:rounded-sm bg-neutral-900 shadow-inner p-2 text-sm">
      <FontAwesomeIcon icon={solid('circle-exclamation')} className='text-xl text-red-600' />
      <span className='ml-2'>Codemasters site down today</span>
    </div>
  )
}
