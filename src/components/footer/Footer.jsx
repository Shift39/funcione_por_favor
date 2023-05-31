import * as React from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import logoSemFundo from "components/images/logoBrancoSemFundo.png";
import { Container } from "@mui/material";
import Divider from '@mui/material/Divider';


function Footer() {


    return (
        <>
            <footer style={{ background: 'linear-gradient(1deg, #3db1a9 1%, #88cfcc 98%)' }}>
                <Container>
                    <Grid className="corpo-footer" container spacing={3}>
                        <Grid item xs={12} sm={6} md={3}>
                            <h3 className="footer-title">Mapa do site</h3>
                            <ul className="links-diversos">
                                <li><a className="link-light" href="./register.html">Cadastrar</a></li>
                                <li><a className="link-light" href="./login.html">Entrar</a></li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <h3 className="footer-title">Sobre</h3>
                            <ul className="links-diversos">
                                <li><a className="link-light" href="#">Empresa</a></li>
                                <li><a className="link-light" href="#">Criadores</a></li>
                                <li><a className="link-light" href="#">Legado</a></li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <h3 className="footer-title">Suporte</h3>
                            <ul className="links-diversos">
                                <li><a className="link-light" href="#">FAQ</a></li>
                                <li><a className="link-light" href="#">Telefones</a></li>
                                <li><a className="link-light" href="#">Endereço</a></li>
                            </ul>
                        </Grid>
                        <Grid className="text-left-logotype" item xs={12} sm={6} md={3}>
                            <div className="fw-bold d-flex mb-2">
                                <img className="img-footer" src={logoSemFundo} alt="" />
                            </div>
                            <p className="text-footer">
                                A terapia agora é online e acessível a todos, sua jornada de autocuidado começa aqui!
                            </p>
                        </Grid>
                    </Grid>

                    <Divider className="linha-footer" />

                    <Container className="fim-footer">

                        <Grid container className="ajustes" justifyContent="space-between">
                            <Grid item>
                                <p className="Copyright">Copyright © 2023 MySpaceLogy</p>
                            </Grid>
                            <Grid item className="redes" >
                                <Grid item>
                                    <Link href="#">
                                        <FacebookRoundedIcon sx={{ color: '#fff' }} />
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#">
                                        <Twitter sx={{ color: '#fff' }} />
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#">
                                        <Instagram sx={{ color: '#fff' }} />
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#">
                                        <LinkedIn sx={{ color: '#fff' }} />
                                    </Link>
                                </Grid>

                            </Grid>
                        </Grid>

                    </Container>
                </Container>
            </footer>
        </>
    );
}



export default Footer;
