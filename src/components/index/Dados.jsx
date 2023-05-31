import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import Avatar from '@mui/icons-material/PersonAddAlt1Rounded';
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded';
import EventIcon from '@mui/icons-material/FourKPlusRounded';
import { colors } from '@mui/material';
import { RadioSharp } from '@mui/icons-material';

function Dados(props) {
    const [listaDados, setDados] = useState([
        {
            nome: "+9 mil",
            tipo: "Psicólogos",
        },
        {
            nome: "+4 mil",
            tipo: "Consultas por dia",
        },
        {
            nome: "+15 mil",
            tipo: "Pacientes",
        },
    ]);

    return (
        <>
            <Grid container className="data-section">
                <Grid sx={{ flexGrow: 1 }} container spacing={2} justifyContent="center" flexDirection="column">
                    <Grid item xs={12} sx={{ mb: 6 }}>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Paper elevation={0} className='titulo-cards-avaliacao'>
                                    <h2>Venha fazer parte!</h2>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" spacing={6}>
                            {listaDados.map((value) => (
                                <Grid key={value} item>
                                    <Paper elevation={0} className='card-dados'>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                            {value.nome === "+9 mil" && (
                                                <>
                                                    <AssignmentIndRoundedIcon
                                                        style={{
                                                            width: 130,
                                                            height: 130,
                                                            color: '#50bfb8'
                                                        }}
                                                        className='data-avatar'
                                                    />

                                                    <h3>{value.nome}

                                                    </h3>
                                                </>
                                            )}
                                            {value.nome === "+4 mil" && (
                                                <>
                                                    <EventIcon
                                                        style={{
                                                            width: 140,
                                                            height: 140,
                                                            color: '#60bfb8',
                                                            borderRadius: '40px'
                                                        }}
                                                        className='data-avatar' />

                                                    <h3 style={{ color: '#60bfb8' }}>{value.nome}</h3>
                                                </>
                                            )}
                                            {value.nome === "+15 mil" && (
                                                <>
                                                    <Avatar
                                                        style={{
                                                            padding: '4%',
                                                            width: 90,
                                                            height: 90,
                                                            color: '#FFFFFF',
                                                            background: '#60bfb8',
                                                            borderRadius: '25px'
                                                        }}
                                                        className='data-avatar' />

                                                    <h3>{value.nome}</h3>
                                                </>
                                            )}
                                            <p>{value.tipo}</p>
                                        </div>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid >
        </>
    );
}

export default Dados;
