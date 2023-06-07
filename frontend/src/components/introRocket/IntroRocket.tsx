import c from './IntroRocket.module.scss'

export default function IntroRocket() {
  return (
    <div className={c.container}>
      <div className={c.content}>
        <div className={c.rectangle_one}></div>
        <div className={c.rectangle_two}></div>
        <div className={c.rectangle_three}></div>
        <div className={c.rectangle_four}></div>
      </div>
      <div className={c.title}>
        <p>traveling with TTravel</p>
      </div>
    </div>
  )
}
