import React from 'react'
import { useState } from 'react'
// import { Link, useParams } from 'react-router-dom';
import StageGlobal from './StageGlobal';
import StagePersonal from './StagePersonal';

function Stage(props) {
  const [stage, setStage] = useState(props.stage);
  const [scope, setScope] = useState('personal');
  const [vehicleClass, setvehicleClass] = useState('all');

  return (
    <div>
      <div>
        input
      </div>
      
      {scope === 'personal' ? <StagePersonal stage={stage} /> : <StageGlobal stage={stage} />}
    </div>
  )
}

export default Stage