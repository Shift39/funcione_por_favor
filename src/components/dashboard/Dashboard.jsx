import React, { useState } from "react";

import style from "./dash.module.css"
import { Alert, Grid } from '@mui/material';
import ApexChart from "./Chart";
import ApexChartDois from "./ChartDois";
import Card from "components/card-dash-component/card"
import SideBar from "components/side-bar-component/sideBar"
import CardTopoPsicologo from "components/card-dash-component/Card-nav-psicologo"
import CardPerfilPaciente from "components/card-dash-component/Card-perfil-paciente"
import CardResumoMes from "components/card-dash-component/Card-resumo-mes"
import axios from "axios";
import api from "../../api"
import { useEffect } from "react";
import Chart from 'react-apexcharts';



const DashBoard = ({ onNext }) => {
    const [dados, setDados] = useState("");
    const [avaliacao, setAvaliacao] = useState("");
    const [receita, setReceita] = useState("");
    const [horas, setHoras] = useState([]);
    const [qtdHoras, setQtdHoras] = useState([]);
    const [dias, setDias] = useState([]);
    const [alteracoes, setAlteracoes] = useState([]);
    const [qtdConsultasAguardandoPagamento, setQtdConsultasAguardandoPagamento] = useState("");
    const [qtdConsultasConfirmadas, setQtdConsultasConfirmadas] = useState("");
    const [dadosChart, setDadosChart] = useState();
    const [valorChart, setValorChart] = useState();
    const idUsuario = localStorage.getItem('idUsuario')
    const token = localStorage.getItem('tokenUsuario')
    const [item, setItem] = useState('');
    const [qtd, setQtd] = useState('');
    const [retorno, setRetorno] = useState('');
    const [nomePaciente, setNomePaciente] = useState('');
    const [diaHora, setDiaHora] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext({ dados })
    }

    const teste = localStorage.getItem('tokenUsuario');
    console.log(teste)


    useEffect(() => {



        axios.get(`http://localhost:8080/consultas/${idUsuario}/receita-mensal?mes=5&ano=2023`, {
            headers: {
                'Authorization': `Bearer ${teste}`
            }
        }).then((response) => {
            setReceita(response.data)

        })
            .catch((error) => {
                console.log(error)
            })
        axios.get(`http://localhost:8080/consultas/${idUsuario}/taxa-de-retorno-de-pacientes`, {
            headers: {
                'Authorization': `Bearer ${teste}`
            }
        }).then((response) => {
            setRetorno(response.data)
        })
            .catch((error) => {
                console.log(error)
            })

        axios.get(`http://localhost:8080/avaliacoes/${idUsuario}/avaliacao-media`, {
            headers: {
                'Authorization': `Bearer ${teste}`
            }
        }).then((response) => {

            setAvaliacao(response.data)
        })
            .catch((error) => {
                console.log(error)
            })

        axios.get(`http://localhost:8080/consultas/${idUsuario}/alteracoes-de-hoje`, {
            headers: {
                'Authorization': `Bearer ${teste}`
            }
        }).then((response) => {
            setAlteracoes(response.data)
        })
            .catch((error) => {
                console.log(error)
            })

        axios.get(`http://localhost:8080/consultas/${idUsuario}/resumo-do-mes?mes=5&ano=2023`, {
            headers: {
                'Authorization': `Bearer ${teste}`
            }
        }).then((response) => {
            setQtdConsultasAguardandoPagamento(response.data.qtdConsultasAguardandoPagamento)
            setQtdConsultasConfirmadas(response.data.qtdConsultasConfirmadas)


        })
            .catch((error) => {
                console.log(error)
            })

            axios.get(`http://localhost:8080/consultas/psicologo/${idUsuario}/proxima-consulta`, {
                headers: {
                    'Authorization': `Bearer ${teste}`
                }
            }).then((response) => {
                
                setNomePaciente(response.data.paciente.nome)
                setDiaHora(response.data.diaHoraMarcada)
    
            })
                .catch((error) => {
                    console.log(error)
                })
    
    });








    return (
        <>

            <Grid className={style.container} >


                <SideBar
                    titulo={"PAINEL"}
                    tituloUm={"PERFIL"}
                    tituloDois={"AGENDA"}
                    tituloTres={"CONSULTAS"}
                    tituloQuatro={"PACIENTES"}
                    tituloCinco={"CHAT"}

                >

                </SideBar>

                <CardTopoPsicologo 
                    imagem={"https://www.computerhope.com/jargon/g/guest-user.png"}
                />

                <Grid className={style.lado_direito} >

                    <Grid className={style.item_b}>

                        <Grid className={style.lado_de_cima_b} >
                            <h1> Olá {localStorage.getItem('nomeUsuario')}</h1>
                        </Grid>

                        <Grid className={style.lado_de_baixo_b}>

                            <Card
                                imagem={"https://th.bing.com/th/id/OIP.ElcnSFUsLsG_cGg6CsqlSgAAAA?pid=ImgDet&w=200&h=200&rs=1"}
                                titulo={"Receita"}
                                valor={"R$ " + receita}
                                cor={"Green"}

                            >

                            </Card>
                            <Card
                                imagem={"https://th.bing.com/th/id/OIP.jdU-Deu5xPvUBLwyiQGvswHaHa?pid=ImgDet&w=856&h=856&rs=1"}
                                titulo={"Retorno Pacientes"}
                                valor={retorno + " %"}
                                cor={"Orange"}

                            >

                            </Card>
                            <Card
                                imagem={"data:image/png;base64,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"}
                                titulo={"Avaliação média"}
                                valor={avaliacao}
                                cor={"Green"}
                            >

                            </Card>
                        </Grid>

                    </Grid>
                    <Grid className={style.item_c}>

                        <Grid className={style.item_c_grafico}>
                            <b>Horarios com mais consultas</b>
                            <ApexChart
                               
                            />

                        </Grid>
                        <Grid className={style.item_c_grafico}>
                            <b>Dias com mais consultas</b>

                            <ApexChartDois
                               
                            />

                        </Grid>


                    </Grid>
                    <Grid className={style.item_d}>

                        <CardPerfilPaciente

                            titulo={"Consultas de hoje"}
                            imagem={"https://mulheresnacomputacao.files.wordpress.com/2015/06/10393788_1080772458615575_5207049209406099031_n.jpg"}
                            nomePaciente={nomePaciente}
                            data={diaHora}



                        ></CardPerfilPaciente>

                        <CardResumoMes
                            titulo={"Resumo do mês"}
                            itemUm={"Consultas Confirmadas"}
                            itemDois={"Aguardando pagamento"}
                            imagem={"https://img.freepik.com/vetores-premium/botao-de-voto-positivo-verde-brilhante-com-marca-de-selecao-aceita-cracha-de-tarefa-completa-d-icone-realista-vetor_92753-5297.jpg?w=2000"}
                            imagemDois={"https://cdn-icons-png.flaticon.com/512/189/189792.png"}
                            aguardando={qtdConsultasAguardandoPagamento}
                            confirmadas={qtdConsultasConfirmadas}

                        ></CardResumoMes>

                        <CardResumoMes
                            titulo={"Alterações de hoje"}
                            itemUm={"Consultas canceladas"}
                            itemDois={"Horarios disponiveis"}
                            imagem={"https://media.istockphoto.com/id/1014086160/pt/vetorial/minus-sign-icon-button-flat-round-negative-symbol-sticker.jpg?s=170667a&w=0&k=20&c=ty5RzvyqwdDhe36FM59bqsvgGONPfY1BuhNQ5Uj5KPA="}
                            imagemDois={"https://static.vecteezy.com/ti/vetor-gratis/p1/2207856-agenda-rgb-color-icon-vetor.jpg"}
                            aguardando={alteracoes.qtdHorariosDisponiveis}
                            confirmadas={alteracoes.qtdConsultasCanceladas}

                        ></CardResumoMes>


                    </Grid>

                </Grid>



            </Grid>

        </>
    )


}


export default DashBoard;