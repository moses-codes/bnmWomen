const express = require('express')
const app = express()
const PORT = 3005

const bestNewMusicWomen = {
    "hypnos": {
        "artist": "ravyn lenae",
        "genre": "pop/r&b",
        "score": 8.5,
        "releaseDate": '2022-05-20',
        "bestNewTrackAwarded": false,
    },
    "motomami": {
        "artist": "rosalia",
        "genre": "pop/r&b",
        "score": 8.4,
        "releaseDate": '2022-03-18',
        "bestNewTrackAwarded": false,
    },
    "topical dancer": {
        "artist": "charlotte adigery, bolis pupul",
        "genre": "electronic",
        "score": 8.2,
        "releaseDate": '2022-03-04',
        "bestNewTrackAwarded": true,
    },
    "life on earth": {
        "artist": "Hurray for the Riff Raff",
        "genre": "rock",
        "score": 8.3,
        "releaseDate": '2022-02-18',
        "bestNewTrackAwarded": false,
    },
    "heaux tales, mo' tales: the deluxe": {
        "artist": "jazmine sullivan",
        "genre": "pop/r&b",
        "score": 8.4,
        "releaseDate": '2022-02-11',
        "bestNewTrackAwarded": false,
    },
    'glitch princess': {
        "artist": "yeule",
        "genre": "pop/r&b",
        "score": 8.3,
        "releaseDate": '2022-02-04',
        "bestNewTrackAwarded": true,
    },
    'kick iii': {
        "artist": "arca",
        "genre": "experimental",
        "score": 8.3,
        "releaseDate": '2021-12-01',
        "bestNewTrackAwarded": false,
    },
    'una rosa': {
        "artist": "xenia rubinos",
        "genre": "rock",
        "score": 8.4,
        "releaseDate": '2021-10-15',
        "bestNewTrackAwarded": false,
    },
    'space 1.8': {
        "artist": "nala sinephro",
        "genre": "jazz, experimental",
        "score": 8.3,
        "releaseDate": '2021-09-03',
        "bestNewTrackAwarded": false,
    },
    'any shape you take': {
        "artist": "indigo de souza",
        "genre": "rock",
        "score": 8.3,
        "releaseDate": '2021-08-27',
        "bestNewTrackAwarded": true,
    },
    'fatigue': {
        "artist": "l'rain",
        "genre": "experimental",
        "score": 8.5,
        "releaseDate": '2021-06-25',
        "bestNewTrackAwarded": false,
    },
    'vulture prince': {
        "artist": "arooj aftab",
        "genre": "jazz, folk/country",
        "score": 8.3,
        "releaseDate": '2021-04-23',
        "bestNewTrackAwarded": true,
    },
    'uneasy': {
        "artist": "vijay iyer, linda may han oh, tyshawn sorey",
        "genre": "jazz",
        "score": 8.6,
        "releaseDate": '2021-04-09',
        "bestNewTrackAwarded": false,
    },
    'entertainment, death': {
        "artist": "spirit of the beehive",
        "genre": "rock",
        "score": 8.3,
        "releaseDate": '2021-04-09',
        "bestNewTrackAwarded": false,
    },
    'heaux tales': {
        "artist": "jazmine sullivan",
        "genre": "pop/r&b",
        "score": 8.6,
        "releaseDate": '2021-01-08',
        "bestNewTrackAwarded": true,
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/', (req, res) => {
    res.json(bestNewMusicWomen)
})

app.listen(PORT, () => {
    console.log(`we out here on this server`)
})