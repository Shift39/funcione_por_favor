import React, { useState } from "react";
import { Grid } from '@mui/material';
import style from './dash.module.css'

function CardTopoPsicologo(props) {


    return (
        <>

            <Grid className={style.card_psicologo_top}>

                <Grid className={style.card_psicologo_top_nome}>

                    <b>{localStorage.getItem('nomeUsuario')}</b>

                </Grid>

                <Grid className={style.card_psicologo_top_imagem} style={{backgroundImage: `url(${props.imagem})` }}></Grid>

            </Grid>


        </>
    );



}


export default CardTopoPsicologo;
