import c from './Languages.module.scss'

type Props = {
    scroll: () => void;
    chooseLanguage: (lan: string) => void
}

const Languages: React.FC<Props> = ({scroll, chooseLanguage}) => {

    const choouseEng = (lan: string): void => {
        chooseLanguage(lan)
        scroll()
    }

    return (
        <div className={c.container}>
            <div className={c.buttons_container}>
                <button className={c.button} onClick={() => choouseEng('usa')} ><img src="./usa.png" alt="eng" /></button>
                <button className={c.button} onClick={() => choouseEng('ua')} ><img src="./ua.png" alt="ua" /></button>
                <button className={c.button} onClick={() => choouseEng('pl')} ><img src="./pl.png" alt="pl" /></button>
                <button className={c.button} onClick={() => choouseEng('rf')} ><img src="./rf.png" alt="rus" /></button>
            </div>
        </div>
    )
}

export default Languages