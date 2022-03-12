import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Datos from "../Datos/datos";

function urlizame(str){ 
    let url = str.toLowerCase().replaceAll(' ','-')
    return( url ) 
}


export default function Home() {
  let categorias = Datos.map((e) => e.Categoría);
  categorias = [...new Set(categorias)];
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Directorio Musical" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Directorio Musical para Artistas
        </h1>

        <p className={styles.description}>
        ¡Que empiece la musica!
          <code className={styles.code}>y el Baile</code>
        </p>

        <div className={styles.grid}>
          {categorias.map((e, index) => (
            <Link key={index} href={urlizame(e)+'/'}>
              <a className={styles.card}>
                <h2>{e}</h2>
              </a>
            </Link>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <img src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
