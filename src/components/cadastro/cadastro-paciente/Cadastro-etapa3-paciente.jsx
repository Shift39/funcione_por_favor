import React, { useState } from "react";
import styles from "../cadastro.module.css"
import { Grid, Input } from '@mui/material';
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const CadastroPacienteEtapa3 = ({ onNext }) => {
    const [imagem, setImagem] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        onNext({ imagem })
        navigate("/login")
    }

    return (

        <>
            <Grid className={styles.container}>

                <Grid xs={10} md={10} className={styles.card}>

                    <Grid xs={10} md={5} className={styles.card_lado_esquerdo}>

                        <div className={styles.esquerdo_cima}>

                            <h1>Cadastro - Paciente</h1>
                            <br />
                            <h1>Etapa 3</h1>


                        </div>
                        <div className={styles.fases}>

                            <span className={styles.gama}><div className={styles.circle}>1</div> Informações Pessoais</span>
                            <span className={styles.gama}><div className={styles.circle}>2</div>Endereço</span>
                            <span className={styles.gama}><div className={styles.circle_one}>3</div>Foto de perfil</span>

                        </div>

                    </Grid>
                    <Grid xs={10} md={8} className={styles.card_lado_direito}>


                        <Grid xs={12} md={12} style={{ height: '77%', marginTop: '15%' }}>
                            <form onSubmit={handleSubmit}>

                                <span className={styles.a}>
                                    <span style={{ marginLeft: '5vh' }}>Foto de perfil</span>
                                    <TextField style={{ marginLeft: '5vh' }} type="file" id="sobre" onChange={(e) => setImagem(e.target.value)} />
                                </span>

                                <Button style={{
                                    marginLeft: '5vh', marginTop: '90%', color: '#50BFB8', border: '2px solid #50BFB8',
                                    fontWeight: 'bold'
                                }}
                                    type="Submit">Cadastrar</Button>
                            </form>

                        </Grid>


                    </Grid>

                </Grid>

            </Grid>

            <Grid className={styles.container_dois}>

                <Grid xs={12} md={12} className={styles.card_mobile}>

                    <Grid xs={12} md={12} className={styles.imagem}></Grid>
                    <Grid xs={12} md={10} className={styles.partes}>
                        <div className={styles.circle_mobile}>1</div>
                        <div className={styles.circle_mobile}>2</div>
                        <div className={styles.circle_mobile_one}>3</div>


                    </Grid>
                    <form style={{ display: 'flex', flexDirection: 'column' }}>
                        <h1>Sobre</h1>


                        <span style={{ marginTop: '10%' }}>
                            <span>Caminho imagem</span>
                            <TextField id="sobre" label="" variant="outlined" style={{ width: '100%' }} onChange={(e) => setImagem(e.target.value)} />
                        </span>





                        <Button variant="contained" style={{ marginLeft: '10%', marginTop: '10%', backgroundColor: '#50BFB8' }}>Avançar</Button>

                    </form>

                </Grid>

            </Grid>
        </>
    )


}


export default CadastroPacienteEtapa3;