const express = require('express')
const SpotifyWebApi = require('spotify-web-api-node')

const app = express()

app.post('./login', (req, res) => {

    const code = req.body.code

    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: 'a3fc1a05eedf443e872b37c1fe5645c8',
        clientSecret: '4e0c2b636a5e4b50bfcf642293b8c70c'
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    })
        .catch(() => {
            res.sendStatus(400)
        })
})