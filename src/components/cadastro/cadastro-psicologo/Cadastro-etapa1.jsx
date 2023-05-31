import React, { useState } from "react";
import styles from "../cadastro.module.css"
import { Grid } from '@mui/material';
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Select, InputLabel, MenuItem } from "@mui/material";
import { isFocusable } from "@testing-library/user-event/dist/utils";


const CadastroEtapa1 = ({ onNext }) => {
    const [nome, setNome] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [email, setEmail] = useState("");
    const [numeroTelefone, setNumeroTelefone] = useState("");
    const [genero, setGenero] = useState("");
    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");

    const generos = [
        { valor: "Feminino", nome: "Feminino" },
        { valor: "Masculino", nome: "Masculino" },
        { valor: "Não-binário", nome: "Não-binário" },
    ];
    
    function formatarNumeroTelefone(numero) {
        const apenasDigitos = numero.replace(/\D/g, "");
        const numeroFormatado = apenasDigitos.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, "($1) $2$3-$4");
        return numeroFormatado;
    }

    function formatarCPF(cpf) {
        const apenasDigitos = cpf.replace(/\D/g, "");
        const cpfFormatado = apenasDigitos.replace(
            /(\d{3})(\d{3})(\d{3})(\d{2})/,
            "$1.$2.$3-$4"
        );

        return cpfFormatado;
    }

    const handleNumeroTelefoneChange = (e) => {
        e.preventDefault();
        const numeroFormatado = formatarNumeroTelefone(e.target.value);
        setNumeroTelefone(numeroFormatado);
    };

    const handleCpfChange = (e) => {
        const cpfFormatado = formatarCPF(e.target.value);
        setCpf(cpfFormatado);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        onNext({ nome, dataNascimento, email, numeroTelefone, genero, cpf, senha })
    }

    return (
        <>

            <Grid className={styles.container}>

                <Grid xs={12} md={12} className={styles.card} >

                    <Grid xs={10} md={5} className={styles.card_lado_esquerdo}>

                        <div className={styles.esquerdo_cima}>

                            <h1>Cadastro - Psicólogo</h1>
                            <br />
                            <h1>Etapa 1</h1>


                        </div>
                        <div className={styles.fases}>

                            <span className={styles.gama}><div className={styles.circle_one}>1</div> Informações Pessoais</span>
                            <span className={styles.gama}><div className={styles.circle}>2</div>Endereço</span>
                            <span className={styles.gama}><div className={styles.circle}>3</div>Educação</span>
                            <span className={styles.gama}><div className={styles.circle}>4</div>Sobre</span>
                            <span className={styles.gama}><div className={styles.circle}>5</div>Foto de perfil</span>

                        </div>

                    </Grid>
                    <Grid xs={10} md={8} className={styles.card_lado_direito}>

                        <div className={styles.direito_cima}>

                            <span>

                                <b >
                                    <h1 className={styles.titulo}>Suas Informações pessoais</h1>

                                    Insira suas informações pessoais
                                </b>



                            </span>

                            <form className={styles.a_cima} >

                            </form>
                        </div>

                        <Grid xs={12} md={12} style={{ height: '70%' }}>


                            <div className={styles.baixo} onSubmit={handleSubmit}>

                                <form onSubmit={handleSubmit} style={{ width: '100%' }}>

                                    <div style={{ marginLeft: '7%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: '40vh', width: '85%' }}>
                                        <span>Nome Completo</span>
                                        <input class={styles.a_input} type="text" id="nome" onChange={(e) => setNome(e.target.value)} placeholder="Escreva aqui seu nome completo" />


                                        <span>Email</span>
                                        <input className={styles.a_input} type="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Ex: nome@gmail.com" />

                                        <span>Senha</span>
                                        <input className={styles.a_input} type="password" id="senha" onChange={(e) => setSenha(e.target.value)} placeholder="*************" />

                                    </div>

                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly' }}>

                                        <div className={styles.baixo_lado_direito}>
                                            <span className={styles.a}>
                                                <span>Número de telefone</span>
                                                <input
                                                    className={styles.a_input} type="text" id="numeroTelefone"
                                                    onChange={handleNumeroTelefoneChange}
                                                    maxLength={11}
                                                    placeholder="(11) 0 0000-0000" value={numeroTelefone}
                                                />
                                            </span>

                                            <span className={styles.a}>
                                                <InputLabel id="label-genero">Genero</InputLabel>
                                                <Select
                                                    style={{
                                                        outline: '0px', borderColor: isFocusable ? '#9C9C9C' : '#50BFB8'
                                                    }}

                                                    labelId="label-genero"
                                                    value={genero}
                                                    className={styles.a_input_select}
                                                    label="Age"
                                                    onChange={(e) => setGenero(e.target.value)}
                                                >
                                                    <MenuItem value="">Insira seu gênero</MenuItem>
                                                    {generos.map((genero) => (
                                                        <MenuItem key={genero.valor} value={genero.valor}>
                                                            {genero.nome}
                                                        </MenuItem>

                                                    ))}
                                                </Select>
                                            </span>
                                        </div>

                                        <div className={styles.baixo_lado_esquerdo}>


                                            <span className={styles.a}>
                                                <span>CPF</span>
                                                <input className={styles.a_input} type="text" id="cpf" onChange={handleCpfChange} placeholder="000.000.000-00" value={cpf} maxLength={14} />
                                            </span>


                                            <span className={styles.a}>
                                                <span>Data de nascimento</span>
                                                <input className={styles.a_input} type="date" id="dataNascimento" onChange={(e) => setDataNascimento(e.target.value)} placeholder="dd/mm/yyyy" />
                                            </span>

                                        </div>


                                    </div>
                                    <Button style={{
                                        marginLeft: '5vh', marginTop: '15%', color: '#50BFB8', border: '2px solid #50BFB8',
                                        fontWeight: 'bold'
                                    }}

                                        type="submit" >Avançar</Button>

                                </form>

                            </div>



                        </Grid>



                    </Grid>

                </Grid>

            </Grid>

            <Grid className={styles.container_dois}>

                <Grid xs={12} md={12} className={styles.card_mobile} >

                    <Grid xs={12} md={12} className={styles.imagem}></Grid>
                    <Grid xs={12} md={10} className={styles.partes}>
                        <div className={styles.circle_mobile_one}>1</div>
                        <div className={styles.circle_mobile}>2</div>
                        <div className={styles.circle_mobile}>3</div>
                        <div className={styles.circle_mobile}>4</div>
                        <div className={styles.circle_mobile}>5</div>

                    </Grid>
                    <form style={{ display: 'flex', flexDirection: 'column' }}>
                        <h1>Informações pessoais</h1>

                        <span style={{ marginTop: '10%' }}>
                            <span>Nome Completo</span>
                            <TextField id="nome" label="" variant="outlined" style={{ width: '100%' }} />
                        </span>

                        <span style={{ marginTop: '10%' }}>
                            <span>Data de nascimento</span>
                            <TextField id="dataNascimento" label="" variant="outlined" style={{ width: '100%' }} />
                        </span>

                        <span style={{ marginTop: '10%' }}>
                            <span>Email</span>
                            <TextField id="email" label="" variant="outlined" style={{ width: '100%' }} />
                        </span>

                        <span style={{ marginTop: '10%' }}>
                            <span>Numero de telefone</span>
                            <TextField id="numeroTelefone" label="" variant="outlined" style={{ width: '100%' }} />
                        </span>

                        <span style={{ marginTop: '10%' }}>
                            <span>Gênero</span>
                            <TextField id="genero" label="" variant="outlined" style={{ width: '100%' }} />
                        </span>

                        <span style={{ marginTop: '10%' }}>
                            <span>CPF</span>
                            <TextField id="cpf" label="" variant="outlined" style={{ width: '100%' }} />
                        </span>

                        <span style={{ marginTop: '10%' }}>
                            <span>Senha</span>
                            <TextField id="senha" label="" variant="outlined" style={{ width: '100%' }} />
                        </span>
                        <Button className={styles.botao_final_cadastro} style={{ marginLeft: '5vh', marginTop: '20%' }} type="submit" >Avançar</Button>

                    </form>




                </Grid>

            </Grid>

        </>
    )




}



export default CadastroEtapa1;