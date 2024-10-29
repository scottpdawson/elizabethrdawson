const axios = require("axios").default;
require("dotenv").config();
let ETSY_KEY = process.env.ETSY_KEY;

module.exports = async function () {
  let pottery = [];
  let shopId = 24030861;
  let limit = 12;
  let config = {
    headers: {
      "x-api-key": `${ETSY_KEY}`,
    },
  };

  await axios
    .get(
      `https://openapi.etsy.com/v3/application/shops/${shopId}/listings/active`,
      config
    )
    // await axios.get(`https://openapi.etsy.com/v2/shops/${shopId}/listings/active?limit=${limit}&taxonomy_id=6096&api_key=${ETSY_KEY}`)
    .then((result) => {
      pottery = result.data.results;
    })
    .catch((err) => console.log(err));

  // get the images for each of the pottery pieces
  for (let i = 0; i < pottery.length; i++) {
    await axios
      .get(
        `https://openapi.etsy.com/v3/application/listings/${pottery[i].listing_id}/images`,
        config
      )
      .then((result) => {
        pottery[i].image_url = result.data.results[0].url_570xN;
        pottery[i].px = pottery[i].price.amount / pottery[i].price.divisor;
      });
  }
  return pottery.slice(0, limit);
};

// [ { listing_id: 1248883301,
//     user_id: 328045470,
//     shop_id: 24030861,
//     title: 'Circle ceramic form',
//     description:
//      'Use the code STOREPICKUP for free pickup in the Tburg/Ithaca area\n\nThis piece can be whatever you want! It could be used for anything from a succulent planter,  a chocolate dish, decor... really anything!',
//     state: 'active',
//     creation_timestamp: 1666314141,
//     created_timestamp: 1666314141,
//     ending_timestamp: 1676944941,
//     original_creation_timestamp: 1654881408,
//     last_modified_timestamp: 1666314141,
//     updated_timestamp: 1666314141,
//     state_timestamp: 1665691818,
//     quantity: 1,
//     shop_section_id: 38501380,
//     featured_rank: -1,
//     url:
//      'https://www.etsy.com/listing/1248883301/circle-ceramic-form',
//     num_favorers: 3,
//     non_taxable: false,
//     is_taxable: true,
//     is_customizable: false,
//     is_personalizable: false,
//     personalization_is_required: false,
//     personalization_char_count_max: null,
//     personalization_instructions: null,
//     listing_type: 'physical',
//     tags:
//      [ 'Kitchen',
//        'Kitchen decor',
//        'Functional pottery',
//        'ED Pottery',
//        'Pottery by Elizabeth',
//        'Shop Local',
//        'Small Business',
//        'Female Made Pottery',
//        'circle form',
//        'donut form',
//        'donut pottery',
//        'succulent planter',
//        'planter' ],
//     materials: [],
//     shipping_profile_id: 102534937079,
//     processing_min: 1,
//     processing_max: 2,
//     who_made: 'i_did',
//     when_made: '2020_2022',
//     is_supply: false,
//     item_weight: 16,
//     item_weight_unit: 'oz',
//     item_length: 8,
//     item_width: 8,
//     item_height: 8,
//     item_dimensions_unit: 'in',
//     is_private: false,
//     style: [],
//     file_data: '',
//     has_variations: false,
//     should_auto_renew: true,
//     language: 'en-US',
//     price: { amount: 3000, divisor: 100, currency_code: 'USD' },
//     taxonomy_id: 6096,
//     production_partners: [],
//     skus: [] } ]
