const station = (n: number) => {
  let obj = [];
  for (let x = 0; x < n; x++) {
    obj.push({
      changeuuid: `11f6ad74-ce58-11e8-a54a-52543be04c81`,
      stationuuid: "11f6ad62-ce58-11e8-a54a-52543be04c81",
      name: "Kameme fm",
      url: "http://www.surfmusic.de/m3u/kameme-101-1-fm,3473.m3u",
      url_resolved:
        "http://node-25.zeno.fm/frsvy955puquv?rj-ttl=5&rj-tok=AAABdYoRToUA6Jk3ZJSBrvz1uQ",
      homepage: "http://www.mediamaxnetwork.co.ke/kameme-radio/",
      favicon:
        "http://www.mediamaxnetwork.co.ke/wp-content/uploads/2018/10/Kameme-Fm.jpg",
      tags: "",
      country: "Kenya",
      countrycode: "KE",
      state: "Nairobi",
      language: "kikuyu",
      votes: 122,
      lastchangetime: "2020-01-23 20:40:49",
      codec: "MP3",
      bitrate: 0,
      hls: 0,
      lastcheckok: 1,
      lastchecktime: "2020-11-02 17:43:48",
      lastcheckoktime: "2020-11-02 17:43:48",
      lastlocalchecktime: "2020-11-02 03:04:47",
      clicktimestamp: "2020-11-02 19:53:07",
      clickcount: 365,
      clicktrend: 6,
    });
  }
  return obj;
};

export const location = (n: number) => ({
  stationNames: station(n),
  stationUrls: station(n),
  data: station(1)[0],
  pathname: "",
  key: "",
  search: "",
  hash: "",
  state: "",
});

export const countries = (n: number) => {
  const countries = [];
  for (let x = 0; x < n; x++) {
    countries.push({ name: `country-${x}`, stationcount: x });
  }
  return countries;
};
