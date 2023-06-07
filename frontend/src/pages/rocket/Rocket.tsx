import m from './Rocket.module.scss'

import { useEffect } from 'react'
import { useState } from 'react'
import IntroRocket from '../../components/introRocket/IntroRocket'


export default function Rocket() {
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 2900) // loader 2.9s
  // })
  return (
    <div className='m.rocket'>
      {loading ? 
        <IntroRocket />
        :
        <h1>rocket</h1> 
      }
    </div>
  )
}
