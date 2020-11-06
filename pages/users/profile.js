import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Link from "next/link";

const query = gql`
  query {
    users {
      id
      email
      mdp
    }
  }
`;

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Profiles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <>
          <Query query={query}>
            {({ loading, error, data }) => {
              if (loading) return <p>Chargement...</p>;
              if (error) return <p>Un problème est survenue...</p>;
              return (
                <>
                  <table>
                    <tbody>
                      <tr>
                        <th>id</th>
                        <th>email</th>
                        <th>mdp</th>
                      </tr>
                      {data.users.map((user) => (
                        <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>{user.email}</td>
                          <td>{user.mdp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              );
            }}
          </Query>
        </>
        <br />
        <br />
        <br />
        <div className={styles.buttonSignInOut}>
          <Link href="/users/signin/">
            <a>Connexion</a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>Application GST</footer>
    </div>
  );
}
