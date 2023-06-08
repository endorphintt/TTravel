import c from './Start.module.scss'

type Props = {
    scroll: () => void
}

const Start: React.FC<Props> = ({scroll}) => {
    return (
        <div className={c.start}>
            <button className={c.button} onClick={scroll}>start</button>
        </div>
    )
}

export default Start