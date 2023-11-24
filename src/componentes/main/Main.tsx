import { useState, useEffect } from "react";
import Filme from "../filme/Filme";
import axios from 'axios';
import './Main.css'

type FilmesType = {
    id: number,
    titulo:string,
    descricao:string,
    foto:string
};

const URL_API = "http://localhost:3000/filmes";

export default function Main(){
    //Hook
    const [texto,setTexto] = useState("");
    const [filmes, setFilmes] = useState<FilmesType[]>([]);


    useEffect(() => {
        const buscarFilmes = async () => {
            try {
                const resposta = await axios.get<FilmesType[]>(URL_API);
                setFilmes(resposta.data);
            } catch (error) {
            console.log("Erro ao buscar seus dados.")
        }
        };

        buscarFilmes();
    }, []);


    //A função recebe um atributo chamado e de "event"
    function mudaTexto(e:React.ChangeEvent<HTMLInputElement>){
        setTexto(e.target.value)
    }
    return(
        <>
            <div className="pesquisa">
                <p>Buscar Filme</p>
                <input className='barrapesquisa' type="text" onChange={mudaTexto} />
                <div>
                    <p className='texto_digitado'>Pesquisa: {texto}</p>
                </div>
            </div>
            
            <main className="content-main">
                {filmes
                    .filter((filme) =>
                    filme.titulo.toLowerCase().includes(texto.toLowerCase())
                    )
                    .map((filme) => (
                        <Filme
                            key={filme.id}
                            descricao={filme.descricao}
                            titulo={filme.titulo}
                            foto={filme.foto}
                        />
                    ))}
            </main>
        </>
    );
}