import React from "react";
import { useState } from "react";
import Navbar from "components/navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import CadastroEtapa5 from "components/login/Login";


const Login = () => {
    const [step, setStep] = useState(1);
    const [informacaoPessoal, setInformacaoPessoal] = useState(2);

    const navigate = useNavigate();

    const handleNext = (data) =>{
        switch (step) {
            case 1:
                console.log(data.login)
                axios.patch('http://localhost:8080/usuarios/login',
                {
                    email: data.login,
                    senha: data.senha
                }
                )
                    .then((response) => {
                        console.log(response.data)
                        
                        const token = JSON.stringify(response.data.token)
                        const tokenFormatado = token.split('"').join('');
                        const nome = JSON.stringify(response.data.nome);
                        const nomeFormatado = nome.split('"').join('');
                        const email = JSON.stringify(response.data.email);
                        const emailFormatado = email.split('"').join('');

                        localStorage.setItem('tokenUsuario', tokenFormatado)
                        localStorage.setItem('emailUsuario', emailFormatado)
                        localStorage.setItem('nomeUsuario', nomeFormatado)
                        localStorage.setItem('idUsuario', JSON.stringify(response.data.userId))

                        navigate("/dashboard");
                        
                    })
                    .catch((error) => {
                        console.log(error)
                    })

                
                setStep(2); 
                break;
            case 2:
               
                break;
        }
    }

   

    
    return(
        <>
        <Navbar />
        {step === 1 && <CadastroEtapa5 onNext={handleNext} />}
        </>
    )
    
}

export default Login;