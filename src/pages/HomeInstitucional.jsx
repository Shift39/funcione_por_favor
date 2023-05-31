import React from "react";
import Navbar from "components/navbar/NavbarIndex";
import Banner from "components/index/Banner";
import Info from "components/index/Info";
import { useState } from "react";
import Avaliacoes from "components/index/Avaliacoes";
import Footer from "components/footer/Footer";
import Dados from "components/index/Dados";

import imagemInfo1 from "components/images/consulting.jpg";
import imagemInfo2 from "components/images/calendar.jpg";
import imagemInfo3 from "components/images/chat.jpg";

function Index() {

    const [listaInfo] = useState([
        {
            titulo: "Encontre psicólogos de sua confiança",
            texto:
                " Nossa plataforma conta com um sistema de avaliação em que os pacientes avaliam os psicólogos com estrelas, ajudando você a encontrar o psicólogo ideal!",
            imagem: imagemInfo1,
        },
        {
            titulo: "Agende consultas",
            texto:
                " Você pode agendar consultas através do calendário do psicólogo que você escolheu podendo escolher dia e horário.",
            imagem: imagemInfo2,
        },
        {
            titulo: "Converse anonimamente no primeiro contato",
            texto:
                " Na MySpaceLogy você pode optar por conversar anonimamente com um psicólogo que você escolher por um tempo limite caso sinta algum receio de se expor. Vamos juntos superar as inseguranças!",
            imagem: imagemInfo3,
        },
    ]);


    return (
        <>
            <Navbar />
            <Banner />
            {listaInfo.map((info, index) => (
                <Info
                    key={index}
                    titulo={info.titulo}
                    texto={info.texto}
                    imagem={info.imagem}
                    index={index}
                />
            ))}

            <Avaliacoes />
            <Dados />
            <Footer />
        </>

    )
}


export default Index;