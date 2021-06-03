import { getKontakty } from '../../lib/kontakty'
import styles from "../../styles/Kontakty.module.css"

const seznamKontaktu = getKontakty()

const Kontakt = ({ kontakt }) => {
  return (
    <>
      <img src={`/kontakty/${kontakt.id}.jpg`} width="400" height="400" alt={kontakt.jmeno} className={styles.photo} />
      <h1>{kontakt.jmeno}</h1>
      <h2>{kontakt.funkce}</h2>
      <p>{kontakt.text}</p>
    </>
  )
}

const pathFromKontakt = (kontakt) => {
  return {
    params: {
      id: kontakt.id
    }
  }
}

export const getStaticPaths = () => {
  const kontaktyPaths = seznamKontaktu.map(pathFromKontakt)
  return {
    paths: kontaktyPaths,
    fallback: false
  }
}

export const getStaticProps = ({ params }) => {
  return {
    props: {
      kontakt: seznamKontaktu.find(kontakt => kontakt.id === params.id)
    }
  }
}
export default Kontakt
