import Head from "next/head";
import Images from "../components/Images";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>ShopifyToSpace!</title>
        <meta name="description" content="Make Commerce Better for Everyone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Images posts={posts} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=H4bt2bZHw6FNdSgn7cEjwIiOcLUfHnh3dfS0RgKg&count=10"
  );
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
}
