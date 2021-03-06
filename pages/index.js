import Head from "next/head";
import Image from "next/image";
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninja" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et deleniti
          error asperiores, beatae mollitia minus iusto. Earum enim corporis
          cumque ullam id nulla doloremque, blanditiis illum voluptates tempore
          perferendis accusamus!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et deleniti
          error asperiores, beatae mollitia minus iusto. Earum enim corporis
          cumque ullam id nulla doloremque, blanditiis illum voluptates tempore
          perferendis accusamus!
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listings</a>
        </Link>
      </div>
    </>
  );
}
