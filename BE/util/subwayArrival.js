const axios = require('axios');

const subwayArrival = process.env.SUBWAY_Arrival;

async function getSubwayArrival() {
  const Lines = await axios.get(
    `https://openapi.kric.go.kr/openapi/trainUseInfo/subwayInfo?serviceKey=${subwayArrival}&format=json&mreaWideCd=01&lnCd=2`
  );
  let lineInfo = [];
  Lines.data.body.map((e) => {
    if (e.routNm === '2호선') {
      lineInfo.push({ stinNm, stinCd, routNm });
    }
  });
  return lineInfo;
}

module.exports = getSubwayArrival;
