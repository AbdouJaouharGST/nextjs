import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Bienvenue dans Gamma</h1>

        <p className={styles.description}>
          <div className={styles.buttonSignInOut}>
            <Link href="./users/profile/">
              <a>Profiles</a>
            </Link>
          </div>
          <div className={styles.buttonSignInOut}>
            <Link href="./users/signin/">
              <a>Connexion</a>
            </Link>
          </div>
        </p>
      </main>

      <footer className={styles.footer}>Application GST</footer>
    </div>
  );
}
