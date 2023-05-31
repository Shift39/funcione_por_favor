import React, { useState } from "react";
import { Grid } from '@mui/material';
import style from './dash.module.css'

function CardPerfilPaciente(props) {
    return (
        <>

            <Grid className={style.item_d_grafico}>

                <div className={style.item_d_grafico_cima}>
                    <b style={{ marginTop: '1%' }}>{props.titulo}</b>
                </div>
                <div className={style.item_d_grafico_meio}>
                    <div className={style.item_d_imagem_perfil_paciente} style={{backgroundImage: `url(${props.imagem})`}}></div>
                    <div className={style.item_d_informacoes_consulta}>
                        <div>

                            <div className={style.item_d_informacoes_consulta_nome_paciente}>

                                {props.nomePaciente}

                            </div>
                            <div className={style.item_d_informacoes_consulta_data}>

                                {props.data} {props.hora}

                            </div>

                        </div>
                        <div className={style.item_d_prontuario_atalho}>

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

export default CardPerfilPaciente;