import React from "react";
import { useState } from "react";
import CadastroPacienteEtapa1 from "components/cadastro/cadastro-paciente/Cadastro-etapa1-paciente";
import CadastroPacienteEtapa2 from "components/cadastro/cadastro-paciente/Cadastro-etapa2-paciente";
import CadastroPacienteEtapa3 from "components/cadastro/cadastro-paciente/Cadastro-etapa3-paciente";

import axios from "axios";
import Navbar from "components/navbar/Navbar";

const CadastroPaciente = () => {
    const [step, setStep] = useState(1);
    const [infoPessoal, setInfoPessoal] = useState(2);
    const [infoEndereco, setInfoEndereco] = useState(3);
    const [imagem, setImagem] = useState(4);
    
    const imagemFalsa = "./img/perfil/jorge.jpeg";

    const handleNext = (data) => {
        switch (step) {
            case 1:
                setInfoPessoal(data);
                setStep(2);
                break;
            case 2:
                setInfoEndereco(data);
                setStep(3)
                break;
            case 3:
                setImagem(data);
                const corpRequisit = {
                    nome: infoPessoal.nome,
                    dataNascimento: infoPessoal.dataNascimento,
                    genero: infoPessoal.genero,

                    cpf: infoPessoal.cpf,
                    numeroTelefone: infoPessoal.numeroTelefone,
                    senha: infoPessoal.senha,
                    fotoPerfil: imagemFalsa,
                    endereco: {
                        cep: infoEndereco.cep,
                        estado: infoEndereco.estado,
                        cidade: infoEndereco.cidade,
                        bairro: infoEndereco.bairro,
                        rua: infoEndereco.rua,
                        numero: infoEndereco.numero,
                        complemento: null
                    }

                
                }
                console.log(corpRequisit)

                axios.post('http://localhost:8080/pacientes/cadastro', {
                    nome: infoPessoal.nome,
                    dataNascimento: infoPessoal.dataNascimento,
                    genero: infoPessoal.genero,
                    email: infoPessoal.email,
                    cpf: infoPessoal.cpf,
                    numeroTelefone: infoPessoal.numeroTelefone,
                    senha: infoPessoal.senha,
                    fotoPerfil: imagem,
                    endereco: {
                        cep: infoEndereco.cep,
                        estado: infoEndereco.estado,
                        cidade: infoEndereco.cidade,
                        bairro: infoEndereco.bairro,
                        rua: infoEndereco.rua,
                        numero: infoEndereco.numero,
                        complemento: null
                    }

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

    console.log()

    return (
        <>
            <Navbar />
            {step === 1 && <CadastroPacienteEtapa1 onNext={handleNext} />}
            {step === 2 && <CadastroPacienteEtapa2 onNext={handleNext} />}
            {step === 3 && <CadastroPacienteEtapa3 onNext={handleNext} />}
        </>
    )

}

export default CadastroPaciente