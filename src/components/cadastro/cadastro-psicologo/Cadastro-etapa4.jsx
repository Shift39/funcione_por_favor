import React, { useState } from "react";
import styles from "../cadastro.module.css"
import { Grid } from '@mui/material';
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Stack, Chip } from  "@mui/material";

const CadastroEtapa4 = ({ onNext }) => {
    const [sobre, setSobre] = useState("");
    const [valor, setValor] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext({ sobre,valor})
    }

    return (

        <>
            <Grid className={styles.container}>

                <Grid xs={10} md={10} className={styles.card}>

                    <Grid xs={10} md={5} className={styles.card_lado_esquerdo}>

                        <div className={styles.esquerdo_cima}>

                            <h1>Cadastro - Psicólogo</h1>
                            <br />
                            <h1>Etapa 4</h1>


                        </div>
                        <div className={styles.fases}>

                            <span className={styles.gama}><div className={styles.circle}>1</div>Informações Pessoais</span>
                            <span className={styles.gama}><div className={styles.circle}>2</div>Endereço</span>
                            <span className={styles.gama}><div className={styles.circle}>3</div>Educação</span>
                            <span className={styles.gama}><div className={styles.circle_one}>4</div>Sobre</span>
                            <span className={styles.gama}><div className={styles.circle}>5</div>Foto de perfil</span>

                        </div>

                    </Grid>
                    <Grid xs={10} md={8} className={styles.card_lado_direito}>



                        <Grid xs={12} md={12} style={{ height: '77%', marginTop: '15%' }}>
                            <form onSubmit={handleSubmit}>
                                <span className={styles.sobre_a}>

                                    <span style={{marginTop:'2%',marginBottom:'3%'}}>Fale um pouco sobre você</span>
                                    <textarea  className={styles.sobre} type="text" id="sobre" onChange={(e) => setSobre(e.target.value)} />

                                    <span className={styles.a}>
                                        <span>Valor da hora</span>
                                        <input className={styles.a_input} type="number" id="matricula" onChange={(e) => setValor(e.target.value)} placeholder="120,00" />
                                    </span>

                                    <Button className={styles.botao_final_cadastro} style={{
                                        marginLeft: '0vh', marginTop: '20%', color: '#50BFB8', width: '20%', border: '2px solid #50BFB8',
                                        fontWeight: 'bold'
                                    }} type="submit" >Avançar</Button>
                                </span>
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
                        <div className={styles.circle_mobile}>3</div>
                        <div className={styles.circle_mobile_one}>4</div>
                        <div className={styles.circle_mobile}>5</div>

                    </Grid>
                    <form style={{ display: 'flex', flexDirection: 'column' }}>
                        <h1>Sobre</h1>


                        <span style={{ marginTop: '10%' }}>
                            <span>Sobre</span>
                            <TextField id="sobre" label="" variant="outlined" style={{ width: '100%' }} onChange={(e) => setSobre(e.target.value)} />
                        </span>

                       

                        <span className={styles.a}>
                            <span>Especialidades</span>
                       
                        </span>







                        <Button className={styles.botao_final_cadastro} style={{
                            marginLeft: '5vh', marginTop: '20%', color: '#50BFB8', border: '2px solid #50BFB8',
                            fontWeight: 'bold'
                        }} type="submit" >Avançar</Button>
                    </form>




                </Grid>

            </Grid>




        </>

    )


}


export default CadastroEtapa4;