const axios = require('axios');

const stationEntrance = process.env.STATION_ENTRANCE;

function getSubwayEntrance(stinCd) {
  return new Promise((resolve, reject) => {
    axios
      .all([
        axios.get(
          `https://openapi.kric.go.kr/openapi/convenientInfo/stationEntrance?serviceKey=${stationEntrance}&format=json&railOprIsttCd=S1&lnCd=2&stinCd=${stinCd}`
        ),
      ])
      .then(
        axios.spread((res1, res2) => {
          const normal = res1.data.body;
          resolve([{ normal, disabled }]);
          
        })
      );
  });
}

module.exports = getSubwayEntrance;