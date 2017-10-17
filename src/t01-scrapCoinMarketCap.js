const request = require('request')
const cheerio = require('cheerio')
const selector = ""

request('https://coinmarketcap.com/all/views/all/', (err, resp, html) => {
        if (!err){
          const $ = cheerio.load(html);
          console.log($('.currency-name-display'))
      }
})