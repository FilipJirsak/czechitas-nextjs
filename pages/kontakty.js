import Link from 'next/link'
import { getKontakty } from '../lib/kontakty'
import styles from "../styles/Kontakty.module.css"

const Kontakt = ({ kontakt }) => {
  return (
    <Link href={`/kontakty/${kontakt.id}`}>
      <div className={styles.kontakt}>
        <img src={`/kontakty/${kontakt.id}.jpg`} width="150" height="150" />
        <div className={styles.udaje}>
          <h2>{kontakt.jmeno}</h2>
          <div>{kontakt.funkce}</div>
        </div>

      </div>
    </Link>
  )
}

const Kontakty = ({ kontakty }) => {
  return (
    <>
      <h1>Kontakty</h1>
      <div className={styles.kontakty}>
        {kontakty.map(kontakt => <Kontakt key={kontakt.id} kontakt={kontakt} />)}
      </div>
    </>
  )
}

export const getStaticProps = () => {
  const seznamKontaktu = getKontakty()
  return {
    props: {
      kontakty: seznamKontaktu
    }
  }
}
export default Kontakty
