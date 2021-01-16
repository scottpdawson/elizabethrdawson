const axios = require('axios').default;
require('dotenv').config()
let ETSY_KEY = process.env.ETSY_KEY;

module.exports = async function() {

    let pottery = [];
    let shopId = 'edpottery';
    let limit = 6;
    
    await axios.get(`https://openapi.etsy.com/v2/shops/${shopId}/listings/active?limit=${limit}&taxonomy_id=6096&api_key=${ETSY_KEY}`)
        .then(result => { 
            pottery = result.data.results;
        })
        .catch(err => console.log(err));

    // get the images for each of the pottery pieces
    for (let i = 0; i < pottery.length; i++) {
        await axios.get(`https://openapi.etsy.com/v2/listings/${pottery[i].listing_id}/images?&api_key=${ETSY_KEY}`)
        .then(result => { 
            pottery[i].image_url = result.data.results[0].url_570xN;                    
        });
    }   
    
    return pottery;

}