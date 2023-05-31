import React, { useState } from "react";
import style from './dash.module.css'
import { Grid } from '@mui/material';
function CardResumoMes(props) {

    return (
        <>

            <Grid className={style.item_d_grafico}>

                <div className={style.item_d_grafico_cima}>
                    <b style={{ marginTop: '1%' }}>{props.titulo}</b>
                </div>
                <div className={style.item_d_grafico_meio}>
                    <div className={style.item_d_grafico_meio_conteudo}>


                        <div className={style.item_d_grafico_meio_linha}>

                            <div className={style.item_d_grafico_meio_conteudo_positivo} style={{backgroundImage: `url(${props.imagem})`}}></div>
                            <div className={style.item_d_grafico_meio_conteudo_informacao}>
                                <span style={{width:'100%'}}> {props.itemUm} {props.confirmadas} </span>
                            </div>

                        </div>
                        <div className={style.item_d_grafico_meio_linha}>

                            <div className={style.item_d_grafico_meio_conteudo_negativo} style={{backgroundImage: `url(${props.imagemDois})`}}></div>
                            <div className={style.item_d_grafico_meio_conteudo_informacao}>
                               <span style={{width:'100%'}}> {props.itemDois} {props.aguardando}</span> 
                            </div>

                        </div>
                        


                    </div>
                </div>
                <div className={style.item_d_grafico_baixo}>
                    <b style={{ marginTop: '1%' }}>ver todas</b>
                </div>


            </Grid>

        </>
    )

}

export default CardResumoMes;