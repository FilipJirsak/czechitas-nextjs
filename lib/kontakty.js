import fs from "fs";

export const getKontakty = () => {
  const kontaktyContents = fs.readFileSync('data/kontakty.json', 'utf8')
  return JSON.parse(kontaktyContents)
}