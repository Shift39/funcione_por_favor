import React, { useState } from "react";
import styles from "html-css-template/css/cadastro.module.css"
import styles2 from "html-css-template/css/login.module.css"
import { useNavigate, useLocation } from "react-router-dom";
import { Grid } from '@mui/material';
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

const CadastroEtapa5 = ({ onNext }) => {

    const navigate = useNavigate();
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        onNext({ login, senha })
    }

    return (
        <>
            <Grid className={styles.container}>
                <Grid xs={4} md={4} style={{ width: '45vw', border: '1px solid #50BFB8C1', height: '100% + 10vh', justifyContent: 'center', display: 'flex', marginTop: '5%', borderRadius: '2%' }}>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', height: '60vh', width: '100%', marginTop: '5%' }}>
                        <div style={{ marginLeft: '10vh' }}>
                            <b class={styles2.bem_vindo}>
                                <div class={styles2.lado_esquerdo_bem_vindo}></div>

                                Bem-Vindo(a) de volta!

                                <div class={styles2.lado_direito_bem_vindo}></div>
                            </b>

                            <span className={styles2.a}>
                                <span style={{ marginLeft: '5vh', paddingBottom: '2%' }}>E-mail</span>
                                <TextField className="campos_form_login" style={{ marginLeft: '5vh' }} type="text" id="sobre" onChange={(e) => setLogin(e.target.value)} />
                            </span>
                            <span className={styles2.a}>
                                <span style={{ marginLeft: '5vh', paddingBottom: '2%' }}>Senha</span>
                                <TextField className="campos_form_login" style={{ marginLeft: '5vh' }} type="password" id="sobre" onChange={(e) => setSenha(e.target.value)} />
                            </span>

                            <span class={styles2.avisos}>

                                <span>
                                    <b style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                        Ainda não tem uma conta?
                                        <a href="/switch" style={{}}>Cadastre-se</a>
                                    </b>
                                </span>

                            </span>
                            <Button
                                style={{
                                    marginLeft: '5vh', marginTop: '10%', color: '#50BFB8', border: '2px solid #50BFB8',
                                    fontWeight: 'bold', width: '75%', textAlign: 'center'
                                }}
                                type="Submit" >Entrar</Button>
                        </div>
                    </form>
                </Grid>
            </Grid>


            <Grid className={styles.container_dois}>

                <Grid xs={12} md={12} className={styles.card_mobile}>


                    <form style={{ display: 'flex', flexDirection: 'column', height: '60vh' }} onSubmit={handleSubmit}>
                        <b class={styles2.bem_vindo}>
                            <div class={styles2.lado_esquerdo_bem_vindo}></div>

                            Bem-Vindo(a) de volta!

                            <div class={styles2.lado_direito_bem_vindo}></div>
                        </b>

                        <span style={{ marginTop: '10%' }}>
                            <span>E-mail</span>
                            <TextField style={{ marginLeft: '5vh' }} type="text" id="sobre" onChange={(e) => setLogin(e.target.value)} />
                        </span>

                        <span style={{ marginTop: '10%' }}>
                            <span>Senha</span>
                            <TextField style={{ marginLeft: '5vh' }} type="password" id="sobre" onChange={(e) => setSenha(e.target.value)} />
                        </span>

                        <Button variant="contained" style={{ marginTop: '30%', backgroundColor: '#50BFB8' }} type="Submit">Entrar</Button>
                    </form>
                </Grid>
            </Grid>
        </>
    )
}

export default CadastroEtapa5;