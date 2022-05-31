# Next.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Založení projektu

```bash
npx create-next-app my-next-web --use-npm
```

Vytvoří se adresář `my-next-web`, ten si otevřete ve Visual Studio Code. Lokální vývojový server spustíte příkazem

```bash
npm run dev
```

Živý web pro vývoj běží v prohlížeči na adrese [http://localhost:3000](http://localhost:3000).

## Adresáře

- `pages` – stránky webu, co soubor `.js` to jedna stránka.
- `public` – statické soubory, které se zkopírují do kořenového adresáře výsledného webu

Místo přípony `.jsx` se v Nextu používá jen `.js`. Soubory s proměnnou v hranatých závorkách (např. `/produkt/[id].js`) jsou šablony – podle tohoto souboru se může vygenerovat více stránek na základě pole – za `[id]` se postupně dosazují položky pole.

Příklad adresářové struktury a výsledných adres:

```
/index.js         → /
/kontakty.js      → /kontakty
/clanky/index.js  → /clanky
/clanky/o-nas.js  → /clanky/o-nas
/produkt/[id].js  → /produkt/jablko, /produkt/hruska, /produkt/vino…
```

## `async/await` – jiný zápis `then`

```javascript
const nactiData = () => {
  fetch("https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400")
    .then((resp) => resp.json())
    .then((json) => console.log(json));
};
```

Předchozí kód se dá zapsat také takto:

```javascript
const nactiData = async () => {
  const resp = await fetch("https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400");
  const json = await resp.json();
  console.log(json);
};
```

## Funkce exportované z Next.js page

### [getStaticProps](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation)

```javascript
export const getStaticProps = (context) => {
  return {
    props: {},
    revalidate: false,
    notFound: false,
    redirect: null,
  };
};
```

### [getStaticPaths](https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation)

```javascript
export const getStaticPaths = () => {
  return {
    paths: [
        { params: { … } },
        { params: { … } } //…
      ],
    fallback: false
  };
};
```

## Doinstalování podpory pro Markdown

```bash
npm install remark remark-html gray-matter
```

## Publikování na Netlify

V souboru `package.json` upravit `scripts.build`. Původní hodnota:

```javascript
"build": "next build"
```

Po úpravě:

```javascript
"build": "next build && next export"
```

## Odkazy na dokumentaci

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/) - A quick reference to the Markdown syntax.
