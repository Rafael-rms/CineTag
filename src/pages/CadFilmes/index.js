import React, { useState } from "react";
import Banner from "components/Banner";
import Titulo from "components/Titulo";
//import "./Cad.Filmes.css"

function CadFilmes(){
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [favorit, setFavorit] = useState('')
    const [image_url, setImage_url] = useState('')
    const [message, setMessage] = useState('')

        let handleSubmit = async (e) => {
            e.preventDefault();
            try {
                let res = await fetch("http://localhost:3000/filmes", {
                    method: "POST",
                    headers: {
                        'Content-type' : 'application/json'
                    },
                    body: JSON.stringify({name,gender,favorit,image_url}),
                });
                let resJson = await res.json();
                if (res.status === 201) {
                    setName("");
                    setGender("");
                    setFavorit("");
                    setImage_url("");
                    setMessage('User created successfully');
                } else {
                    setMessage('Some error occured');
                }
            } catch (err) {
                console.log(err)
            }
        }


    return(
        <>
        <Banner imagem='favoritos'/>
        <Titulo>
            <h1>Cadastro de filmes</h1>
        </Titulo>
        <section className="formulario">
            <form onSubmit={handleSubmit}>
                <div className="campo-texto">
                    <input
                    type="text"
                    value={name}
                    placeholder="Inseri nome"
                    onChange={(e) => setName(e.target.value)}/>

                    <input
                    type="text"
                    value={gender}
                    placeholder="Inseri gênero"
                    onChange={(e) => setGender(e.target.value)}/>

                    <input
                    type="text"
                    value={image_url}
                    placeholder="Inseri imagem"
                    onChange={(e) => setImage_url(e.target.value)}/>

                    <button className="botao" type="submit">Inserir Filmes</button>
                    <div className="message">{message ? <p>(message)</p> : null}</div>
                </div>
            </form>
            
            
        </section>
        </>
    )
}

export default CadFilmes;