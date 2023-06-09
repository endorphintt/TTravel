import c from './Cities.module.scss'

const Cities: React.FC = () => {
    return (
        <div className={c.container}>
            <div className={c.cities_container}>
                <div className={c.item}>
                    <div className={c.title}>Wroclaw</div>
                    <button className={c.button + ' ' + c.first}><span></span></button>
                </div>
                <div className={c.item}>
                    <div className={c.title}></div>
                    <button className={c.button + ' ' + c.second}><span></span></button>
                </div>
                <div className={c.item}>
                    <div className={c.title}></div>
                    <button className={c.button + ' ' + c.third}><span></span></button>
                </div>
                <div className={c.item}>
                    <div className={c.title}></div>
                    <button className={c.button + ' ' + c.fourth}><span></span></button>
                </div>
                <div className={c.item}>
                    <div className={c.title}></div>
                    <button className={c.button + ' ' + c.fifth}><span></span></button>
                </div>
                <div className={c.item}>
                    <div className={c.title}></div>
                    <button className={c.button + ' ' + c.sixth}><span></span></button>
                </div>
            </div>
        </div>
    )
}

export default Cities