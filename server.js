const express = require('express')
const path = require('path')

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
})
app.post('/tweettypo', (req, res) => {

})

app.listen(PORT, () => console.log('Waiting for news on port', PORT))


https://api.twitter.com/1.1/statuses/update.json

"https://api.twitter.com/1/statuses/update.json?oauth_signature=NCs%2B1unOYZQW%2BNCTmsRwmiqtrZQ%3D&oauth_version=1.0&oauth_nonce=-619997894&oauth_signature_method=HMAC-SHA1&oauth_consumer_key=gGrr4khdilkzano8gYxK4Q&oauth_token=146439820-n07FzSB78bDWEUzPPP9WZnwdnwW917FyJi1gwKWM&oauth_timestamp=1341309839" -d 'status=hello'
