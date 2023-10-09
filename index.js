const axios = require('axios');
const main  = async () => {
  let data = await axios.get('https://data.moa.gov.tw/api/v1/AnimalRecognition/?%24top=1000&Page=1');
  console.log(data.data.Data);
};
main();