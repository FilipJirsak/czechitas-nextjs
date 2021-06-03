import Head from 'next/head'
import Link from 'next/link'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Webové vývojářky s. r. o.</title>
        <meta name="description" content="Vytvoříme webové stránky i pro vás!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <span className="logo"><Link href="/">Webové vývojářky s. r. o.</Link></span>
        <nav>
          <Link href="/">Úvod</Link>
          <Link href="/kontakty">Kontakty</Link>
          <Link href="/clanky">Články</Link>
        </nav>
      </header>
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout