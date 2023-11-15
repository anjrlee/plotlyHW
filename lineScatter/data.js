
async function fetchDataLS() {
    try {
      const response = await fetch('lineScatter/data.csv');
      const csvContent = await response.text();
      const rows = csvContent.split('\n');
      const dataArray = [];
      rows.forEach(row => {
        dataArray.push(row.split(','));
      });
      return dataArray;
    } catch (error) {
      console.error('Error fetching CSV:', error);
      throw error;
    }
  }

  
  
