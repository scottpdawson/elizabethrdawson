const axios = require("axios").default;
require("dotenv").config();
let ETSY_KEY = process.env.ETSY_KEY;

module.exports = async function () {
  let pottery = [];
  let shopId = 24030861;
  let limit = 9;
  let config = {
    headers: {
      "x-api-key": `${ETSY_KEY}`,
    },
  };

  await axios
    .get(
      `https://api.etsy.com/v3/application/shops/${shopId}/listings/featured`,
      config
    )
    .then((result) => {
      pottery = result.data.results;
    })
    .catch((err) => console.log(err));

  // get the images for each of the pottery pieces
  for (let i = 0; i < pottery.length; i++) {
    await axios
      .get(
        `https://api.etsy.com/v3/application/listings/${pottery[i].listing_id}/images`,
        config
      )
      .then((result) => {
        pottery[i].image_url = result.data.results[0].url_570xN;
        pottery[i].px = pottery[i].price.amount / pottery[i].price.divisor;
      });
  }
  return pottery.slice(0, limit);
};
