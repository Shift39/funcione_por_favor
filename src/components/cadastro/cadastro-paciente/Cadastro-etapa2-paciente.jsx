import React, { useState } from "react";
import styles from "../cadastro.module.css"
import { Grid } from '@mui/material';
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";
import { Select, InputLabel, MenuItem } from "@mui/material";


const CadastroPacienteEtapa2 = ({ onNext }) => {
    const [cep, setCep] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    const [bairro, setBairro] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext({ cep, estado, cidade, bairro, rua, numero, complemento })
    }


    const estadosBrasileiros = [
        { valor: "AC", nome: "Acre" },
        { valor: "AL", nome: "Alagoas" },
        { valor: "AP", nome: "Amapá" },
        { valor: "AM", nome: "Amazonas" },
        { valor: "BA", nome: "Bahia" },
        { valor: "CE", nome: "Ceará" },
        { valor: "DF", nome: "Distrito Federal" },
        { valor: "ES", nome: "Espírito Santo" },
        { valor: "GO", nome: "Goiás" },
        { valor: "MA", nome: "Maranhão" },
        { valor: "MT", nome: "Mato Grosso" },
        { valor: "MS", nome: "Mato Grosso do Sul" },
        { valor: "MG", nome: "Minas Gerais" },
        { valor: "PA", nome: "Pará" },
        { valor: "PB", nome: "Paraíba" },
        { valor: "PR", nome: "Paraná" },
        { valor: "PE", nome: "Pernambuco" },
        { valor: "PI", nome: "Piauí" },
        { valor: "RJ", nome: "Rio de Janeiro" },
        { valor: "RN", nome: "Rio Grande do Norte" },
        { valor: "RS", nome: "Rio Grande do Sul" },
        { valor: "RO", nome: "Rondônia" },
        { valor: "RR", nome: "Roraima" },
        { valor: "SC", nome: "Santa Catarina" },
        { valor: "SP", nome: "São Paulo" },
        { valor: "SE", nome: "Sergipe" },
        { valor: "TO", nome: "Tocantins" },
    ];

    useEffect(() => {
        if (cep.length === 8) {
            axios.get(`https://viacep.com.br/ws/${cep}/json/`)
                .then((response) => {
                    const { uf, localidade, bairro, logradouro, complemento } = response.data;
                    setRua(logradouro);
                    setBairro(bairro);
                    setCidade(localidade);
                    setEstado(uf);
                    setComplemento(complemento)
                    console.log(response.data)
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [cep]);


    return (
        <>
            <Grid className={styles.container}>

                <Grid xs={10} md={10} className={styles.card}>

                    <Grid xs={10} md={5} className={styles.card_lado_esquerdo}>

                        <div className={styles.esquerdo_cima}>

                            <h1>Cadastro - Paciente</h1>
                            <br />
                            <h1>Etapa 2</h1>


                        </div>
                        <div className={styles.fases}>

                            <span className={styles.gama}><div className={styles.circle}>1</div> Informações Pessoais</span>
                            <span className={styles.gama}><div className={styles.circle_one}>2</div>Endereço</span>
                            <span className={styles.gama}><div className={styles.circle}>3</div> Foto de perfil</span>

                        </div>

                    </Grid>

                    <Grid xs={10} md={8} className={styles.card_lado_direito}>



                        <Grid xs={12} md={12} style={{ height: '77%', marginTop: '15%' }}>


                            <div className={styles.baixo}>

                                <form onSubmit={handleSubmit} style={{ width: '100%', height: "80vh" }}>

                                    <div style={{ display: 'flex' }}>
                                        <div className={styles.baixo_lado_esquerdo}>
                                            <span className={styles.a}>
                                                <span>CEP</span>
                                                <input className={styles.a_input} type="text" id="cep" onChange={(e) => setCep(e.target.value)} maxLength={9} placeholder="12992-130" />
                                            </span>

                                            <span className={styles.a}>
                                                <InputLabel id="label-estado">Insira seu estado</InputLabel>
                                                <Select
                                                    labelId="label-estado"
                                                    id="estado"
                                                    value={estado}
                                                    className={styles.a_input_select}
                                                    label="Age"
                                                    onChange={(e) => setEstado(e.target.value)}
                                                >
                                                    <MenuItem value="">-- Insira seu estado --</MenuItem>
                                                    {estadosBrasileiros.map((estado) => (
                                                        <MenuItem key={estado.valor} value={estado.valor}>
                                                            {estado.nome}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </span>

                                            <span className={styles.a}>
                                                <span>Cidade</span>
                                                <input className={styles.a_input} type="text" id="cidade" onChange={(e) => setCidade(e.target.value)} value={cidade} placeholder="São Paulo" />
                                            </span>
                                        </div>


                                        <div className={styles.baixo_lado_direito}>

                                            <span className={styles.a}>
                                                <span>Bairro</span>
                                                <input className={styles.a_input} type="text" id="bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} placeholder="Paulista" />
                                            </span>
                                            <span className={styles.a}>

                                                <span>Rua</span>
                                                <input className={styles.a_input} type="text" id="rua" value={rua} onChange={(e) => setRua(e.target.value)} placeholder="Rua haddok lobo" />
                                            </span>
                                            <span className={styles.a}>
                                                <span>Numero</span>
                                                <input className={styles.a_input} type="number" id="numero" onChange={(e) => setNumero(e.target.value)} placeholder="234" />
                                            </span>

                                        </div>
                                    </div>

                                    <div style={{ marginLeft: '7%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '15vh', width: '85%' }}>
                                        <span>Complemento</span>
                                        <input className={styles.a_input} type="text" id="complemento" value={complemento} onChange={(e) => setComplemento(e.target.value)} placeholder="segundo andar" />

                                    </div>


                                    <Button style={{
                                        marginLeft: '5vh', marginTop: '20%', color: '#50BFB8', border: '2px solid #50BFB8',
                                        fontWeight: 'bold'
                                    }}
                                        type="Submit">Avançar</Button>
                                </form>

                            </div>


                        </Grid>

                    </Grid>

                </Grid>

            </Grid>

            <Grid className={styles.container_dois}>

                <Grid xs={12} md={12} className={styles.card_mobile}>

                    <Grid xs={12} md={12} className={styles.imagem}></Grid>
                    <Grid xs={12} md={10} className={styles.partes_paciente}>
                        <div className={styles.circle_mobile}>1</div>
                        <div className={styles.circle_mobile_one}>2</div>
                        <div className={styles.circle_mobile}>3</div>

                    </Grid>
                    <form style={{ display: 'flex', flexDirection: 'column' }}>
                        <h1>Endereço</h1>



                        <span style={{ marginTop: '10%' }}>
                            <span>CEP</span>
                            <TextField id="nome" label="" variant="outlined" style={{ width: '100%' }} />
                        </span>

                        <span style={{ marginTop: '10%' }}>
                            <span>Estado</span>
                            <TextField id="nome" label="" variant="outlined" style={{ width: '100%' }} />
                        </span>

                        <span style={{ marginTop: '10%' }}>
                            <span>Cidade</span>
                            <TextField id="nome" label="" variant="outlined" style={{ width: '100%' }} />
                        </span>

                        <span style={{ marginTop: '10%' }}>
                            <span>Bairro</span>
                            <TextField id="nome" label="" variant="outlined" style={{ width: '100%' }} />
                        </span>

                        <span style={{ marginTop: '10%' }}>
                            <span>Rua</span>
                            <TextField id="nome" label="" variant="outlined" style={{ width: '100%' }} />
                        </span>

                        <span style={{ marginTop: '10%' }}>
                            <span>Numero</span>
                            <TextField id="nome" label="" variant="outlined" style={{ width: '100%' }} />
                        </span>

                        <span style={{ marginTop: '10%' }}>
                            <span>Complemento</span>
                            <TextField id="nome" label="" variant="outlined" style={{ width: '100%' }} />
                        </span>

                        <Button style={{
                            marginLeft: '5vh', marginTop: '10%', color: '#FFFFFF', border: '2px solid #50BFB8',
                            fontWeight: 'bold', backgroundColor: '#50BFB8'
                        }}
                            type="Submit">Avançar</Button>
                    </form>




                </Grid>

            </Grid>

        </>
    )

}

export default CadastroPacienteEtapa2