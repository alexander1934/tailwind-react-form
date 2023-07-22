import s from "./form.module.scss"

export default function Home() {
  return (
    <main className={s.main}>
        <h1 className={s.sign}>Sign up</h1>
        <div className={s.nameFields}>
            <input className={s.topInput} placeholder={"First Name"} type="text"/>
            <input className={s.topInput} placeholder={"Last Name                                                                                             "} type="text"/>
        </div>
        <div>
            <input className={s.bottomInput} placeholder={"Email"} type="text"/>
            <input className={s.bottomInput} placeholder={"Password"} type="text"/>
        </div>
        <button className={s.button}>Continue</button>
        <p className="text-gray-400 mt-6">Already have an account? Login in!</p>
    </main>
  )
}
