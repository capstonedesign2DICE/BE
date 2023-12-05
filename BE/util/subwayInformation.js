const axios = require('axios');

const subwayInformation = process.env.SUBWAY_Information;

async function getSubwayInformation() {
  const Lines = await axios.get(
    `https://openapi.kric.go.kr/openapi/trainUseInfo/subwayInfo?serviceKey=${subwayInformation}&format=json&mreaWideCd=01&lnCd=2`
  );
  let lineInfo = [];
  Lines.data.body.map((e) => {
    
      lineInfo.push({ stinNm, stinCd, routNm });
  });
  return lineInfo;
}

module.exports = getSubwayInformation;
