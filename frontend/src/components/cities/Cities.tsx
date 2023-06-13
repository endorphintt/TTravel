import FStar from '../fStar/FStar'
import c from './Cities.module.scss'
import { useNavigate } from 'react-router-dom'

type Props = {
    setMain: (arg: boolean) => void
}

const Cities: React.FC<Props> = ({setMain}) => {
    const nav = useNavigate()

    const ToMain = () => {
        setMain(true)
        setTimeout(() => nav('/main'), 1000)
    } 

    return (
        <div className={c.container}>
            <div className={c.cities_container}>
                <div className={c.item}>
                    <div className={c.title}>Wroclaw</div>
                    <button onClick={ToMain} className={c.button + ' ' + c.first}><span></span></button>
                </div>
                <div className={c.item}>
                    <div className={c.title}></div>
                    <button onClick={ToMain} className={c.button + ' ' + c.second}><span></span></button>
                </div>
                <div className={c.item}>
                    <div className={c.title}></div>
                    <button onClick={ToMain} className={c.button + ' ' + c.third}><span></span></button>
                </div>
                <div className={c.item}>
                    <div className={c.title}></div>
                    <button onClick={ToMain} className={c.button + ' ' + c.fourth}><span></span></button>
                </div>
                <div className={c.item}>
                    <div className={c.title}></div>
                    <button onClick={ToMain} className={c.button + ' ' + c.fifth}><span></span></button>
                </div>
                <div className={c.item}>
                    <div className={c.title}></div>
                    <button onClick={ToMain} className={c.button + ' ' + c.sixth}><span></span></button>
                </div>
            </div>
            <FStar />
        </div>
    )
}

export default Cities