import Link from 'next/link'
import { getSeznamClanku } from '../lib/clanky'

const Clanek = ({ clanek }) => {
  return (
    <div>
      <Link href={`/clanky/${clanek.id}`}>
        <a>{clanek.title}</a>
      </Link>
    </div>
  )
}

const Clanky = ({ clanky }) => {
  return (
    <>
      <h1>Odborné články</h1>
      {clanky.map(clanek => <Clanek key={clanek.id} clanek={clanek} />)}
    </>
  )
}

export const getStaticProps = () => {
  const seznamClanku = getSeznamClanku()
  return {
    props: {
      clanky: seznamClanku
    }
  }
}
export default Clanky
