import FStar from '../fStar/FStar'
import c from './Start.module.scss'

type Props = {
    scroll: () => void
}

const Start: React.FC<Props> = ({scroll}) => {
    return (
        <div className={c.start}>     
            <div className={c.container}>
                <FStar />
                <button className={c.button} onClick={scroll}><span className={c.text}>start</span></button>
            </div>          
        </div>
    )
}

export default Start