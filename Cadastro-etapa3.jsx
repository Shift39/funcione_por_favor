import React, { useState } from "react";
import styles from "../cadastro.module.css"
import { Grid } from '@mui/material';
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Stack, Chip, Autocomplete } from "@mui/material";


const CadastroEtapa3 = ({ onNext }) => {
    const [nomeUniversidade, setNomeUniversidade] = useState("");
    const [anoConclusao, setAnoConclusao] = useState("");
    const [grau, setGrau] = useState("");
    const [numeroMatricula, setNumeroMatricula] = useState("");
    const [crp, setCrp] = useState("");
    const [abordagem, setAbordagem] = useState("");
    const [chips, setChips] = useState([''])

    const [item, setItem] = useState();
    const formacoes = ['Ensino Fundamental', 'Ensino Superior',
        'Ensino Superior Incompleto', 'Pós-graduação Completo', 'Pós-graduação Incompleto',
        'Pós-graduação Mestrado Incompleto','Pós-graduação Mestrado Completo',
        'Pós-graduação Doutorado Incompleto','Pós-graduação Doutorado Completo']

    const addItem = () => {
        setChips([...chips, item])
    }

    const handleItem = (event) => {
        setItem(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext({ nomeUniversidade, anoConclusao, grau, numeroMatricula, crp, abordagem, chips })
    }

    const handleDelete = () => {
        setChips(chips.filter((list) => list !== item));
    }

    console.log(grau)


    return (
        <>

            <Grid className={styles.container}>

                <Grid xs={10} md={10} className={styles.card}>

                    <Grid xs={10} md={5} className={styles.card_lado_esquerdo}>

                        <div className={styles.esquerdo_cima}>

                            <h1>Cadastro - Psicólogo</h1>
                            <br />
                            <h1>Etapa 3</h1>


                        </div>
                        <div className={styles.fases}>

                            <span className={styles.gama}><div className={styles.circle}>1</div>Informações Pessoais</span>
                            <span className={styles.gama}><div className={styles.circle}>2</div>Endereço</span>
                            <span className={styles.gama}><div className={styles.circle_one}>3</div>Educação</span>
                            <span className={styles.gama}><div className={styles.circle}>4</div>Sobre</span>
                            <span className={styles.gama}><div className={styles.circle}>5</div>Foto de perfil</span>

                        </div>

                    </Grid>
                    <Grid xs={10} md={8} className={styles.card_lado_direito}>



                        <Grid xs={12} md={12} style={{ height: '77%', marginTop: '15%' }}>


                            <div className={styles.baixo}>

                                <form onSubmit={handleSubmit}>
                                    <div style={{ display: 'flex' }}>
                                        <div className={styles.baixo_lado_esquerdo}>
                                            <span className={styles.a}>
                                                <span>Nome da Universidade</span>
                                                <input className={styles.a_input} type="text" id="nomeUniversidade" onChange={(e) => setNomeUniversidade(e.target.value)} placeholder="SPtech" />
                                            </span>

                                            <span className={styles.a}>
                                                <span>Ano de conclusão</span>
                                                <input className={styles.a_input} type="text" id="ano" onChange={(e) => setAnoConclusao(e.target.value)} placeholder="2050" />
                                            </span>

                                            <span className={styles.a}>

                                                <span>Grau academico</span>
                                                <Autocomplete
                                                    disablePortal
                                                    id="combo-box-demo"
                                                    options={formacoes}
                                                    sx={{ width: 300 }}
                                                    renderInput={(params) => <TextField {...params} label="Movie" 
                                                    />}
                                                    
                                                    onChange={(eve  nt, newValue) => setGrau(newValue)}

                                                    style={{}}
                                                />
                                                <select name="grau" id="grau" className={styles.a_input_select}>
                                                    <option value="Ensino Fundamental">--Escolariadade--</option>
                                                    <option value="Ensino Superior">Ensino Superior</option>
                                                    <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                                                    <option value="Pós-graduação Completo">Pós-graduação Completo</option>
                                                    <option value="Pós-graduação Incompleto">Pós-graduação Incompleto</option>
                                                    <option value="Pós-graduação Mestrado Incompleto">Pós-graduação Mestrado Incompleto</option>
                                                    <option value="Pós-graduação Mestrado Completo">Pós-graduação Mestrado Completo</option>
                                                    <option value="Pós-graduação Doutorado Incompleto">Pós-graduação Doutorado Incompleto</option>
                                                    <option value="Pós-graduação Doutorado Completo">Pós-graduação Doutorado Completo</option>
                                                </select>

                                            </span>

                                            <span className={styles.a}>
                                                <span>Numero da matricula</span>
                                                <input className={styles.a_input} type="text" id="matricula" onChange={(e) => setNumeroMatricula(e.target.value)} placeholder="121412" />
                                            </span>
                                        </div>

                                        <div className={styles.baixo_lado_direito}>
                                            <span className={styles.a}>
                                                <span>Crp</span>
                                                <input className={styles.a_input} type="text" id="crp" onChange={(e) => setCrp(e.target.value)} placeholder="06/000470-IS" />
                                            </span>

                                            <span className={styles.a}>
                                                <span>Abordagem</span>
                                                <select id="genero" className={styles.a_input_select} onChange={(e) => setAbordagem(e.target.value)}>
                                                    <option value="">--Insira sua abordagem--</option>
                                                    <option value="TCC">TCC</option>
                                                    <option value="Holistica">Holistica</option>
                                                    <option value="Intensiva">Intensiva</option>
                                                </select>
                                            </span>

                                            <span className={styles.a}>
                                                <span>Especialidades</span>
                                                <TextField
                                                    id="chipValue"

                                                    value={item}
                                                    onChange={handleItem}
                                                />
                                                <Button onClick={addItem}>Adicionar</Button>
                                                <Stack direction={'row'} spacing={2} >

                                                    {
                                                        chips.map((item, index) => (
                                                            <Chip key={index} label={item} onDelete={() => handleDelete(item)} />
                                                        ))
                                                    }

                                                </Stack>
                                            </span>

                                        </div>
                                    </div>
                                    <Button style={{
                                        marginLeft: '20%', marginTop: '30%', color: '#50BFB8', border: '2px solid #50BFB8',
                                        fontWeight: 'bold'
                                    }} type="Submit" >Avançar</Button>
                                </form>



                            </div>



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
                        <div className={styles.circle_mobile}>4</div>
                        <div className={styles.circle_mobile}>5</div>

                    </Grid>
                    <form style={{ display: 'flex', flexDirection: 'column' }}>
                        <h1>Educação</h1>


                        <span style={{ marginTop: '10%' }}>
                            <span>Nome da universidade</span>
                            <TextField id="nomeUniversidade" label="" variant="outlined" style={{ width: '100%' }} />
                        </span>

                        <span style={{ marginTop: '10%' }}>
                            <span>Ano de conclusão</span>
                            <TextField id="ano" label="" variant="outlined" style={{ width: '100%' }} />
                        </span>

                        <span style={{ marginTop: '10%' }}>
                            <span>Grau academico</span>
                            <TextField id="grau" label="" variant="outlined" style={{ width: '100%' }} />
                        </span>

                        <span style={{ marginTop: '10%' }}>
                            <span>Numero da matricula</span>
                            <TextField id="matricula" label="" variant="outlined" style={{ width: '100%' }} />
                        </span>



                        <Button variant="contained" style={{
                            marginTop: '10%', backgroundColor: '#50BFB8', color: '#50BFB8', border: '2px solid #50BFB8',
                            fontWeight: 'bold'
                        }} >Avançar</Button>

                    </form>




                </Grid>

            </Grid>


        </>
    )


    /*function cadastrar() {
        var universidade = nomeUniversidade.value;
        var anoConclusao = ano.value;
        var grauAcademico = grau.value;
        var numeroMatricula = matricula.value;

        fetch("/usuarios/cadastrar",{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                universidadeServer: universidade,
                anoConclusaoServer: anoConclusao,
                grauAcademicoServer: grauAcademico,
                numeroMatriculaServer: numeroMatricula
            }).then(function (res) {
                console.log(res)
            }).catch(function(res){
                console.log(res)
            })
        })
        
    }*/

}

export default CadastroEtapa3;