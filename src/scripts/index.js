const axios = require("axios");
const fs = require("fs");

(async () => {
  await axios
    .get("https://de1.api.radio-browser.info/json/countries")
    .then((x) => {
      (async (_) => {
        for (let i = 0; i < x.data.length; i++) {
          const uri = encodeURI(
            `https://de1.api.radio-browser.info/json/stations/bycountry/${x.data[i].name}`
          );
          try {
            const st = await axios.get(uri);
            writeToFile(x.data[i].name, st.data);
          } catch (error) {
            console.log("An error happened", error);
            console.log(uri);
          }
        }
      })();
    });
})();

function writeToFile(country, content) {
  var cache = [];
  const data = JSON.stringify(content, (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (cache.includes(value)) return;
      cache.push(value);
    }
    return value;
  });
  cache = null;
  fs.writeFile(`../data/countries/${country}.json`, data.toString(), (err) => {
    if (err) {
      console.log("An error happened!");
      console.log(err);
    } else {
      console.log("file created", country);
    }
  });
}
