import axios from "axios";

async function checkImageUrl(url) {
  if (!url) return false;
  else {
    return await axios
      .get(url)
      .then(() => true)
      .catch(() => false);
  }
}

const Utils = {
  checkImageUrl: checkImageUrl,
};

export default Utils;
