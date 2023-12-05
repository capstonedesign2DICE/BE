const axios = require('axios');

const subwayDistance = process.env.SUBWAY_Distance;

async function getSubwayDistance() {
  const Lines = await axios.get(
    `https://openapi.kric.go.kr/openapi/trainUseInfo/subwayInfo?serviceKey=${subwayDistance}&format=json&mreaWideCd=01&lnCd=2`
  );
  let lineInfo = [];
  Lines.data.body.map((e) => {
    
      lineInfo.push({ stinNm, stinCd, routNm });
  });
  return lineInfo;
}

module.exports = getSubwayDistance;
