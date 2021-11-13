function Pelicula(props){
    return (
        <div className="movie-item-style-2">
            <img src={props.imagen} alt="" />
            <div className="mv-item-infor">
            <h6>
                <a href="moviesingle.html">
                    {props.titulo}
                </a>
            </h6>
            <p className="rate">
                <i className="ion-android-star"></i>
                <span>{props.calificacion}</span> /10</p>
            <p className="describe">{props.descripcion}</p>
            <p className="run-time"> Duración: {props.duracion} </p>
            <p className="run-time"> Fecha: {props.fecha}</p>
            <p>Director: <a href="#">{props.director}</a></p>
            <p>Actores: {props.actores}</p>
            </div>
        </div>
    )
}

export default Pelicula;