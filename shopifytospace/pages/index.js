import Head from "next/head";
import Image from "next/image";
import ImageCard from "../components/ImageCard";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ShopifyToSpace!</title>
        <meta name="description" content="Make Commerce Better for Everyone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ImageCard title="hi" description="test" date="today" />
      </main>
    </div>
  );
}
