import React, { useState } from "react";
import style from './dash.module.css'
import { Grid } from '@mui/material';

function Card(props) {

    const estiloCard = {
        backgroundImage: `url("/src/components/images/Capturar2.PNG")`,
    };


    return (
        <>

            <Grid className={style.item_b_grafico} style={{ flexDirection: 'column', color: `${props.cor}`}}>

                <div className={style.item_b_grafico_icon_a} style={{backgroundImage: `url(${props.imagem})`}}></div>
                <div className={style.item_b_grafico_texto_a}>
                    {props.titulo}
                </div>
                <div className={style.item_b_grafico_valor_a}>
                    {props.valor}
                </div>


            </Grid>
        </>
    )
}

export default Card;