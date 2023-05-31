import React, { Component, useEffect, useState } from "react";
import Chart from 'react-apexcharts';
import axios from "axios";

const ApexChart = (props) => {

  const idUsuario = localStorage.getItem('idUsuario')
  const teste = localStorage.getItem('tokenUsuario');
  const dado = [];
  const qtd = [];
  const [options, setOptions] = useState({
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      }
    }, xaxis: {
      categories: [],
    }, fill : {
      colors: ['#49CCC6']
    },
  });
  const [series, setSeries] = useState([{
    name: "series-1",
    data: [props.valor]
  }
  ]
  )
  useEffect(() => {
    axios.get(`http://localhost:8080/consultas/${idUsuario}/top-cinco-horarios-com-mais-consultas?mes=5&ano=2023`, {
      headers: {
          'Authorization': `Bearer ${teste}`
      }
  }).then((response) => {
      response.data.map(item => {
          qtd.push(item.qtdVezes)
          dado.push(item.horario)
          console.log(dado)
          console.log(qtd)
      })
      
      setOptions({
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        }, xaxis: {
          categories: dado,
        }, fill : {
          colors: ['#49CCC6']
        },
      })

      setSeries([{
        name: "series-1",
        data: qtd
      }
      ])
     
  })
      .catch((error) => {
          console.log(error)
      })

  });

  


  return (
    <>
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={options}
              series={series}
              type="bar"
              
              width="100%"
              height="200"
            />

          </div>
        </div>
      </div>
    </>
  );

}



export default ApexChart