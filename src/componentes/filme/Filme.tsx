 import './Filme.css'

 type FilmeProps={
    titulo:string,
    descricao:string,
    foto:string
 }
 export default function Filme(props:FilmeProps){
    return(
        <div className="filme_content" >
            <div className='foto_filme'>  
                <img src={props.foto} alt=""/>
            </div>
            <div className="foto_foto" >
                <h1>{props.titulo}</h1>
                <p className="descricao">
                    {props.descricao}
                </p>
            </div>
        </div>
    )
}