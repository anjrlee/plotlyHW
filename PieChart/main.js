async function main(year) {
    try {
        const dataArray = await fetchDataPie();
        let PieChartGraph=document.getElementById('PieChartGraph');
        let trace1 ={};
        trace1.type ="pie";
        trace1.labels =[];
        trace1.values =[];
        trace1.title="";
        for(let i=3; i<dataArray.length; i++){
            trace1.labels[i] =dataArray[0][i];
            trace1.values[i] =dataArray[year-1960+1][i];
        }
        let data =[];
        data.push(trace1);
        let layout ={margin:{t:50}}
        Plotly.newPlot(PieChartGraph, data,layout);


    } catch (error) {
      console.error('Error:', error);
    }
  }


main(2000);
document.write("<button>test</button");