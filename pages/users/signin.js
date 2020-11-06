import Head from "next/head";
import styles from "../../styles/Home.module.css";
import React from "react";
import Link from "next/link";

class Home extends React.Component {
  Home() {}

  render(props) {
    return (
      <>
        <div className={styles.container}>
          <Head>
            <title>Gamma</title>
          </Head>

          <main className={styles.main}>
            <div className={styles.form}>
              <h3 className={styles.titleCo}>Connexion</h3>

              <form className={styles.formCo}>
                <br />
                <label className={styles.labelCo}>
                  Adresse email
                  <input
                    className={styles.inputTextForm}
                    name="numberOfGuests"
                    type="text"
                  />
                </label>
                <label className={styles.labelCo}>
                  Mot de passe
                  <input
                    className={styles.inputTextForm}
                    name="numberOfGuests"
                    type="password"
                  />
                </label>
                <input
                  className={styles.inputSubmitForm}
                  type="submit"
                  value="Go"
                />
              </form>
            </div>
          </main>

          <footer className={styles.footer}></footer>
        </div>
      </>
    );
  }
}
export default Home;
