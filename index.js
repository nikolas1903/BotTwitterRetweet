require('dotenv').config();
const Bot = require('./services/twitter-connection-service.js')

var stream = Bot.stream('statuses/filter', { track: 'Freddie Mercury', tweet_mode: 'extended' });
stream.on('tweet', RetweetAndSearch);

async function RetweetAndSearch(event) {

    Bot.post('statuses/retweet/:id', {id: event.id_str}, botRetweeted)

    function botRetweeted(error, response) {
        if (error) {
            console.log("Algo errado: " + error)
            return false;
        }
        console.log('Retweetado com sucesso.')
    }
}
