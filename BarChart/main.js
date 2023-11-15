
async function main(xname,yname) {
    try {
        const dataArray = await fetchData();
        let BarChartGraph=document.getElementById('BarChartGraph');
        let trace=[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];
        let data =[];
        let choiceIndex={"district":12,"year":15,"gender":3}
        for(var i=0;i<choiceIndex[xname];i++){
            trace[i].type ="bar";
            trace[i].name =dataArray[31+i][0];
           // trace[i].name =dataArray[30][i+1];
            trace[i].x =[];
            trace[i].y =[];
            for(var j=0;j<choiceIndex[yname];j++){
                trace[i].y[j]=dataArray[i+31][j+1];
                trace[i].x[j]=dataArray[30][j+1];
                //console.log("ts:"+dataArray[i+31][0]);
               // trace[i].y[j]=dataArray[j+31][i+1];
               // trace[i].x[j]=dataArray[31+j][0];
                
            }
            data.push(trace[i]);
        }
        let layout ={margin:{t:50},barmode:'stack'};
        Plotly.newPlot(BarChartGraph, data, layout);
      
    } catch (error) {
      console.error('Error:', error);
    }
  }


main("district","year");


