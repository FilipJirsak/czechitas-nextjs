import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const dir = 'clanky'

/**
 * Vrací obsah textového souboru s článkem.
 */
const getClanekObsah = (id) => {
  const fullPath = path.join(dir, `${id}.md`)
  return fs.readFileSync(fullPath, 'utf8')
}

/**
 * Vrací seznam souborů (bez koncovky) s článkem.
 */
const getSeznamId = () => {
  const fileNames = fs.readdirSync(dir)
  return fileNames.map(fileName => fileName.replace(/\.md$/, ''))
}

/**
 * Vrací seznam adres článků pro `getStaticPaths()`.
 */
export const getAdresy = () => {
  return getSeznamId().map(id => {
    return {
      params: {
        id: id
      }
    }
  })
}

/**
 * Vrací základní údaje o článku pro zadané `id`.
 */
const getClanek = (id) => {
  const fileContents = getClanekObsah(id)
  const matterResult = matter(fileContents)
  return {
    id,
    ...matterResult.data
  }
}

/**
 * Vrací všechny údaje o článku pro zadané `id`.
 */
export const getClanekFull = async (id) => {
  const fileContents = getClanekObsah(id)
  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)

  return {
    id,
    contentHtml: processedContent.toString(),
    ...matterResult.data
  }
}

/**
 * Vrací seznam článků se základními údaji sežazený podle data publikování.
 */
export const getSeznamClanku = () => {
  return getSeznamId().map(id => getClanek(id)).sort((first, second) => first.date < second.date ? -1 : 1)
}