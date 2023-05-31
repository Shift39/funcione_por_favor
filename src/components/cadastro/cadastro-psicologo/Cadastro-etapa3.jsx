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
    const [especialidadeUm, setEspecialidadeUm] = useState("");
    const [especialidadeDois, setEspecialidadeDois] = useState("");
    const [especialidadeTres, setEspecialidadeTres] = useState("");
    const [especialidadeQuatro, setEspecialidadeQuatro] = useState("");
    const [item, setItem] = useState();
    const formacoes = ['Ensino Superior','Pós-graduação Completo', 'Pós-graduação Incompleto',
        'Pós-graduação Mestrado Incompleto', 'Pós-graduação Mestrado Completo',
        'Pós-graduação Doutorado Incompleto', 'Pós-graduação Doutorado Completo']

    const abordagens = ['TCC', "Holistica", "Intensiva"];
    const especialidades = [
        { title: "Abuso de álcool" },
        { title: "Acompanhamento psicológico" },
        { title: "Adoção de filhos" },
        { title: "Adolescência" },
        { title: "Agorafobia" },
        { title: "Anorexia nervosa" },
        { title: "Ansiedade" },
        { title: "Ansiedade Generalizada (TAG)" },
        { title: "Autismo" },
        { title: "Autoconhecimento" },
        { title: "Autoestima" },
        { title: "Automutilação" },
        { title: "Borderline" },
        { title: "Bulimia nervosa" },
        {
            title: "Burnout"
        },
        {
            title: "Câncer"
        },
        {
            title: "Casais"
        },
        {
            title: "Cirúrgia bariátrica"
        },
        {
            title: "Ciúmes"
        },

        {
            title: "Compulsão alimentar"
        },
        {
            title: "Compulsão por compras"
        },
        {
            title: "Compulsões"
        },
        {
            title: "Conflitos amorosos"
        },
        {
            title: "Conflitos familiares"
        },
        {
            title: "Coronavírus"
        },
        {
            title: "Crise existencial"
        },
        {
            title: "Cuidados paliativos"
        },
        {
            title: "Déficit de atenção (TDA/TDAH)"
        },
        {
            title: "Dependência química"
        },
        {
            title: "Depressão"
        },
        {
            title: "Depressão pós-parto"
        },

        {
            title: "Dificuldade de aprendizagem"
        },
        {
            title: "Dificuldades no casamento"
        },
        {
            title: "Disfunções sexuais"
        },
        {
            title: "Dislexia"
        },
        {
            title: "Distúrbios alimentares"
        },
        {
            title: "Doenças crônicas"
        },
        {
            title: "Dores crônicas"
        },
        {
            title: "Drogas"
        },
        {
            title: "Ejaculação precoce"
        },
        {
            title: "Emagrecimento"
        },
        {
            title: "Endividamento"
        },
        {
            title: "Esquizofrenia"
        },
        {
            title: "Estresse"
        },
        {
            title: "Estresse pós-traumático (TEPT)"
        },
        {
            title: "Família"
        },
        {
            title: "Fobia social"
        }]

    const addItem = () => {
        setChips([...chips, item])
    }

    const handleItem = (event) => {
        setItem(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext({ nomeUniversidade, anoConclusao, grau, numeroMatricula, crp, abordagem, especialidadeUm, especialidadeDois, especialidadeTres, especialidadeQuatro })
    }

    const handleDelete = () => {
        setChips(chips.filter((list) => list !== item));
    }

    
    console.log("TAFUNFANDO " + especialidadeUm + especialidadeDois + especialidadeTres + especialidadeQuatro )
    
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
                                                <input className={styles.a_input} type="text" id="ano" maxLength={4} onChange={(e) => setAnoConclusao(e.target.value)} placeholder="2050" />
                                            </span>

                                            <span className={styles.a}>

                                                <span>Grau academico</span>
                                                <span style={{ width: '105%' }}>
                                                    <Autocomplete
                                                        disablePortal
                                                        id="combo-box-demo"
                                                        options={formacoes}
                                                        sx={{ width: 300 }}
                                                        renderInput={(params) => <TextField {...params} placeholder="Informe seu grau academico"
                                                        />}
                                                        style={{ border: '1px solid green', borderRadius: '5%' }}
                                                        onChange={(event, newValue) => setGrau(newValue)}


                                                    />
                                                </span>

                                            </span>

                                            
                                        </div>

                                        <div className={styles.baixo_lado_direito}>
                                            <span className={styles.a}>
                                                <span>Crp</span>
                                                <input className={styles.a_input} type="text" id="crp" minLength={12} onChange={(e) => setCrp(e.target.value)} placeholder="06/000470-IS" />
                                            </span>

                                            <span className={styles.a}>
                                                <span>Abordagem</span>
                                                <span style={{ width: '105%' }}>
                                                    <Autocomplete
                                                        disablePortal
                                                        id="combo-box-demo"
                                                        options={abordagens}
                                                        sx={{ width: 300 }}
                                                        renderInput={(params) => <TextField {...params} placeholder="Informe sua abordagem"
                                                        />}

                                                        style={{ border: '1px solid green', borderRadius: '5%' }}
                                                        onChange={(event, newValue) => setAbordagem(newValue)}


                                                    />
                                                </span>

                                            </span>

                                            <span className={styles.a}>
                                                <span>Numero da matricula</span>
                                                <input className={styles.a_input} type="text" id="matricula" onChange={(e) => setNumeroMatricula(e.target.value)} placeholder="121412" />
                                            </span>

                                            

                                        </div>
                                        
                                    </div>
                                    <span className={styles.a} style={{marginLeft:'8%', width:'85%'}}>
                                                <span>Especialidades</span>

                                                <Autocomplete
                                                    multiple
                                                    id="tags-standard"
                                                    options={especialidades}
                                                    getOptionLabel={(option) => option.title}
                                                    
                                                    renderInput={(params) => (

                                                        <TextField
                                                            {...params}
                                                            variant="standard"

                                                        />


                                                    )}
                                                   

                                                    value={item}
                                                    onChange={(event, value) => {
                                                        setEspecialidadeUm(value[0].title)
                                                        if (value.length == 2) {
                                                            setEspecialidadeDois(value[1].title)
                                                        } else if (value.length == 3) {
                                                            setEspecialidadeTres(value[2].title)
                                                        } else if (value.length == 4) {
                                                            setEspecialidadeQuatro(value[3].title)
                                                        }
                                                        
                                                    }}
                                                    
                                                    placeholder=""



                                                />




                                            </span>
                                    <Button style={{
                                        marginLeft: '8%', marginTop: '30%', color: '#50BFB8', border: '2px solid #50BFB8',
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
                            <TextField id="ano" label="" variant="outlined"  maxLength={4} style={{ width: '100%' }} />
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