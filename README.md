# Next.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Založení projektu

```bash
npm create-next-app my-next-web --use-npm
```

Vytvoří se adresář `my-next-web`, ten si otevřete ve Visual Studio Code. Lokální vývojový server spustíte příkazem

```bash
npm run dev
```

Živý web pro vývoj běží v prohlížeči na adrese [http://localhost:3000](http://localhost:3000).

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

## Odkazy na dokumentaci

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
