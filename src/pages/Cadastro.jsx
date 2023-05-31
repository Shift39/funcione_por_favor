import React from "react";
import { useState } from "react";
import CadastroEtapa1 from "components/cadastro/cadastro-psicologo/Cadastro-etapa1";
import CadastroEtapa2 from "components/cadastro/cadastro-psicologo/Cadastro-etapa2";
import CadastroEtapa3 from "components/cadastro/cadastro-psicologo/Cadastro-etapa3";
import CadastroEtapa4 from "components/cadastro/cadastro-psicologo/Cadastro-etapa4";
import CadastroEtapa5 from "components/cadastro/cadastro-psicologo/Cadastro-etapa5";
import { useNavigate, useLocation } from "react-router-dom";


import axios from "axios";

import Navbar from "components/navbar/Navbar";

const Cadastro = () => {
    const [step, setStep] = useState(1);
    const [informacaoPessoal, setInformacaoPessoal] = useState(2);
    const [infoEndereco, setInfoEndereco] = useState(3);
    const [formacao, setFormacao] = useState(4);
    const [sobre, setSobre] = useState(5);
    const [imagem, setImagem] = useState(6);
    const imagemFalsa = "./img/perfil/jorge.jpeg";

    const handleNext = (data) => {
        switch (step) {
            case 1:
                setInformacaoPessoal(data);
                setStep(2);
                break;
            case 2:
                setInfoEndereco(data);
                setStep(3);
                break;
            case 3:
                setFormacao(data);
                
                const corpRequisit = {
                    nome: informacaoPessoal.nome,
                    dataNascimento: informacaoPessoal.dataNascimento,
                    genero: informacaoPessoal.genero,
                    email: informacaoPessoal.email,
                    cpf: informacaoPessoal.cpf,
                    numeroTelefone: informacaoPessoal.numeroTelefone,
                    senha: informacaoPessoal.senha,
                    fotoPerfil: imagemFalsa,
                    endereco: {
                        cep: infoEndereco.cep,
                        estado: infoEndereco.estado,
                        cidade: infoEndereco.cidade,
                        bairro: infoEndereco.bairro,
                        rua: infoEndereco.rua,
                        numero: infoEndereco.numero,
                        complemento: null
                    },
                    crp: sobre.crp,
                    sobre: sobre.sobre,
                    abordagem: sobre.abordagem,
                    valorHora: sobre.valor,
                    especialidades: [{
                        nomeEspecialidade: data.especialidadeUm
                    }, {
                        nomeEspecialidade: data.especialidadeDois
                    }, {
                        nomeEspecialidade: data.especialidadeTres
                    }, {
                        nomeEspecialidade: data.especialidadeQuatro
                    }
                    ],
                    formacoes: [
                        {
                            nomeUniversidade: formacao.nomeUniversidade,
                            anoConclusao: formacao.anoConclusao,
                            grauAcademico: data.grau,
                            numeroMatricula: formacao.numeroMatricula
                        }
                    ]

                }
                console.log(corpRequisit)
                setStep(4);
                break;
            case 4:
                setSobre(data);
                console.log(data.valor)
                setStep(5);
                break;
            case 5:
                setImagem(data);

               
                axios.post('http://localhost:8080/psicologos/cadastro', {
                    nome: informacaoPessoal.nome,
                    dataNascimento: informacaoPessoal.dataNascimento,
                    genero: informacaoPessoal.genero,
                    email: informacaoPessoal.email,
                    cpf: informacaoPessoal.cpf,
                    numeroTelefone: informacaoPessoal.numeroTelefone,
                    senha: informacaoPessoal.senha,
                    fotoPerfil: imagem,
                    endereco: {
                        cep: infoEndereco.cep,
                        estado: infoEndereco.estado,
                        cidade: infoEndereco.cidade,
                        bairro: infoEndereco.bairro,
                        rua: infoEndereco.rua,
                        numero: infoEndereco.numero,
                        complemento: infoEndereco.complemento
                    },
                    crp: formacao.crp,
                    sobre: sobre.sobre,
                    abordagem: formacao.abordagem,
                    valorHora: sobre.valor,
                    especialidades: [{
                        nomeEspecialidade: formacao.especialidadeUm
                    }, {
                        nomeEspecialidade: formacao.especialidadeDois
                    }, {
                        nomeEspecialidade: formacao.especialidadeTres
                    }, {
                        nomeEspecialidade: formacao.especialidadeQuatro
                    }
                    ],
                    formacoes: [
                        {
                            nomeUniversidade: formacao.nomeUniversidade,
                            anoConclusao: formacao.anoConclusao,
                            grauAcademico: formacao.grau,
                            numeroMatricula: formacao.numeroMatricula
                        }
                    ]

                })
                    .then((response) => {
                        console.log("Resposta: ", response)
                    })
                    .catch((error) => {
                        console.log(error)
                    })

                break;
        }
    }

    console.log(formacao.grau)


  



    return (
        <>
            <Navbar />
            {step === 1 && <CadastroEtapa1 onNext={handleNext} />}
            {step === 2 && <CadastroEtapa2 onNext={handleNext} />}
            {step === 3 && <CadastroEtapa3 onNext={handleNext} />}
            {step === 4 && <CadastroEtapa4 onNext={handleNext} />}
            {step === 5 && <CadastroEtapa5 onNext={handleNext} />}

        </>
    )

}



export default Cadastro