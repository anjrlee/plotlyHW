async function main() {
    try {
      const dataArray = await fetchDataLS();
      let lineScatterGraph=document.getElementById('lineScatterGraph');
      let trace =[{},{},{}];
      let modeWay=["markers","lines","lines+markers"];
      let traceName=["Rating to Price","Rank to Pirce","Rank to Rating"];
      let tol=3;
      for(let i=0;i<tol;i++){
        trace[i].mode =modeWay[i];
        trace[i].type ="scatter";
        trace[i].name =traceName[i];
        trace[i].marker={size:10};
        trace[i].x =[];
        trace[i].y =[];
        trace[i].text =[]; 
      }
      for(let i=1;i<dataArray.length;i++){
          trace[0].x[i] =dataArray[i][3];
          trace[0].y[i] =dataArray[i][2];
          trace[0].text[i] =dataArray[i][1];
          trace[1].x[i] =dataArray[i][0];
          trace[1].y[i] =dataArray[i][2];
          trace[1].text[i] =dataArray[i][1];
          trace[2].x[i] =dataArray[i][0];
          trace[2].y[i] =dataArray[i][3];
          trace[2].text[i] =dataArray[i][1];
      }  
      let data =[];
      for(let i=0;i<tol;i++){
         data.push(trace[i]);
      }
      
      let layout ={margin:{t:50},xaxis:{range:[0,100]},yaxis:{range:[4,45]},title:'Scatter& Line'};
      Plotly.newPlot(lineScatterGraph, data, layout);
    } catch (error) {
      console.error('Error:', error);
    }
  }


main();

