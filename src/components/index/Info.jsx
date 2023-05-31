import React from "react";
import { Grid } from '@mui/material';

function Card(props) {

    const invertOrder = props.index === 1;
    return (
        <>
            <Grid className="info-section" container>
                <Grid item xs={12} sm={6}>
                    {invertOrder ? (
                        <Grid container className="info-container-texto">
                            <Grid container className="item-texo" justifyContent="space-evenly" direction="column">
                                <h2 className="texto-titulo">{props.titulo}</h2>
                                <p className="texto-paragrafo">
                                    {props.texto}
                                </p>

                            </Grid>
                        </Grid>
                    ) : (
                        <Grid container justifyContent="center">
                            <Grid item sm={10}>
                                <img className="imagem-info" src={props.imagem} alt="" />
                            </Grid>
                        </Grid>
                    )}
                </Grid>
                <Grid item xs={12} sm={6}>
                    {invertOrder ? (
                        <Grid container justifyContent="center">
                            <Grid item sm={10}>
                                <img className="imagem-info" src={props.imagem} alt="" />
                            </Grid>
                        </Grid>
                    ) : (
                        <Grid container className="info-container-texto">
                            <Grid container className="item-texo" justifyContent="space-evenly" direction="column">
                                <h2 className="texto-titulo">{props.titulo}</h2>
                                <p className="texto-paragrafo">
                                    {props.texto}
                                </p>

                            </Grid>
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </>
    );
}

export default Card;
