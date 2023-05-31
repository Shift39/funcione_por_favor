import React from "react";
import { useState } from "react";
import style from "html-css-template/css/dash.module.css"
import { Grid } from '@mui/material';

function SideBar(props) {

    const [show, setShow]=useState(true);



    return (
        <>
            <Grid className={style.lado_esquerdo} style={{display: show?'block':'none'}}>
                <div className={style.imagem}>
                </div>
                <div className={style.item_lado_esquerdo_a} style={{backgroundColor:'rgba(0, 0, 0, 0.137)'}}>
                    <div className={style.item_lado_esquerdo_a_imagem}></div>
                    <div className={style.item_lado_esquerdo_a_texto}> {props.titulo}</div>
                </div>
                <div className={style.item_lado_esquerdo_a} >
                    <div className={style.item_lado_esquerdo_b_imagem}></div>
                    <div className={style.item_lado_esquerdo_a_texto}> {props.tituloUm}</div>
                </div>
                <div className={style.item_lado_esquerdo_a} >
                    <div className={style.item_lado_esquerdo_c_imagem}></div>
                    <div className={style.item_lado_esquerdo_a_texto}> {props.tituloDois}</div>
                </div>
                <div className={style.item_lado_esquerdo_a} >
                    <div className={style.item_lado_esquerdo_d_imagem}></div>
                    <div className={style.item_lado_esquerdo_a_texto}> {props.tituloTres}</div>
                </div>
                <div className={style.item_lado_esquerdo_a} >
                    <div className={style.item_lado_esquerdo_e_imagem}></div>
                    <div className={style.item_lado_esquerdo_a_texto}> {props.tituloQuatro}</div>
                </div>
                <div className={style.item_lado_esquerdo_a} >
                    <div className={style.item_lado_esquerdo_f_imagem}></div>
                    <div className={style.item_lado_esquerdo_a_texto}> {props.tituloCinco}</div>
                </div>


                <div className={style.botao} onClick={() => setShow(false)}></div>
            </Grid>
            <Grid className={style.menu} style={{display: show?'none':'block'}} onClick={() => setShow(true)}> </Grid>
        </>
    )
}

export default SideBar;

