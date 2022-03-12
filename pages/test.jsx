import Datos from "../Datos/santapola";



export default function test() {
    let categorias = Datos.map((e) => e.Categoria);
    categorias = [...new Set(categorias)]
    const paths = categorias.map((e)=> ({params : {'categorias' : e}}))
 

  return (
  <>
  
  <h1>hola</h1>
 {/* <p> {JSON.stringify(Datos)} </p> */}
 <p>{JSON.stringify(paths)}</p>
  
  </>
  
  );
}
