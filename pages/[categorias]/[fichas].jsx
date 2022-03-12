import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Datos from "../../Datos/datos";
import React, { useState, useEffect } from "react";



function urlizame(str) {
  let url = str.toLowerCase().replaceAll(" ", "-");
  return url;
}


function componentDidMount(){
  if (process.browser) {
    localStorage.setItem("token3", "token dsfsdf");
 }
}

function ver (){

  if (process.browser) {
    return (JSON.stringify(localStorage))
 }

}

export default function Fichas(props) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Directorio Musical" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/">
          <a>Inicio</a>
        </Link>
        <h1 className={styles.title}>Directorio Musical para Artistas</h1>
      </main>

      <button onClick={componentDidMount()}>test</button>
      <p>holat : {ver()}</p>

    </div>
  );
}
