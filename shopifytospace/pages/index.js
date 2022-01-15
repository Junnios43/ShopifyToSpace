import Head from "next/head";
import Images from "../components/Images";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>ShopifyToSpace!</title>
        <meta name="description" content="Make Commerce Better for Everyone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg-slate-800">
          <h1 className="text-white mx-8">Shopify To Space 🚀 </h1>
          <p className="text-white mx-8">By Jun</p>
          <Images posts={posts} />
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=H4bt2bZHw6FNdSgn7cEjwIiOcLUfHnh3dfS0RgKg&count=12"
  );
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
}
