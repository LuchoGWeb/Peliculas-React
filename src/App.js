import React, { useState }  from 'react';
import './App.css';
import PageWrapper from './components/PageWrapper';
import Pelicula from './components/Pelicula';
import peliculasJson from "./peliculas.json";
import Paginacion from './components/Paginacion';

function App() {
  
  //Hook UseState para la paginación
  const [paginaActual, setpaginaActual] = useState(1);
  const totalPagina = 4;
  
  let peliculas = peliculasJson;

  //Mostrar peliculas por página
  peliculas = peliculas.slice(
    (paginaActual - 1) * totalPagina,
    paginaActual * totalPagina
  );

  return (
    <PageWrapper>
      {peliculas.map(pelicula =>
        <Pelicula 
            titulo={pelicula.titulo}
            calificacion={pelicula.calificacion}
            descripcion={pelicula.descripcion}
            duracion={pelicula.duracion}
            director={pelicula.director}
            actores={pelicula.actores}
            fecha={pelicula.fecha}
            imagen={pelicula.imagen}
        /> 
      )}

    {/* Componente para mostrar la cantidad de páginas de peliculas */}
    <Paginacion pagina={paginaActual} total={4} onChange={(pagina) => {
        setpaginaActual(pagina)
    }}/>    

    </PageWrapper>
  );
}

export default App;
