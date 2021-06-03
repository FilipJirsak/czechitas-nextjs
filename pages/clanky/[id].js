import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/cs'
import { getAdresy, getClanekFull } from '../../lib/clanky'
import Hlasovatko from '../../components/Hlasovatko'
import styles from '../../styles/Clanky.module.css'

dayjs.locale('cs')
dayjs.extend(relativeTime)

const Clanek = ({ clanek }) => {
  return (
    <>
      <h1>{clanek.title}</h1>
      <div className={styles.metadata}>Publikováno {dayjs(clanek.date).fromNow()}.</div>
      <article dangerouslySetInnerHTML={{ __html: clanek.contentHtml }}></article>
      <div className={styles.hlasovani}>
        <Hlasovatko symbol="👍" initialVotes={0} />
        <Hlasovatko symbol="👎" initialVotes={0} />
      </div>
      {
        clanek.tags && (
          <div className={styles.tags}>
            {clanek.tags.map((tag, index) => <span className={styles.tag}>{tag}</span>)}
          </div>
        )
      }
    </>
  )
}

export const getStaticPaths = () => {
  return {
    paths: getAdresy(),
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const clanek = await getClanekFull(params.id)
  return {
    props: {
      clanek: clanek
    }
  }
}
export default Clanek
