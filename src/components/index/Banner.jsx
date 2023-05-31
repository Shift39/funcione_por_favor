import React from "react";
import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import img from "components/images/banner.png"
import { useNavigate } from "react-router-dom";
import 'html-css-template/css/index.css'

function Banner() {
    const navigate = useNavigate();
    return (
        <>
            <Container maxWidth="12" className="overlay header-home">
                <Grid className=" banner" >
                    <Grid className="container">
                        <Grid className="container-texto">
                            <Grid className="colum-text">
                                <h2 className="slogan">
                                    a plataforma ideal para sua saúde mental
                                </h2>
                                <p className="my-3">
                                    A terapia agora é online e acessível a todos, sua jornada de autocuidado começa aqui!
                                </p>
                                <a className="btn btn-primary btn-lg btn-white" role="button"
                                    onClick={() => navigate("/switch")}>
                                    Começar agora
                                </a>
                            </Grid>
                        </Grid>
                        <Grid className="container-imagem">
                            <Grid className="area-img">
                                <img className="imagem-banner" src={img} alt="" />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}


export default Banner;