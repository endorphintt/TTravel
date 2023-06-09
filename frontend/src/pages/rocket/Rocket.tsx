import c from './Rocket.module.scss'

import { useEffect } from 'react'
import { useState } from 'react'
import IntroRocket from '../../components/introRocket/IntroRocket'
import Start from '../../components/start/Start'
import Cities from '../../components/cities/Cities'
import Languages from '../../components/languages/Languages'


const Rocket: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [isCities, setCities] = useState(false)
  const [isLanguage, setLanguage] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("")

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000) // loader 4.5s
  })


  return (
    <div className={c.page}>
      {loading ? 
        <IntroRocket />
        :
        <div className={isLanguage && isCities ? c.container_cities : isLanguage ? c.container_languages : c.container}>
          <img className={c.rocket_} src="./rocket2.png" alt="rocket" />
          <Start scroll={() => setLanguage(true)} />
          <Cities />
          <Languages isLanguage={isLanguage} chooseLanguage={(lan): void => setSelectedLanguage(lan)}  scroll={() => setCities(true)} />
        </div>
      }
    </div>
  )
}

export default Rocket
