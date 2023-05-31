import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useState } from 'react';

function Avaliacoes(props) {
    const [listaDados, setDados] = useState([
        {
            texto: "Minha saúde mental mudou completamente, superei minhas inseguranças em me expor graças ao chat anônimo no primeiro contato com o psicólogo",
            nome: "Renata Abreu",
            tipo: "Paciente",
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxp_lt7MQcN0TVkb0fcT7COdiTgHkMrcFumg&usqp=CAU",
        },
        {
            texto: "A plataforma é muito intuitiva e fácil de usar, atendimentos remotos ajudam muito na minha rotina, pois não tenho tempo de ir em uma consulta presencial",
            nome: "Giovana Alencar",
            tipo: "Paciente",
            imagem: "https://www.psitto.com.br/wp-content/uploads/2021/02/psicologo-online-gratuito.jpg",
        },
        {
            texto: "A MySpaceLogy mudou minha carreira, a quantidade de Pacientes que eu atendo dobrou e, além disso, a plataforma é incrível e tem tudo que eu preciso",
            nome: "João da Silva",
            tipo: "Paciente",
            imagem: "https://www.mireiamunoz.com/wp-content/uploads/2022/07/consulta-psicologia-online-hombre-reservando-sesion-online.jpg",
        },
    ]);

    return (
        <>
            <Grid container className="avaliacao-section">
                <Grid sx={{ flexGrow: 1 }} container spacing={2} justifyContent="center" flexDirection="column">
                    <Grid item xs={12} sx={{ mb: 6 }}>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Paper elevation={0} className='titulo-cards-avaliacao'>
                                    <h2>Pessoas que já usaram a plataforma</h2>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" spacing={6}>
                            {listaDados.map((value) => (
                                <Grid key={value} item sx={{ mb: 6 }}>
                                    <Paper elevation={0} className='dados-card'>
                                        <p className='texto-avaliacao'>
                                            {value.texto}
                                        </p>
                                        <div className='dados-imagem'>
                                            <img className='imagem-avaliacao' src={value.imagem} alt="Imagem" />
                                            <Grid item className='baixo-card'>
                                                <h3>{value.nome}</h3>
                                                <span>{value.tipo}</span>
                                            </Grid>
                                        </div>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Avaliacoes;
