// Chart.js code for creating charts
// Your Chart.js code goes here


document.addEventListener("DOMContentLoaded", function () {
    // Data for the bar chart
    var data = {
        labels: ['Estados Unidos', 'Cuba', 'Colombia', 'Venezuela'],
        datasets: [{
            label: 'Muertes extranjeras en Mexico por Covid19(2020)',
            data: [146, 85, 55, 51],
            backgroundColor:'orange',
            borderColor:'orange',
            borderWidth: 1
        }]
    };
    var data2 = {
        labels: ['Estados Unidos', 'third y el Caribe','Otros', 'Espana', 'second'],
        datasets: [{
            label: 'Porciento de migrantes',
            data: [62, 20, 7, 6, 1],          
            borderWidth: 1
        }]
    };
    // Configuration for the bar chart
    var config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    title: {
                        display: true,
                        text: "Numero de personas"
                      },
                    beginAtZero: true
                }
            }
        }
    };
    var config2 = {
        type: 'doughnut',
        data: data2
    };

    // Creating the bar chart
    var NonMexicanDeaths = new Chart(
        document.getElementById('myBarChart'),
        config
    );
    
    var PIBData = {
        labels: ['2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [{
            label: 'Indicadores de PIB',
            data: [0, 0, 0, 0, 0, 0],
            borderColor: 'darkgreen',            
            borderWidth: 1
        }]
    };
    var PIBConf = {
        type: 'line',
        data: PIBData,
        options: {
            scales: {
                y: {
                    title: {
                        display: true,
                        text: "Millones de dolares"
                      },
                    beginAtZero: false
                }
            }
        }
    };
    var PIBGraph = new Chart(
        document.getElementById('EconomicalIndicators'),
        PIBConf
    );
    
    var InmigrantsGraph = new Chart(
        document.getElementById('myBarChart3'),
        config2
    );

    var HealthExpenditureData = {
        labels: ['2017', '2018', '2019', '2020'],
        datasets: [{
            label: 'Gasto publico en salud',
            data: [0, 0, 0, 0],
            borderColor: 'darkgreen',            
            borderWidth: 1
        }]
    };
    var HealthExpenditureConf = {
        type: 'line',
        data: HealthExpenditureData,
        options: {
            scales: {
                y: {
                    title: {
                        display: true,
                        text: "Porciento del PIB"
                      },
                    beginAtZero: true
                }
            }
        }
    };
    var HealthExpenditureGraph = new Chart(
        document.getElementById('HealthExpenditure'),
        HealthExpenditureConf
    );

    var UnemployementRateData = {
        labels: ['2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [{
            label: 'Tazas de desempleo',
            data: [0, 0, 0, 0, 0, 0],
            borderColor: 'darkgreen',            
            borderWidth: 1
        }]
    };
    var UnemployementRateConf = {
        type: 'line',
        data: UnemployementRateData,
        options: {
            scales: {
                y: {
                    title: {
                        display: true,
                        text: "Porciento de la poblacion economicamente activa"
                      },
                    beginAtZero: true
                }
            }
        }
    };
    var UnemployementRateGraph = new Chart(
        document.getElementById('UnemployementRate'),
        UnemployementRateConf
    );

    var PovertyData = {
        labels: ['2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [{
            label: 'Pobreza',
            data: [0, 0, 0, 0, 0, 0],
            borderColor: 'darkgreen',            
            borderWidth: 1
        },
    {
        label: 'Pobreza Extrema',
            data: [0, 0, 0, 0, 0, 0],
            borderColor: 'darkblue',            
            borderWidth: 1
    }]
    };
    var PovertyConf = {
        type: 'line',
        data: PovertyData,
        options: {
            scales: {
                y: {
                    title: {
                        display: true,
                        text: "Porciento de la poblacion total"
                      },
                    beginAtZero: true
                }
            }
        }
    };

    var PovertyGraph = new Chart(
        document.getElementById('PovertyPercentage'),
        PovertyConf
    );

    var MigrationThoughtsData = {
        labels: ['2017', '2018', '2020'],
        datasets: [{
            label: 'Pensamientos Migratorios',
            data: [0, 0, 0],
            borderColor: 'darkgreen',            
            borderWidth: 1
        }]
    };
    var MigrationThoughtsConf = {
        type: 'line',
        data: MigrationThoughtsData,
        options: {
            scales: {
                y: {
                    title: {
                        display: true,
                        text: "Porciento de la poblacion mayor de edad"
                      },
                    beginAtZero: true
                }
            }
        }
    };

    var MigrationThoughtsGraph = new Chart(
        document.getElementById('MigrationThoughts'),
        MigrationThoughtsConf
    );
   
    var CitizenshipAdquisitionData = {
        labels: ['Europa', 'Asia', 'LATAM', 'Canada', 'Africa', 'Oceania'],
        datasets: [{
            label: 'Ciudadanias otorgadas',
            data: [0, 0, 0, 0,0,0],
            borderWidth: 1
        }]
    };
    var CitizenshipAdquisitionConfig = {
        type: 'doughnut',
        data: CitizenshipAdquisitionData
    };
    var  CitizenshipAdquisitionGraph = new Chart(
        document.getElementById('CitizenshipAdquisition'),
        CitizenshipAdquisitionConfig
    );


    let PIB_Countries = ['Antigua and Barbuda',	'Argentina',	'Bahamas',	'Barbados',	'Belize',	'Bolivia (Plurinational State of)',
'Brazil',	'Chile',	'Colombia',	'Costa Rica',	'Cuba',	'Dominica',	'Ecuador',	'El Salvador',	'Grenada',	'Guatemala',	'Guyana',	
'Haiti',	'Honduras',	'Jamaica',	'Mexico',	'Nicaragua',	'Panama',	'Paraguay',	'Peru',	'Dominican Republic',	'Saint Kitts and Nevis',
'Saint Vincent and the Grenadines',	'Saint Lucia',	'Suriname',	'Trinidad and Tobago',	'Uruguay',	'Venezuela (Bolivarian Republic of)',
'Latin America and the Caribbean',	'Latin America','Caribbean'];
let HealthExpenditure_Countries = ['Antigua and Barbuda',	'Argentina',	'Bahamas',	'Barbados',	'Belize',	'Bolivia (Plurinational State of)',
'Brazil',	'Chile',	'Colombia',	'Costa Rica',	'Cuba',	'Dominica',	'Ecuador',	'El Salvador',	'Grenada',	'Guatemala',	'Guyana',	
'Haiti',	'Honduras',	'Jamaica',	'Mexico',	'Nicaragua',	'Panama',	'Paraguay',	'Peru',	'Dominican Republic',	'Saint Kitts and Nevis',
'Saint Vincent and the Grenadines',	'Saint Lucia',	'Suriname',	'Trinidad and Tobago',	'Uruguay',	'Venezuela (Bolivarian Republic of)',
'Latin America and the Caribbean'];
let UnemployementRate_Countries = ['Argentina','Barbados',	'Belize',	'Bolivia (Plurinational State of)',
'Brazil',	'Chile',	'Colombia',	'Costa Rica', 'Ecuador',	'El Salvador',	'Guatemala',	
'Honduras',	'Jamaica',	'Mexico',	'Nicaragua',	'Panama',	'Paraguay',	'Peru',	'Dominican Republic','Trinidad and Tobago',	'Uruguay',
'Latin America and the Caribbean',	'Latin America','Caribbean'];
let PovertyPercentage_Countries = ['Bolivia (Plurinational State of)',
'Brazil',	'Chile',	'Colombia',	'Costa Rica', 'Ecuador',	'El Salvador',	
'Honduras','Mexico',		'Panama',	'Paraguay',	'Peru',	'Dominican Republic', 'Uruguay', 
'Latin America'];
let MigrationThoughts_Countries = ['Argentina','Bolivia (Plurinational State of)',
'Brazil',	'Chile',	'Colombia',	'Costa Rica', 'Ecuador',	'El Salvador',	'Guatemala',	
'Honduras','Mexico',	'Nicaragua',	'Panama',	'Paraguay',	'Peru',	'Dominican Republic', 'Uruguay', 'Venezuela (Bolivarian Republic of)',
'Latin America'];

    let PIBCountrySelector = document.getElementById('EconomicalCountry');
    PIBCountrySelector.addEventListener('change',async ()=>{
        let selected = PIBCountrySelector.selectedOptions;
        let name = selected[0].innerHTML;
        console.log(name);
        var data;
        if(PIBIndicatorSelector.selectedOptions[0].innerHTML == 'PIB total'){
            data = await fetch('./TotalPIB.json').then(Response=>Response.json());
            let countries_ids = data.body.dimensions[0].members;
            let id;
            for (let index = 0; index < countries_ids.length; index++) {
                if(countries_ids[index].name == name) id = countries_ids[index].id;                
            }
            let values = [];
            for (let index = 0; index < data.body.data.length; index++) {
                if (data.body.data[index].dim_208==id) {
                    values.push(data.body.data[index].value);
                }                
            }
            console.log(values);
            PIBGraph.data.datasets[0].data = values;
            PIBGraph.options.scales.y.title.text = "Millones de dolares";
            PIBGraph.update();
        }
        else{
            data = await fetch('./PIBgrowth.json').then(Response=>Response.json());
            let countries_ids = data.body.dimensions[0].members;
            let id;
            for (let index = 0; index < countries_ids.length; index++) {
                if(countries_ids[index].name == name) id = countries_ids[index].id;                
            }
            let values = [];
            for (let index = 0; index < data.body.data.length; index++) {
                if (data.body.data[index].dim_208==id) {
                    values.push(data.body.data[index].value);
                }                
            }
            console.log(values);
            PIBGraph.data.datasets[0].data = values;
            PIBGraph.options.scales.y.title.text = "Cambio porcentual";
            PIBGraph.update();
        }


    })
    let PIBIndicatorSelector = document.getElementById('EconomicalIndicator');
    let total = document.createElement('option');
    total.innerHTML = 'PIB total';
    PIBIndicatorSelector.appendChild(total);
    let GrowthRate = document.createElement('option');
    GrowthRate.innerHTML = 'PIB indice de crecimiento';
    PIBIndicatorSelector.appendChild(GrowthRate );
    let HealthExpenditureCountrySelector = document.getElementById('HealthCountry');

    HealthExpenditureCountrySelector.addEventListener('change',async()=>{
        let selected = HealthExpenditureCountrySelector.selectedOptions;
        let name = selected[0].innerHTML;
        console.log(name);
        data = await fetch('./GastosEnSalud.json').then(Response=>Response.json());
            let countries_ids = data.body.dimensions[0].members;
            let id;
            for (let index = 0; index < countries_ids.length; index++) {
                if(countries_ids[index].name == name) id = countries_ids[index].id;                
            }
            let values = [];
            for (let index = 0; index < data.body.data.length; index++) {
                if (data.body.data[index].dim_208==id) {
                    values.push(data.body.data[index].value);
                }                
            }
            console.log(values);
            HealthExpenditureGraph.data.datasets[0].data = values;
            HealthExpenditureGraph.update();
    })

    let UnemployementRateCountrySelector = document.getElementById('UnemployementCountry');

    UnemployementRateCountrySelector.addEventListener('change',async()=>{
        let selected = UnemployementRateCountrySelector.selectedOptions;
        let name = selected[0].innerHTML;
        console.log(name);
        data = await fetch('./UnemploymentRate.json').then(Response=>Response.json());
            let countries_ids = data.body.dimensions[2].members;
            let countryid;
            for (let index = 0; index < countries_ids.length; index++) {
                if(countries_ids[index].name == name) countryid = countries_ids[index].id;                
            }
            console.log(countryid);            
            let values = [];
            for (let index = 0; index < data.body.data.length; index++) {
                if (data.body.data[index].dim_208==countryid) {
                    values.push(data.body.data[index].value);
                }                
            }
            console.log(values);
            UnemployementRateGraph.data.datasets[0].data = values;
            UnemployementRateGraph.update();
    })

    let PovertyPercentageCountrySelector = document.getElementById('PovertyCountry');
    PovertyPercentageCountrySelector.addEventListener('change',async()=>{
        let selected = PovertyPercentageCountrySelector.selectedOptions;
        let name = selected[0].innerHTML;
        console.log(name);
        data = await fetch('./Poverty.json').then(Response=>Response.json());
            let countries_ids = data.body.dimensions[0].members;
            let countryid;
            for (let index = 0; index < countries_ids.length; index++) {
                if(countries_ids[index].name == name) countryid = countries_ids[index].id;                
            }
            console.log(countryid);            
            let povertyvalues = [];
            let extremepovertyvalues = [];
            for (let index = 0; index < data.body.data.length; index++) {
                if (data.body.data[index].dim_208==countryid &&data.body.data[index].dim_1361==1362) {
                    povertyvalues.push(data.body.data[index].value);
                }  
                else if (data.body.data[index].dim_208==countryid &&data.body.data[index].dim_1361==1363) {
                    extremepovertyvalues.push(data.body.data[index].value); 
                }              
            }
            console.log(povertyvalues);
            console.log(extremepovertyvalues);
            PovertyGraph.data.datasets[0].data = povertyvalues;
            PovertyGraph.data.datasets[1].data = extremepovertyvalues;
            PovertyGraph.update();
    })


    let MigrationThoughtsCountrySelector = document.getElementById('MigrationThoughtsCountry');
    MigrationThoughtsCountrySelector.addEventListener('change',async()=>{
        let selected = MigrationThoughtsCountrySelector.selectedOptions;
        let name = selected[0].innerHTML;
        console.log(name);
        data = await fetch('./MigrationThoughts.json').then(Response=>Response.json());
            let countries_ids = data.body.dimensions[0].members;
            let countryid;
            for (let index = 0; index < countries_ids.length; index++) {
                if(countries_ids[index].name == name) countryid = countries_ids[index].id;                
            }
            console.log(countryid);            
            let values = [];
            for (let index = 0; index < data.body.data.length; index++) {
                if (data.body.data[index].dim_208==countryid) {
                    values.push(data.body.data[index].value);
                }                          
            }
            MigrationThoughtsGraph.data.datasets[0].data = values;
            MigrationThoughtsGraph.update();
    })
    

    for (let index = 0; index < PIB_Countries.length; index++) {
        let option = document.createElement('option');
        option.innerHTML = PIB_Countries[index];
        PIBCountrySelector.appendChild(option);
    }
    for (let index = 0; index < HealthExpenditure_Countries.length; index++) {
        let option = document.createElement('option');
        option.innerHTML = HealthExpenditure_Countries[index];
        HealthExpenditureCountrySelector.appendChild(option);
    }
    for (let index = 0; index < UnemployementRate_Countries.length; index++) {
        let option = document.createElement('option');
        option.innerHTML = UnemployementRate_Countries[index];
        UnemployementRateCountrySelector.appendChild(option);
    }
    for (let index = 0; index < PovertyPercentage_Countries.length; index++) {
        let option = document.createElement('option');
        option.innerHTML = PovertyPercentage_Countries[index];
        PovertyPercentageCountrySelector.appendChild(option);
    }
    for (let index = 0; index < MigrationThoughts_Countries.length; index++) {
        let option = document.createElement('option');
        option.innerHTML = MigrationThoughts_Countries[index];
        MigrationThoughtsCountrySelector.appendChild(option);
    }

    let CitizenshipAdquisitionYearSelector = document.getElementById('CitizenshipAdquisitionYear');
    let first = document.createElement('option');
    first.innerHTML = '2017';
    CitizenshipAdquisitionYearSelector.appendChild(first);
    let second = document.createElement('option');
    second.innerHTML = '2018';
    CitizenshipAdquisitionYearSelector.appendChild(second);
    let third = document.createElement('option');
    third.innerHTML = '2019';
    CitizenshipAdquisitionYearSelector.appendChild(third);
    let fourth = document.createElement('option');
    fourth.innerHTML = '2020';
    CitizenshipAdquisitionYearSelector.appendChild(fourth);
    let fifth = document.createElement('option');
    fifth.innerHTML = '2021';
    CitizenshipAdquisitionYearSelector.appendChild(fifth);
    let sixth = document.createElement('option');
    sixth.innerHTML = '2022';
    CitizenshipAdquisitionYearSelector.appendChild(sixth);
    CitizenshipAdquisitionYearSelector.addEventListener('change',async()=>{
        let selected = CitizenshipAdquisitionYearSelector.selectedOptions;
        let year = selected[0].innerHTML;
        data = await fetch('./InmigrantsByContinent.json').then(Response=>Response.json());
        let index;
        if (year=='2017') {
            index = 0;
        }
        if (year=='2018') {
            index = 1;
        }
        if (year=='2019') {
            index = 2;
        }
        if (year=='2020') {
            index = 3;
        }
        if (year=='2021') {
            index = 4;
        }
        if (year=='2022') {
            index = 5;
        }
        let values = [];
        let obj = data.years[index];
        values.push(obj.Europa);
        values.push(obj.Asia);
        values.push(obj.LATAM);
        values.push(obj.Canada);
        values.push(obj.Africa);
        values.push(obj.Oceania);
        CitizenshipAdquisitionGraph.data.datasets[0].data = values;
        CitizenshipAdquisitionGraph.update();
    })
});


