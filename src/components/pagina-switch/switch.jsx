import React from "react";
import { Grid } from '@mui/material';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "components/navbar/Navbar"
import style from './switch.module.css'
function Switch() {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <Grid container xs={12} md={12} style={{ height: '90vh', display: 'flex', justifyContent: 'center' }}>
                <Grid item xs={6} md={6} style={{ height: '70vh', marginTop: '6%', display: 'flex', flexDirection: 'column' }}>
                    <Button
                        onClick={() => navigate("/cadastro-psicologo")}
                        style={{
                            borderRadius: '15px',
                            width: '90%', border: '2px solid #50BFB8',
                            height: '20%', marginLeft: '5%',
                            marginTop: '10%', marginBottom: '10%'
                        }}>
                        <span className={style.span_swith_text}> Psicólogo</span>
                    </Button>

                    <div style={{
                        border: '1px solid #50BFB8', width: '50%', marginLeft: '25%'
                    }}></div>

                    <Button
                        onClick={() => navigate("/cadastro-paciente")}
                        style={{
                            borderRadius: '15px',
                            width: '90%', border: '2px solid #50BFB8',
                            height: '20%', marginLeft: '5%', marginTop: '10%'
                        }}>
                        <span className={style.span_swith_text}>Paciente</span>
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

export default Switch;