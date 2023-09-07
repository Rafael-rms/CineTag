import React from "react";
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import CampoTexto from "components/CampoTexto";

function CadFilmes(){
    return(
        <>
        <Banner imagem='favoritos'/>
        <Titulo>
            <h1>Cadastro de filmes</h1>
        </Titulo>
        <CampoTexto placeholder="Inserir Nome"/>
        <CampoTexto placeholder="Inserir Gênero"/>
        <CampoTexto placeholder="Inseir Imagem"/>
        </>
    )
}

export default CadFilmes;