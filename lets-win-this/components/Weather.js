import React from 'react';

const WeatherData = () => {
  // Sample data from the provided JSON array
  const data = [
    {
      "text": "",
      "awarenessTypeName": "Agitação Marítima",
      "idAreaAviso": "BGC",
      "startTime": "2023-05-13T10:00:00",
      "awarenessLevelID": "green",
      "endTime": "2023-05-16T09:00:00"
    },
    {
      "text": "",
      "awarenessTypeName": "Nevoeiro",
      "idAreaAviso": "BGC",
      "startTime": "2023-05-13T10:00:00",
      "awarenessLevelID": "green",
      "endTime": "2023-05-16T09:00:00"
    },
    {
      "text": "",
      "awarenessTypeName": "Tempo Quente",
      "idAreaAviso": "BGC",
      "startTime": "2023-05-13T10:00:00",
      "awarenessLevelID": "green",
      "endTime": "2023-05-16T09:00:00"
    }
  ];

  return (
    <div>
      <h2>Weather Data</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <p>Awareness Type: {item.awarenessTypeName}</p>
            <p>Start Time: {item.startTime}</p>
            <p>End Time: {item.endTime}</p>
          </li>
        ))}
      </ul>
      <select id="locations"><option value="">--</option><option value="1150525">Praia Costa da Gale (Melides)</option><option value="1150522">Praia da Comporta</option><option value="1150322">Praia da Costa da Caparica</option><option value="1150324">Praia da Cova do Vapor</option><option value="1150323">Praia da Fonte da Telha</option><option value="1151121">Praia da Lagoa de Albufeira</option><option value="1151321">Praia da Samoqueira</option><option value="1150524">Praia de Melides</option><option value="1151322">Praia de Porto Covo</option><option value="1150922">Praia de Santo André</option><option value="1151324">Praia de São Torpes</option><option value="1151124">Praia de Sesimbra</option><option value="1150521">Praia de Troia</option><option value="1150523">Praia do Carvalhal</option><option value="1151122">Praia do Meco</option><option value="1151325">Praia do Morgável</option>
      <option value="">All beaches</option>
                    <option value="/covaDoVapor">Praia da Cova do Vapor</option>
                    <option value="/praia-cds">Praia do CDS</option>
                    <option value="/saojoao">Praia de São João</option>
                    <option value="/">Praia da Adiça</option>
                    <option value="/">Praia da Saúde</option>
                    <option value="/">Praia da Ribeira de Cascais</option>
                    <option value="/">Praia da Adiça</option>
                    <option value="/">Praia da Rainha</option>
                    <option value="/">Praia do Castelo </option>
                
                  </select>
    </div>
  );
};

export default WeatherData;
