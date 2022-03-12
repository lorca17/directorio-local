import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link"
import Datos from "../Datos/datos";

export function getStaticPaths() {
  let categorias = Datos.map((e) => e.Categoría);
  categorias = [...new Set(categorias)];
  const paths = categorias.map((e) => {
      return ({params: { categorias: e.toLowerCase().replaceAll(" ", "-") }})
  }
    );

  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  let datos = Datos.filter((e) => urlizame(e.Categoría,e) === params.categorias);

  return {
    props: {
      params,
      datos,
    },
  };
}

function urlizame(str){
  
    let url = str.toLowerCase().replaceAll(' ','-')
    return( url )
}



export default function categorias(props) {

  let categorias = Datos.map((e) => {
      return (e.Categoría.toLowerCase())  
  });
  categorias = [...new Set(categorias)];
  
  return (
    <>
  
      <div className={styles.container}>
      <Head>
        <title>{ props.datos[0].Categoría } - Altavoces Club</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <Link href="/">
          <a>Inicio</a>
          </Link>

        <h1 className={styles.title}>
         { props.datos[0].Categoría } 
        </h1>

        <p className={styles.description}>
       
          <code className={styles.code}>Directorio categoría: { props.datos[0].Categoría } </code>
        </p>

        
          {props.datos.map((e, index) => (
           
              <a key={index} href={urlizame(e.Nombre)} className={styles.card}>
                <h2>{e.Nombre}</h2>
                <p>Direccion: {e.Direccion}</p>
                <p>Telefono: {e.Teléfono}</p>
                <p>Web: {e.Website}</p>
              </a>
          
          ))}
        
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
    </>
  );
}
